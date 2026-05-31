import type { Party, Player, Prophecy, RitualVote, Rule } from "../types";
import ConnectionStatus from "./ConnectionStatus";
import PlayerCard from "./PlayerCard";
import RoleManager from "./RoleManager";
import RuleBook from "./RuleBook";
import GameList from "./GameList";
import MadnessCheckTimer from "./MadnessCheckTimer";
import FinalRitual from "./FinalRitual";

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

  return (
    <main className="mx-auto grid w-full max-w-5xl gap-4 px-4 py-5 md:grid-cols-[1fr_1fr]">
      <header className="md:col-span-2">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="label">Fiesta {props.party.code}</p>
            <h1 className="text-3xl font-black text-bone">Panel del culto</h1>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <ConnectionStatus connected={props.connected} configured={props.configured} />
            <button className="btn btn-secondary" onClick={props.onLeave}>Salir</button>
          </div>
        </div>
      </header>

      <section className="panel grid gap-3">
        <div className="flex items-center justify-between gap-3">
          <div>
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
