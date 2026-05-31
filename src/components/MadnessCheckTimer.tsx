import { useEffect, useMemo, useState } from "react";
import type { Party, Player } from "../types";
import { tributeOptions } from "../constants/tributeOptions";

type Props = {
  party: Party;
  players: Player[];
  isHost: boolean;
  onUpdateTimer: (minutes: number, nextCheckAt: string | null) => void;
  onMadness: (player: Player, delta: number, reason: string) => void;
};

export default function MadnessCheckTimer({ party, players, isHost, onUpdateTimer, onMadness }: Props) {
  const [now, setNow] = useState(Date.now());
  const nextTime = party.next_check_at ? new Date(party.next_check_at).getTime() : null;
  const remaining = nextTime ? Math.max(0, nextTime - now) : null;
  const focusPlayers = useMemo(() => {
    const max = Math.max(0, ...players.map((player) => player.madness_points));
    return players.filter((player) => player.madness_points === max);
  }, [players]);
  const chosen = players.find((player) => player.role === "Elegido de Cthulhu");

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const start = (minutes = party.check_interval_minutes) => {
    onUpdateTimer(minutes, new Date(Date.now() + minutes * 60_000).toISOString());
  };

  return (
    <section className="panel grid gap-3">
      <div>
        <p className="label">Chequeo de Locura</p>
        <h2 className="section-title">{remaining === null ? "Timer pausado" : formatTime(remaining)}</h2>
      </div>
      <p className="text-sm text-bone/65">Foco actual: {focusPlayers.map((player) => player.name).join(", ") || "sin jugadores"}</p>
      <p className="rounded-md border border-relic/20 bg-black/25 p-3 text-sm text-bone/75">Tributo sugerido: {tributeOptions[Math.floor(now / 1000) % tributeOptions.length]} El alcohol siempre es opcional.</p>
      {isHost && (
        <div className="grid grid-cols-2 gap-2">
          <button className="btn btn-secondary" onClick={() => start(30)}>30 min</button>
          <button className="btn btn-secondary" onClick={() => start(15)}>Intenso</button>
          <button className="btn btn-secondary" onClick={() => onUpdateTimer(party.check_interval_minutes, null)}>Pausar</button>
          <button className="btn" onClick={() => start()}>Reiniciar</button>
          <button className="btn btn-danger col-span-2" onClick={() => onUpdateTimer(party.check_interval_minutes, new Date().toISOString())}>Activar ahora</button>
        </div>
      )}
      {isHost && chosen && (
        <button className="btn btn-secondary" onClick={() => onMadness(chosen, 1, "Yo bebo por el abismo")}>Yo bebo por el abismo</button>
      )}
    </section>
  );
}

function formatTime(ms: number) {
  const total = Math.ceil(ms / 1000);
  const minutes = Math.floor(total / 60);
  const seconds = total % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}
