import type { Party, Player, Prophecy, RitualVote, Rule } from "../types";
import ConnectionStatus from "./ConnectionStatus";
import PlayerCard from "./PlayerCard";
import RoleManager from "./RoleManager";
import RuleBook from "./RuleBook";
import GameList from "./GameList";
import MadnessCheckTimer from "./MadnessCheckTimer";
import FinalRitual from "./FinalRitual";
import { Copy } from "lucide-react";

type Props = {
  party: Party;
  players: Player[];
  rules: Rule[];
  prophecies: Prophecy[];
  votes: RitualVote[];
  playerId: string | null;
  isHost: boolean;
  connected: boolean;
  configured: boolean;
  onLeave: () => void;
  onMadness: (player: Player, delta: number, reason: string) => void;
  onMadnessById: (playerId: string, delta: number, reason: string) => void;
  onReset: (player: Player) => void;
  onTribute: (player: Player) => void;
  onRoleAssign: (assignments: { playerId: string; role: string | null }[]) => void;
  onRuleCreate: (text: string, type: Rule["type"], targetPlayerId: string | null) => void;
  onRuleToggle: (rule: Rule) => void;
  onRuleDelete: (rule: Rule) => void;
  onRuleBreak: (playerId: string, reason: string) => void;
  onTimerUpdate: (minutes: number, nextCheckAt: string | null) => void;
  onProphecyCreate: (text: string, isNight: boolean) => void;
  onProphecyResolve: (prophecy: Prophecy, wasGuessed: boolean) => void;
  onProphecyOfficial: (prophecy: Prophecy) => void;
  onProphecyFulfill: (prophecy: Prophecy) => void;
  onTeamResult: (playerIds: string[], delta: number, reason: string) => void;
  onVote: (vote: "invoke" | "seal") => void;
  onReveal: () => void;
};

export default function PartyDashboard(props: Props) {
  const sortedPlayers = [...props.players].sort((a, b) => b.madness_points - a.madness_points);
  const origin = typeof window === "undefined" ? "" : window.location.origin;
  const playerUrl = `${origin}/game?party=${props.party.code}&player=1`;
  const hostUrl = `${origin}/game?party=${props.party.code}&host=${props.party.host_token}`;

  return (
    <main className="mx-auto grid w-full max-w-5xl gap-4 px-4 py-5 md:grid-cols-[1fr_1fr]">
      <header className="md:col-span-2">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="label">Fiesta {props.party.code}</p>
            <h1 className="text-3xl font-black text-bone">Panel del culto</h1>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <ConnectionStatus connected={props.connected} configured={props.configured} />
            <button className="btn btn-secondary" onClick={props.onLeave}>Salir</button>
          </div>
        </div>
      </header>

      {props.isHost && (
        <section className="panel grid gap-3 md:col-span-2">
          <div>
            <p className="label">Compartir fiesta</p>
            <h2 className="section-title">Links del culto</h2>
          </div>
          <div className="grid gap-2 md:grid-cols-2">
            <CopyLink label="Participantes" value={playerUrl} />
            <CopyLink label="Anfitrión" value={hostUrl} />
          </div>
        </section>
      )}

      <section className="panel grid gap-3">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="label">Jugadores</p>
            <h2 className="section-title">{props.players.length}/11 reunidos</h2>
          </div>
          <span className="rounded-full border border-relic/20 px-3 py-1 text-xs text-bone/70">{props.isHost ? "Anfitrión" : "Jugador"}</span>
        </div>
        <div className="grid gap-2">
          {sortedPlayers.map((player) => (
            <PlayerCard
              key={player.id}
              player={player}
              isHost={props.isHost}
              onMadness={props.onMadness}
              onReset={props.onReset}
              onTribute={props.onTribute}
            />
          ))}
        </div>
      </section>

      <MadnessCheckTimer
        party={props.party}
        players={props.players}
        isHost={props.isHost}
        onUpdateTimer={props.onTimerUpdate}
        onMadness={props.onMadness}
      />

      <RoleManager players={props.players} isHost={props.isHost} onAssign={props.onRoleAssign} />
      <RuleBook
        rules={props.rules}
        players={props.players}
        isHost={props.isHost}
        onCreate={props.onRuleCreate}
        onToggle={props.onRuleToggle}
        onDelete={props.onRuleDelete}
        onBreak={props.onRuleBreak}
      />
      <div className="md:col-span-2">
        <GameList
          players={props.players}
          prophecies={props.prophecies}
          playerId={props.playerId}
          isHost={props.isHost}
          onProphecyCreate={props.onProphecyCreate}
          onProphecyResolve={props.onProphecyResolve}
          onProphecyOfficial={props.onProphecyOfficial}
          onProphecyFulfill={props.onProphecyFulfill}
          onMadnessById={props.onMadnessById}
          onTeamResult={props.onTeamResult}
        />
      </div>
      <div className="md:col-span-2">
        <FinalRitual
          party={props.party}
          players={props.players}
          votes={props.votes}
          playerId={props.playerId}
          isHost={props.isHost}
          onVote={props.onVote}
          onReveal={props.onReveal}
        />
      </div>
    </main>
  );
}

function CopyLink({ label, value }: { label: string; value: string }) {
  return (
    <button
      className="flex min-h-16 items-center justify-between gap-3 rounded-md border border-relic/20 bg-black/25 p-3 text-left text-sm text-bone/80"
      onClick={() => navigator.clipboard.writeText(value)}
      title={`Copiar link de ${label.toLowerCase()}`}
    >
      <span className="min-w-0">
        <span className="label block">{label}</span>
        <span className="block truncate">{value}</span>
      </span>
      <Copy className="shrink-0 text-relic" size={18} />
    </button>
  );
}
