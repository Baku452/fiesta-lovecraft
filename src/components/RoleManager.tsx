import type { Player } from "../types";
import { roles } from "../constants/roles";
import { shuffle } from "../utils/random";

type Props = {
  players: Player[];
  isHost: boolean;
  onAssign: (assignments: { playerId: string; role: string | null }[]) => void;
};

export default function RoleManager({ players, isHost, onAssign }: Props) {
  const assignRandom = () => {
    if (players.some((player) => player.role) && !confirm("¿Reasignar roles del culto?")) return;
    const shuffledRoles = shuffle(roles).slice(0, players.length);
    onAssign(players.map((player, index) => ({ playerId: player.id, role: shuffledRoles[index]?.name ?? null })));
  };

  return (
    <section className="panel grid gap-3">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="label">Roles</p>
          <h2 className="section-title">Máscaras del culto</h2>
        </div>
        {isHost && <button className="btn btn-secondary" onClick={assignRandom}>Asignar</button>}
      </div>
      <div className="grid gap-2">
        {players.map((player) => (
          <div key={player.id} className="grid gap-2 rounded-md border border-relic/15 bg-black/25 p-3">
            <div className="flex items-center justify-between gap-2">
              <span className="font-bold">{player.name}</span>
              <span className="text-sm text-relic">{player.role || "Sin rol"}</span>
            </div>
            {isHost && (
              <select className="input" value={player.role || ""} onChange={(event) => onAssign([{ playerId: player.id, role: event.target.value || null }])}>
                <option value="">Sin rol</option>
                {roles.map((role) => <option key={role.id} value={role.name}>{role.name}</option>)}
              </select>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
