import type { Player, Prophecy } from "../types";

type Props = {
  prophecies: Prophecy[];
  players: Player[];
  playerId: string | null;
  isHost: boolean;
  onCreate: (text: string, isNight: boolean) => void;
  onResolve: (prophecy: Prophecy, wasGuessed: boolean) => void;
  onOfficial: (prophecy: Prophecy) => void;
  onFulfill: (prophecy: Prophecy) => void;
};

export default function PropheciesGame({ prophecies, players, playerId, isHost, onCreate, onResolve, onOfficial, onFulfill }: Props) {
  return (
    <section className="grid gap-3">
      <form className="grid gap-2" onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        onCreate(String(data.get("text")), data.get("night") === "on");
        event.currentTarget.reset();
      }}>
        <textarea className="input min-h-24" name="text" placeholder="El culto ha visto que Aldair..." required />
        <label className="flex items-center gap-2 text-sm text-bone/70">
          <input type="checkbox" name="night" /> Profecía de la noche
        </label>
        <button className="btn" disabled={!playerId}>Enviar profecía</button>
      </form>
      <div className="grid gap-2">
        {prophecies.map((prophecy) => (
          <article key={prophecy.id} className="rounded-md border border-relic/15 bg-black/25 p-3">
            <p>{prophecy.text}</p>
            <p className="mt-1 text-xs text-bone/50">
              {prophecy.is_night_prophecy ? "De la noche" : "Del futuro"} · {prophecy.is_official ? "Oficial" : "Anónima"}{prophecy.fulfilled ? " · Cumplida" : ""}
            </p>
            {isHost && (
              <div className="mt-3 grid grid-cols-2 gap-2">
                <button className="btn btn-secondary min-h-10" onClick={() => onResolve(prophecy, true)}>Aldair acertó</button>
                <button className="btn btn-secondary min-h-10" onClick={() => onResolve(prophecy, false)}>Aldair falló</button>
                <button className="btn btn-secondary min-h-10" onClick={() => onOfficial(prophecy)}>Oficial</button>
                <button className="btn btn-secondary min-h-10" onClick={() => onFulfill(prophecy)}>Cumplida</button>
              </div>
            )}
            {isHost && prophecy.author_player_id && <p className="mt-2 text-xs text-relic">Autor: {players.find((p) => p.id === prophecy.author_player_id)?.name}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}
