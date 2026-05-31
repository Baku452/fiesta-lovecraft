type Props = {
  connected: boolean;
  configured: boolean;
};

export default function ConnectionStatus({ connected, configured }: Props) {
  const label = !configured ? "Configura Supabase" : connected ? "Realtime conectado" : "Sincronizando...";
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-relic/20 bg-black/30 px-3 py-1 text-xs text-bone/80">
      <span className={`h-2 w-2 rounded-full ${connected ? "bg-emerald-400" : "bg-amber-300"}`} />
      {label}
    </div>
  );
}
