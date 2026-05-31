import { useMemo, useState } from "react";
import type { Player } from "../types";
import { creatureDescriptions } from "../constants/creatureDescriptions";

type Props = {
  players: Player[];
  isHost: boolean;
  onTeamResult: (playerIds: string[], delta: number, reason: string) => void;
};

export default function BasementCreatureGame({ players, isHost, onTeamResult }: Props) {
  const [description, setDescription] = useState(creatureDescriptions[0]);
  const [seconds, setSeconds] = useState(180);
  const teams = useMemo(() => ({
    a: players.filter((_, index) => index % 2 === 0),
    b: players.filter((_, index) => index % 2 === 1),
  }), [players]);

  return (
    <section className="grid gap-3">
      <div className="rounded-md border border-relic/20 bg-black/25 p-3">
        <p className="label">Descripción para anfitrión</p>
        <p className="mt-1">{isHost ? description : "La descripción está oculta para jugadores."}</p>
      </div>
      {isHost && (
        <div className="grid gap-2">
          <button className="btn btn-secondary" onClick={() => setDescription(creatureDescriptions[Math.floor(Math.random() * creatureDescriptions.length)])}>Generar criatura</button>
          <label className="grid gap-1">
            <span className="label">Timer de dibujo</span>
            <input className="input" type="number" min="60" max="600" step="15" value={seconds} onChange={(event) => setSeconds(Number(event.target.value))} />
          </label>
          <div className="rounded-md border border-relic/20 bg-elder/30 p-3 text-center text-3xl font-black text-relic">{Math.floor(seconds / 60)}:{String(seconds % 60).padStart(2, "0")}</div>
          <Team label="Equipo A" players={teams.a} />
          <Team label="Equipo B" players={teams.b} />
          <div className="grid grid-cols-2 gap-2">
            <button className="btn btn-secondary" onClick={() => onTeamResult(teams.a.map((p) => p.id), -1, "Equipo A ganó Sótano")}>Gana A</button>
            <button className="btn btn-secondary" onClick={() => onTeamResult(teams.b.map((p) => p.id), -1, "Equipo B ganó Sótano")}>Gana B</button>
            <button className="btn btn-danger" onClick={() => onTeamResult(teams.a.map((p) => p.id), 1, "Equipo A perdió Sótano")}>Pierde A</button>
            <button className="btn btn-danger" onClick={() => onTeamResult(teams.b.map((p) => p.id), 1, "Equipo B perdió Sótano")}>Pierde B</button>
          </div>
        </div>
      )}
    </section>
  );
}

function Team({ label, players }: { label: string; players: Player[] }) {
  return <p className="text-sm text-bone/70"><strong className="text-relic">{label}:</strong> {players.map((player) => player.name).join(", ") || "Sin jugadores"}</p>;
}
