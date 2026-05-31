import { useState } from "react";
import type { Player, Prophecy } from "../types";
import { games } from "../constants/games";
import PropheciesGame from "./PropheciesGame";
import LitanyGame from "./LitanyGame";
import BasementCreatureGame from "./BasementCreatureGame";

type Props = {
  players: Player[];
  prophecies: Prophecy[];
  playerId: string | null;
  isHost: boolean;
  onProphecyCreate: (text: string, isNight: boolean) => void;
  onProphecyResolve: (prophecy: Prophecy, wasGuessed: boolean) => void;
  onProphecyOfficial: (prophecy: Prophecy) => void;
  onProphecyFulfill: (prophecy: Prophecy) => void;
  onMadnessById: (playerId: string, delta: number, reason: string) => void;
  onTeamResult: (playerIds: string[], delta: number, reason: string) => void;
};

export default function GameList(props: Props) {
  const [active, setActive] = useState("profecias-aldair");

  return (
    <section className="panel grid gap-4">
      <div>
        <p className="label">Minijuegos</p>
        <h2 className="section-title">Juegos del culto</h2>
      </div>
      <div className="flex gap-2 overflow-x-auto pb-1">
        {games.map((game) => (
          <button key={game.id} className={`btn min-w-fit ${active === game.id ? "" : "btn-secondary"}`} onClick={() => setActive(game.id)}>{game.name}</button>
        ))}
      </div>
      <p className="text-sm text-bone/60">{games.find((game) => game.id === active)?.description}</p>
      {active === "profecias-aldair" && (
        <PropheciesGame
          prophecies={props.prophecies}
          players={props.players}
          playerId={props.playerId}
          isHost={props.isHost}
          onCreate={props.onProphecyCreate}
          onResolve={props.onProphecyResolve}
          onOfficial={props.onProphecyOfficial}
          onFulfill={props.onProphecyFulfill}
        />
      )}
      {active === "letania-primigenio" && <LitanyGame players={props.players} isHost={props.isHost} onResult={props.onMadnessById} />}
      {active === "sotano" && <BasementCreatureGame players={props.players} isHost={props.isHost} onTeamResult={props.onTeamResult} />}
      {active !== "profecias-aldair" && active !== "letania-primigenio" && active !== "sotano" && (
        <p className="rounded-md border border-relic/20 bg-black/25 p-3 text-sm text-bone/70">Este juego se administra desde su sección principal del dashboard.</p>
      )}
    </section>
  );
}
