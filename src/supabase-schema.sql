create extension if not exists pgcrypto;

create table if not exists parties (
  id uuid primary key default gen_random_uuid(),
  code text unique not null,
  name text,
  host_token text not null,
  ritual_revealed boolean default false,
  ritual_result text null,
  check_interval_minutes integer default 30,
  next_check_at timestamptz null,
  created_at timestamptz default now()
);

create table if not exists players (
  id uuid primary key default gen_random_uuid(),
  party_id uuid references parties(id) on delete cascade,
  name text not null,
  role text,
  madness_points integer default 0,
  created_at timestamptz default now()
);

create table if not exists rules (
  id uuid primary key default gen_random_uuid(),
  party_id uuid references parties(id) on delete cascade,
  text text not null,
  created_by text,
  type text default 'general',
  target_player_id uuid references players(id) null,
  is_active boolean default true,
  created_at timestamptz default now()
);

create table if not exists prophecies (
  id uuid primary key default gen_random_uuid(),
  party_id uuid references parties(id) on delete cascade,
  text text not null,
  author_player_id uuid references players(id) null,
  guessed_author_id uuid references players(id) null,
  was_guessed boolean null,
  is_official boolean default false,
  is_night_prophecy boolean default false,
  fulfilled boolean default false,
  created_at timestamptz default now()
);

create table if not exists ritual_votes (
  id uuid primary key default gen_random_uuid(),
  party_id uuid references parties(id) on delete cascade,
  player_id uuid references players(id) on delete cascade,
  vote text check (vote in ('invoke', 'seal')),
  created_at timestamptz default now(),
  unique(party_id, player_id)
);

create table if not exists game_logs (
  id uuid primary key default gen_random_uuid(),
  party_id uuid references parties(id) on delete cascade,
  type text not null,
  description text,
  player_id uuid references players(id) null,
  delta_madness integer default 0,
  created_at timestamptz default now()
);

alter publication supabase_realtime add table parties;
alter publication supabase_realtime add table players;
alter publication supabase_realtime add table rules;
alter publication supabase_realtime add table prophecies;
alter publication supabase_realtime add table ritual_votes;
alter publication supabase_realtime add table game_logs;
