import type { Party, Player, RitualVote } from "../types";

type Props = {
  party: Party;
  players: Player[];
  votes: RitualVote[];
  playerId: string | null;
  isHost: boolean;
  onVote: (vote: "invoke" | "seal") => void;
  onReveal: () => void;
};

export default function FinalRitual({ party, players, votes, playerId, isHost, onVote, onReveal }: Props) {
  const myVote = votes.find((vote) => vote.player_id === playerId);
  const result = party.ritual_result;
  const targetMadness = result === "invoke" ? Math.max(...players.map((p) => p.madness_points), 0) : Math.min(...players.map((p) => p.madness_points), 5);
  const winners = result ? players.filter((player) => player.madness_points === targetMadness) : [];
  const invokeVotes = votes.filter((vote) => vote.vote === "invoke").length;
  const sealVotes = votes.filter((vote) => vote.vote === "seal").length;

  return (
    <section className="panel grid gap-3">
      <div>
        <p className="label">Ritual Final</p>
        <h2 className="section-title">{party.ritual_revealed ? "Resultado revelado" : "Votos secretos"}</h2>
      </div>
      <p className="text-sm text-bone/65">Faltan {Math.max(0, players.length - votes.length)} de {players.length} votos.</p>
      {!party.ritual_revealed && (
        <div className="grid grid-cols-2 gap-2">
          <button className={`btn ${myVote?.vote === "invoke" ? "" : "btn-secondary"}`} disabled={!playerId} onClick={() => onVote("invoke")}>Invocar</button>
          <button className={`btn ${myVote?.vote === "seal" ? "" : "btn-secondary"}`} disabled={!playerId} onClick={() => onVote("seal")}>Sellar</button>
        </div>
      )}
      {isHost && !party.ritual_revealed && <button className="btn btn-danger" onClick={onReveal}>Revelar ritual</button>}
      {party.ritual_revealed && result && (
        <div className="rounded-md border border-relic/20 bg-elder/35 p-3">
          <p className="text-sm text-bone/70">Invocar {invokeVotes} · Sellar {sealVotes}</p>
          <p className="mt-2 text-xl font-black text-relic">{result === "invoke" ? "Gana Invocar: mayor Locura" : "Gana Sellar: menor Locura"}</p>
          <p className="mt-1">Ganadores: {winners.map((player) => player.name).join(", ")}</p>
          <p className="mt-2 text-sm text-bone/65">Perdedores pueden hacer un último Tributo Ritual, con alternativa sin alcohol.</p>
        </div>
      )}
    </section>
  );
}
