import { useEffect, useMemo, useState } from "react";
import { hasSupabaseConfig, supabase } from "./lib/supabase";
import type { Party, Player, Prophecy, RitualVote, Rule } from "./types";
import { generateHostToken, generatePartyCode, normalizeCode } from "./utils/partyCode";
import { clampMadness } from "./utils/madness";
import Home from "./components/Home";
import CreateParty from "./components/CreateParty";
import JoinParty from "./components/JoinParty";
import PartyDashboard from "./components/PartyDashboard";

type Screen = "home" | "create" | "join" | "party";

const keys = {
  partyCode: "cthulhu_party_id",
  playerId: "cthulhu_player_id",
  playerName: "cthulhu_player_name",
  hostToken: "cthulhu_host_token",
};

function getStored(key: string) {
  return typeof window === "undefined" ? null : localStorage.getItem(key);
}

export default function App() {
  const [screen, setScreen] = useState<Screen>("home");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [party, setParty] = useState<Party | null>(null);
  const [players, setPlayers] = useState<Player[]>([]);
  const [rules, setRules] = useState<Rule[]>([]);
  const [prophecies, setProphecies] = useState<Prophecy[]>([]);
  const [votes, setVotes] = useState<RitualVote[]>([]);
  const [connected, setConnected] = useState(false);
  const [createdUrls, setCreatedUrls] = useState<{ code: string; hostUrl: string; playerUrl: string } | null>(null);
  const [playerId, setPlayerId] = useState<string | null>(() => getStored(keys.playerId));

  const routeCode = useMemo(() => {
    if (typeof location === "undefined") return "";
    const match = location.pathname.match(/\/party\/([^/]+)/);
    return match ? decodeURIComponent(match[1]) : "";
  }, []);

  const queryParams = useMemo(() => new URLSearchParams(typeof location === "undefined" ? "" : location.search), []);
  const queryHostToken = queryParams.get("host");
  const forcePlayerMode = queryParams.get("player") === "1";
  const queryPartyCode = queryParams.get("party") || routeCode;
  const isHost = Boolean(
    party && !forcePlayerMode && (queryHostToken === party.host_token || getStored(keys.hostToken) === party.host_token),
  );

  useEffect(() => {
    if (queryPartyCode) {
      const nextScreen = queryHostToken && !forcePlayerMode ? "party" : getStored(keys.playerId) && !forcePlayerMode ? "party" : "join";
      setScreen(nextScreen);
      loadParty(queryPartyCode, nextScreen);
    }
  }, [queryPartyCode, queryHostToken, forcePlayerMode]);

  useEffect(() => {
    if (!party) return;
    refreshPartyData(party.id);
    const channel = supabase
      .channel(`party-${party.id}`)
      .on("postgres_changes", { event: "*", schema: "public", table: "parties", filter: `id=eq.${party.id}` }, () => loadParty(party.code))
      .on("postgres_changes", { event: "*", schema: "public", table: "players", filter: `party_id=eq.${party.id}` }, () => refreshPartyData(party.id))
      .on("postgres_changes", { event: "*", schema: "public", table: "rules", filter: `party_id=eq.${party.id}` }, () => refreshPartyData(party.id))
      .on("postgres_changes", { event: "*", schema: "public", table: "prophecies", filter: `party_id=eq.${party.id}` }, () => refreshPartyData(party.id))
      .on("postgres_changes", { event: "*", schema: "public", table: "ritual_votes", filter: `party_id=eq.${party.id}` }, () => refreshPartyData(party.id))
      .subscribe((status) => setConnected(status === "SUBSCRIBED"));

    return () => {
      setConnected(false);
      supabase.removeChannel(channel);
    };
  }, [party?.id]);

  async function loadParty(code: string, nextScreen: Screen = "party") {
    if (!hasSupabaseConfig) {
      setError("Faltan VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY en .env.");
      return;
    }
    const { data, error: dbError } = await supabase.from("parties").select("*").eq("code", normalizeCode(code)).single();
    if (dbError || !data) {
      setError("No encontré esa fiesta.");
      return;
    }
    setParty(data);
    localStorage.setItem(keys.partyCode, data.code);
    if (queryHostToken === data.host_token) localStorage.setItem(keys.hostToken, data.host_token);
    setScreen(nextScreen);
  }

  async function refreshPartyData(partyId: string) {
    const [playersResult, rulesResult, propheciesResult, votesResult] = await Promise.all([
      supabase.from("players").select("*").eq("party_id", partyId).order("created_at"),
      supabase.from("rules").select("*").eq("party_id", partyId).order("created_at", { ascending: false }),
      supabase.from("prophecies").select("*").eq("party_id", partyId).order("created_at", { ascending: false }),
      supabase.from("ritual_votes").select("*").eq("party_id", partyId),
    ]);
    if (playersResult.data) setPlayers(playersResult.data);
    if (rulesResult.data) setRules(rulesResult.data);
    if (propheciesResult.data) setProphecies(propheciesResult.data);
    if (votesResult.data) setVotes(votesResult.data);
  }

  async function createParty() {
    setLoading(true);
    setError(null);
    if (!hasSupabaseConfig) {
      setError("Faltan VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY en .env. Sin Supabase no se puede crear una fiesta realtime.");
      setLoading(false);
      return;
    }
    try {
      const hostToken = generateHostToken();
      let code = generatePartyCode();
      let result = await supabase.from("parties").insert({ code, host_token: hostToken, name: "Fiesta de Cthulhu" }).select("*").single();
      if (result.error?.code === "23505") {
        code = generatePartyCode();
        result = await supabase.from("parties").insert({ code, host_token: hostToken, name: "Fiesta de Cthulhu" }).select("*").single();
      }
      if (result.error || !result.data) throw result.error;
      localStorage.setItem(keys.hostToken, hostToken);
      localStorage.setItem(keys.partyCode, code);
      const playerUrl = `${location.origin}/game?party=${code}&player=1`;
      const hostUrl = `${playerUrl}&host=${hostToken}`;
      setCreatedUrls({ code, playerUrl, hostUrl });
      setParty(result.data);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "No se pudo crear la fiesta.");
    } finally {
      setLoading(false);
    }
  }

  async function joinParty(codeValue: string, name: string) {
    setLoading(true);
    setError(null);
    if (!hasSupabaseConfig) {
      setError("Faltan VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY en .env. Sin Supabase no se puede unirse a una fiesta realtime.");
      setLoading(false);
      return;
    }
    try {
      const code = normalizeCode(codeValue);
      const { data: partyData, error: partyError } = await supabase.from("parties").select("*").eq("code", code).single();
      if (partyError || !partyData) throw new Error("No encontré esa fiesta.");
      const { count } = await supabase.from("players").select("id", { count: "exact", head: true }).eq("party_id", partyData.id);
      if ((count || 0) >= 11) throw new Error("El culto está completo.");
      const { data: playerData, error: playerError } = await supabase.from("players").insert({ party_id: partyData.id, name: name.trim() }).select("*").single();
      if (playerError || !playerData) throw playerError;
      localStorage.setItem(keys.partyCode, code);
      localStorage.setItem(keys.playerId, playerData.id);
      localStorage.setItem(keys.playerName, playerData.name);
      setPlayerId(playerData.id);
      setParty(partyData);
      history.replaceState(null, "", `/game?party=${code}`);
      setScreen("party");
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "No se pudo unir.");
    } finally {
      setLoading(false);
    }
  }

  async function log(type: string, description: string, targetPlayerId: string | null = null, deltaMadness = 0) {
    if (!party) return;
    await supabase.from("game_logs").insert({ party_id: party.id, type, description, player_id: targetPlayerId, delta_madness: deltaMadness });
  }

  async function updateMadness(player: Player, delta: number, reason: string) {
    if (delta > 0 && player.madness_points >= 5) {
      await log("tributo", `${player.name}: Tributo Ritual por ${reason}`, player.id, 0);
      alert(`${player.name} ya está en 5 Locura. Activa Tributo Ritual. Alcohol opcional, siempre con alternativa.`);
      return;
    }
    const next = clampMadness(player.madness_points + delta);
    await supabase.from("players").update({ madness_points: next }).eq("id", player.id);
    await log("locura", `${player.name}: ${reason}`, player.id, next - player.madness_points);
  }

  function updateMadnessById(id: string, delta: number, reason: string) {
    const player = players.find((item) => item.id === id);
    if (player) updateMadness(player, delta, reason);
  }

  async function resetMadness(player: Player) {
    await supabase.from("players").update({ madness_points: 0 }).eq("id", player.id);
    await log("reset", `${player.name}: Locura reiniciada`, player.id, -player.madness_points);
  }

  function tribute(player: Player) {
    log("tributo", `${player.name}: Tributo Ritual activado`, player.id, 0);
    alert(`Tributo Ritual para ${player.name}. Puede ser reto corto, brindis oscuro sin alcohol obligatorio, confesión falsa, regla personal, brebaje opcional o foto ritual.`);
  }

  async function assignRoles(assignments: { playerId: string; role: string | null }[]) {
    await Promise.all(assignments.map((assignment) => supabase.from("players").update({ role: assignment.role }).eq("id", assignment.playerId)));
  }

  async function createRule(text: string, type: Rule["type"], targetPlayerId: string | null) {
    if (!party) return;
    await supabase.from("rules").insert({ party_id: party.id, text: text.trim(), type, target_player_id: targetPlayerId || null, created_by: playerId || "host" });
  }

  async function vote(voteValue: "invoke" | "seal") {
    if (!party || !playerId) return;
    await supabase.from("ritual_votes").upsert({ party_id: party.id, player_id: playerId, vote: voteValue }, { onConflict: "party_id,player_id" });
  }

  async function revealRitual() {
    if (!party) return;
    const invoke = votes.filter((item) => item.vote === "invoke").length;
    const seal = votes.filter((item) => item.vote === "seal").length;
    await supabase.from("parties").update({ ritual_revealed: true, ritual_result: invoke > seal ? "invoke" : "seal" }).eq("id", party.id);
  }

  if (screen === "create") {
    return (
      <CreateParty
        code={createdUrls?.code || null}
        hostUrl={createdUrls?.hostUrl || null}
        playerUrl={createdUrls?.playerUrl || null}
        loading={loading}
        error={error}
        onCreate={createParty}
        onOpen={() => createdUrls && (location.href = createdUrls.hostUrl)}
        onBack={() => setScreen("home")}
      />
    );
  }

  if (screen === "join") {
    return <JoinParty initialCode={queryPartyCode || getStored(keys.partyCode) || ""} loading={loading} error={error} onJoin={joinParty} onBack={() => setScreen("home")} />;
  }

  if (screen === "party" && party) {
    return (
      <PartyDashboard
        party={party}
        players={players}
        rules={rules}
        prophecies={prophecies}
        votes={votes}
        playerId={playerId}
        isHost={isHost}
        connected={connected}
        configured={hasSupabaseConfig}
        onLeave={() => {
          localStorage.removeItem(keys.playerId);
          setPlayerId(null);
          setScreen("home");
          history.replaceState(null, "", "/");
        }}
        onMadness={updateMadness}
        onMadnessById={updateMadnessById}
        onReset={resetMadness}
        onTribute={tribute}
        onRoleAssign={assignRoles}
        onRuleCreate={createRule}
        onRuleToggle={(rule) => supabase.from("rules").update({ is_active: !rule.is_active }).eq("id", rule.id)}
        onRuleDelete={(rule) => supabase.from("rules").delete().eq("id", rule.id)}
        onRuleBreak={(id, reason) => updateMadnessById(id, 1, `Rompió regla: ${reason}`)}
        onTimerUpdate={(minutes, nextCheckAt) => supabase.from("parties").update({ check_interval_minutes: minutes, next_check_at: nextCheckAt }).eq("id", party.id)}
        onProphecyCreate={(text, isNight) => supabase.from("prophecies").insert({ party_id: party.id, text, is_night_prophecy: isNight, author_player_id: playerId })}
        onProphecyResolve={async (prophecy, wasGuessed) => {
          await supabase.from("prophecies").update({ was_guessed: wasGuessed }).eq("id", prophecy.id);
          const aldair = players.find((item) => item.name.toLowerCase().includes("aldair")) || players[0];
          if (wasGuessed && prophecy.author_player_id) updateMadnessById(prophecy.author_player_id, 1, "Aldair adivinó la profecía");
          if (!wasGuessed && aldair) updateMadness(aldair, 1, "Aldair falló la profecía");
        }}
        onProphecyOfficial={(prophecy) => supabase.from("prophecies").update({ is_official: true }).eq("id", prophecy.id)}
        onProphecyFulfill={(prophecy) => supabase.from("prophecies").update({ fulfilled: true }).eq("id", prophecy.id)}
        onTeamResult={(ids, delta, reason) => ids.forEach((id) => updateMadnessById(id, delta, reason))}
        onVote={vote}
        onReveal={revealRitual}
      />
    );
  }

  return <Home configured={hasSupabaseConfig} onCreate={() => setScreen("create")} onJoin={() => setScreen("join")} />;
}
