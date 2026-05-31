import { Copy, Sparkles } from "lucide-react";

type Props = {
  code: string | null;
  hostUrl: string | null;
  playerUrl: string | null;
  loading: boolean;
  error: string | null;
  onCreate: () => void;
  onOpen: () => void;
  onBack: () => void;
};

export default function CreateParty({ code, hostUrl, playerUrl, loading, error, onCreate, onOpen, onBack }: Props) {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col justify-center gap-4 px-4 py-8">
      <button className="btn btn-secondary w-fit" onClick={onBack}>Volver</button>
      <section className="panel grid gap-4">
        <div>
          <p className="label">Anfitrión</p>
          <h1 className="section-title">Crear fiesta</h1>
        </div>
        {!code ? (
          <button className="btn w-full" disabled={loading} onClick={onCreate}>
            <Sparkles size={18} /> {loading ? "Invocando..." : "Crear fiesta"}
          </button>
        ) : (
          <div className="grid gap-3">
            <div className="rounded-lg border border-relic/25 bg-elder/50 p-4 text-center text-3xl font-black text-relic">{code}</div>
            <CopyBox label="Link jugadores" value={playerUrl || ""} />
            <CopyBox label="Link anfitrión" value={hostUrl || ""} />
            <button className="btn w-full" onClick={onOpen}>Entrar como anfitrión</button>
          </div>
        )}
        {error && <p className="rounded-md border border-red-500/30 bg-red-950/60 p-3 text-sm text-red-100">{error}</p>}
      </section>
    </main>
  );
}

function CopyBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-1">
      <span className="label">{label}</span>
      <button className="flex items-center justify-between gap-2 rounded-md border border-relic/20 bg-black/30 p-3 text-left text-xs text-bone/80" onClick={() => navigator.clipboard.writeText(value)}>
        <span className="break-all">{value}</span>
        <Copy size={16} />
      </button>
    </div>
  );
}
