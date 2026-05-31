export type Party = {
  id: string;
  code: string;
  name: string | null;
  host_token: string;
  ritual_revealed: boolean;
  ritual_result: "invoke" | "seal" | null;
  check_interval_minutes: number;
  next_check_at: string | null;
  created_at: string;
};

export type Player = {
  id: string;
  party_id: string;
  name: string;
  role: string | null;
  madness_points: number;
  created_at: string;
};

export type Rule = {
  id: string;
  party_id: string;
  text: string;
  created_by: string | null;
  type: "general" | "palabra_prohibida" | "personal";
  target_player_id: string | null;
  is_active: boolean;
  created_at: string;
};

export type Prophecy = {
  id: string;
  party_id: string;
  text: string;
  author_player_id: string | null;
  guessed_author_id: string | null;
  was_guessed: boolean | null;
  is_official: boolean;
  is_night_prophecy: boolean;
  fulfilled: boolean;
  created_at: string;
};

export type RitualVote = {
  id: string;
  party_id: string;
  player_id: string;
  vote: "invoke" | "seal";
  created_at: string;
};

export type GameLog = {
  id: string;
  party_id: string;
  type: string;
  description: string | null;
  player_id: string | null;
  delta_madness: number;
  created_at: string;
};

export type Role = {
  id: string;
  name: string;
  description: string;
  power: string;
  costOrLimit: string;
  phrase?: string;
};

export type GameDefinition = {
  id: string;
  name: string;
  type: string;
  description: string;
};
