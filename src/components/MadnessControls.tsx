import { Minus, Plus, RotateCcw, Flame } from "lucide-react";

type Props = {
  onAdd: () => void;
  onSubtract: () => void;
  onReset: () => void;
  onTribute: () => void;
};

export default function MadnessControls({ onAdd, onSubtract, onReset, onTribute }: Props) {
  return (
    <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
      <button className="btn min-h-10 px-2 text-xs" title="+1 Locura" onClick={onAdd}><Plus size={16} /> +1</button>
      <button className="btn btn-secondary min-h-10 px-2 text-xs" title="-1 Locura" onClick={onSubtract}><Minus size={16} /> -1</button>
      <button className="btn btn-secondary min-h-10 px-2 text-xs" title="Reset" onClick={onReset}><RotateCcw size={16} /> Reset</button>
      <button className="btn btn-danger min-h-10 px-2 text-xs" title="Tributo Ritual" onClick={onTribute}><Flame size={16} /> Tributo</button>
    </div>
  );
}
