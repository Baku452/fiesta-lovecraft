export function clampMadness(value: number) {
  return Math.max(0, Math.min(5, value));
}

export function madnessLabel(value: number) {
  return `Locura: ${clampMadness(value)}/5`;
}
