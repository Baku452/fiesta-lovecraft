import { DoorOpen } from "lucide-react";

type Props = {
  initialCode?: string;
  loading: boolean;
  error: string | null;
  onJoin: (code: string, name: string) => void;
  onBack: () => void;
};

export default function JoinParty({ initialCode = "", loading, error, onJoin, onBack }: Props) {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col justify-center gap-4 px-4 py-8">
      <button className="btn btn-secondary w-fit" onClick={onBack}>Volver</button>
      <form
        className="panel grid gap-4"
        onSubmit={(event) => {
          event.preventDefault();
          const data = new FormData(event.currentTarget);
          onJoin(String(data.get("code")), String(data.get("name")));
        }}
      >
        <div>
          <p className="label">Ingreso</p>
          <h1 className="section-title">Unirse al culto</h1>
        </div>
        <label className="grid gap-1">
          <span className="label">Código</span>
          <input className="input uppercase" name="code" defaultValue={initialCode} placeholder="ABYSS-42" required />
        </label>
        <label className="grid gap-1">
          <span className="label">Nombre</span>
          <input className="input" name="name" placeholder="Tu nombre ritual" required maxLength={40} />
        </label>
        <button className="btn w-full" disabled={loading}>
          <DoorOpen size={18} /> {loading ? "Entrando..." : "Entrar"}
        </button>
        {error && <p className="rounded-md border border-red-500/30 bg-red-950/60 p-3 text-sm text-red-100">{error}</p>}
      </form>
    </main>
  );
}
