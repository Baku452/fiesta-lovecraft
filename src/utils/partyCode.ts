const WORDS = ["ABYSS", "RLYEH", "DAGON", "ELDER", "VOID", "TENT", "DREAM", "DEEP"];

export function generatePartyCode() {
  const word = WORDS[Math.floor(Math.random() * WORDS.length)];
  const number = Math.floor(10 + Math.random() * 90);
  return `${word}-${number}`;
}

export function normalizeCode(value: string) {
  return value.trim().toUpperCase().replace(/\s+/g, "");
}

export function generateHostToken() {
  return crypto.randomUUID();
}
