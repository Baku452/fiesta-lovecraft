import type { Player } from "../types";
import { madnessLabel } from "../utils/madness";
import MadnessControls from "./MadnessControls";

type Props = {
  player: Player;
  isHost: boolean;
  onMadness: (player: Player, delta: number, reason: string) => void;
  onReset: (player: Player) => void;
  onTribute: (player: Player) => void;
};

export default function PlayerCard({ player, isHost, onMadness, onReset, onTribute }: Props) {
  return (
    <article className="rounded-lg border border-relic/20 bg-black/30 p-3">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-bold text-bone">{player.name}</h3>
          <p className="text-xs text-bone/55">{player.role || "Sin rol"}</p>
        </div>
        <span className="rounded-full bg-relic/15 px-2 py-1 text-xs font-bold text-relic">{madnessLabel(player.madness_points)}</span>
      </div>
      <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
        <div className="h-full rounded-full bg-gradient-to-r from-plague to-relic" style={{ width: `${(player.madness_points / 5) * 100}%` }} />
      </div>
      {isHost && <p className="mt-2 text-xs text-bone/50">Usa estos controles para sumar, curar o reiniciar la Locura de este jugador.</p>}
      {isHost && (
        <MadnessControls
          onAdd={() => onMadness(player, 1, "+1 Locura manual")}
          onSubtract={() => onMadness(player, -1, "-1 Locura manual")}
          onReset={() => onReset(player)}
          onTribute={() => onTribute(player)}
        />
      )}
    </article>
  );
}
