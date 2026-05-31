import { useState } from "react";
import type { Player } from "../types";
import { litanyFragments } from "../constants/litanyFragments";

type Props = {
  players: Player[];
  isHost: boolean;
  onResult: (playerId: string, delta: number, reason: string) => void;
};

export default function LitanyGame({ players, isHost, onResult }: Props) {
  const [fragment, setFragment] = useState(litanyFragments[0]);
  const [playerId, setPlayerId] = useState(players[0]?.id || "");

  return (
    <section className="grid gap-3">
      <div className="rounded-md border border-relic/20 bg-elder/35 p-4 text-lg font-bold leading-relaxed">{fragment}</div>
      <button className="btn btn-secondary" onClick={() => setFragment(litanyFragments[Math.floor(Math.random() * litanyFragments.length)])}>Otro fragmento</button>
      {isHost && (
        <div className="grid gap-2">
          <select className="input" value={playerId} onChange={(event) => setPlayerId(event.target.value)}>
            {players.map((player) => <option key={player.id} value={player.id}>{player.name}</option>)}
          </select>
          <div className="grid gap-2 sm:grid-cols-3">
            <button className="btn btn-secondary" disabled={!playerId} onClick={() => onResult(playerId, -1, "Recitó bien")}>Bien</button>
            <button className="btn btn-secondary" disabled={!playerId} onClick={() => onResult(playerId, 1, "Falló Letanía")}>Falló</button>
            <button className="btn btn-secondary" disabled={!playerId} onClick={() => onResult(playerId, 1, "Rompió regla en Letanía")}>Rompió</button>
          </div>
        </div>
      )}
    </section>
  );
}
