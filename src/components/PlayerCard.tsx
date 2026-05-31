import type { Player } from "../types";
import { roles } from "../constants/roles";
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
  const role = roles.find((item) => item.name === player.role);

  return (
    <article className="rounded-lg border border-relic/20 bg-black/30 p-3">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="font-bold text-bone">{player.name}</h3>
          <p className="text-xs text-bone/55">{player.role || "Sin rol"}</p>
        </div>
        <span className="rounded-full bg-relic/15 px-2 py-1 text-xs font-bold text-relic">{madnessLabel(player.madness_points)}</span>
      </div>
      {role && (
        <div className="mt-3 rounded-md border border-relic/15 bg-elder/25 p-3 text-sm">
          <p className="font-bold text-relic">{role.description}</p>
          <p className="mt-2 text-bone/75"><span className="font-bold text-bone">Hace:</span> {role.power}</p>
          <p className="mt-1 text-bone/65"><span className="font-bold text-bone">Pierde / costo:</span> {role.costOrLimit}</p>
          {role.phrase && <p className="mt-2 text-xs italic text-bone/55">Frase: “{role.phrase}”</p>}
        </div>
      )}
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
