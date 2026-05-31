import type { Player, Rule } from "../types";

type Props = {
  rules: Rule[];
  players: Player[];
  isHost: boolean;
  onCreate: (text: string, type: Rule["type"], targetPlayerId: string | null) => void;
  onToggle: (rule: Rule) => void;
  onDelete: (rule: Rule) => void;
  onBreak: (playerId: string, reason: string) => void;
};

export default function RuleBook({ rules, players, isHost, onCreate, onToggle, onDelete, onBreak }: Props) {
  return (
    <section className="panel grid gap-4">
      <div>
        <p className="label">Grimorio</p>
        <h2 className="section-title">Reglas activas</h2>
      </div>
      {isHost && (
        <form className="grid gap-2" onSubmit={(event) => {
          event.preventDefault();
          const data = new FormData(event.currentTarget);
          onCreate(String(data.get("text")), data.get("type") as Rule["type"], String(data.get("target")) || null);
          event.currentTarget.reset();
        }}>
          <input className="input" name="text" placeholder="Nadie puede decir “yo”" required />
          <div className="grid gap-2 sm:grid-cols-2">
            <select className="input" name="type" defaultValue="general">
              <option value="general">General</option>
              <option value="palabra_prohibida">Palabra prohibida</option>
              <option value="personal">Personal</option>
            </select>
            <select className="input" name="target">
              <option value="">Sin objetivo</option>
              {players.map((player) => <option key={player.id} value={player.id}>{player.name}</option>)}
            </select>
          </div>
          <button className="btn">Crear regla</button>
        </form>
      )}
      <div className="grid gap-2">
        {rules.length === 0 && <p className="text-sm text-bone/60">El Grimorio está en blanco por ahora.</p>}
        {rules.map((rule) => (
          <div key={rule.id} className={`rounded-md border p-3 ${rule.is_active ? "border-relic/20 bg-black/25" : "border-white/10 bg-white/5 opacity-60"}`}>
            <p className="font-bold">{rule.text}</p>
            <p className="mt-1 text-xs text-bone/55">{rule.type}{rule.target_player_id ? ` · ${players.find((p) => p.id === rule.target_player_id)?.name || "jugador"}` : ""}</p>
            {isHost && (
              <div className="mt-3 grid gap-2 sm:grid-cols-3">
                <button className="btn btn-secondary min-h-10 px-2" onClick={() => onToggle(rule)}>{rule.is_active ? "Pausar" : "Activar"}</button>
                <button className="btn btn-danger min-h-10 px-2" onClick={() => onDelete(rule)}>Eliminar</button>
                <select className="input min-h-10" defaultValue="" onChange={(event) => event.target.value && onBreak(event.target.value, rule.text)}>
                  <option value="">Ruptura</option>
                  {players.map((player) => <option key={player.id} value={player.id}>{player.name}</option>)}
                </select>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
