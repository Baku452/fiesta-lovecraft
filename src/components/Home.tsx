import { Plus, Users } from "lucide-react";

type Props = {
  configured: boolean;
  onCreate: () => void;
  onJoin: () => void;
};

export default function Home({ configured, onCreate, onJoin }: Props) {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col justify-center gap-5 px-4 py-8">
      <div>
        <p className="label">MVP realtime</p>
        <h1 className="mt-2 text-4xl font-black leading-tight text-bone">Culto de Cthulhu</h1>
        <p className="mt-3 text-bone/70">Una consola simple para dirigir la fiesta, asignar roles y mantener la Locura sincronizada.</p>
      </div>
      <div className="panel grid gap-3">
        {!configured && (
          <p className="rounded-md border border-amber-300/30 bg-amber-950/40 p-3 text-sm text-amber-100">
            Configura Supabase en `.env` para crear y unir fiestas reales en realtime.
          </p>
        )}
        <button className="btn w-full" onClick={onCreate}>
          <Plus size={20} /> Crear fiesta
        </button>
        <button className="btn btn-secondary w-full" onClick={onJoin}>
          <Users size={20} /> Unirse a fiesta
        </button>
      </div>
    </main>
  );
}
