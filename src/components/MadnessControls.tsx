import { Minus, Plus, RotateCcw, Flame } from "lucide-react";

type Props = {
  onAdd: () => void;
  onSubtract: () => void;
  onReset: () => void;
  onTribute: () => void;
};

export default function MadnessControls({ onAdd, onSubtract, onReset, onTribute }: Props) {
  return (
    <div className="mt-3 grid grid-cols-4 gap-2">
      <button className="btn min-h-10 px-2" title="+1 Locura" onClick={onAdd}><Plus size={18} /></button>
      <button className="btn btn-secondary min-h-10 px-2" title="-1 Locura" onClick={onSubtract}><Minus size={18} /></button>
      <button className="btn btn-secondary min-h-10 px-2" title="Reset" onClick={onReset}><RotateCcw size={18} /></button>
      <button className="btn btn-danger min-h-10 px-2" title="Tributo Ritual" onClick={onTribute}><Flame size={18} /></button>
    </div>
  );
}
