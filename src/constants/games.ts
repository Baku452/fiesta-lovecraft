import type { GameDefinition } from "../types";

export const games: GameDefinition[] = [
  {
    id: "grimorio-prohibido",
    name: "El Grimorio Prohibido",
    type: "Pasivo durante toda la fiesta",
    description: "Reglas absurdas, palabras prohibidas y reglas personales que conviven con todo lo demás.",
  },
  {
    id: "profecias-aldair",
    name: "Profecías para Aldair",
    type: "Escritura anónima + deducción",
    description: "El culto escribe visiones sobre Aldair y él intenta adivinar quién las escribió.",
  },
  {
    id: "letania-primigenio",
    name: "Letanía del Primigenio",
    type: "Recitación bajo presión",
    description: "Recitar fragmentos de horror cósmico respetando las reglas activas del Grimorio.",
  },
  {
    id: "sotano",
    name: "Lo que Habita el Sótano",
    type: "Dibujo por equipos",
    description: "Dos equipos dibujan en silencio una criatura descrita una sola vez por el anfitrión.",
  },
  {
    id: "chequeo-locura",
    name: "Chequeo de Locura",
    type: "Evento recurrente",
    description: "El jugador con más Locura cae bajo el foco del culto y recibe un tributo opcional.",
  },
  {
    id: "ritual-final",
    name: "Ritual Final",
    type: "Cierre secreto",
    description: "Todos votan Invocar o Sellar. El resultado decide si gana la mayor o menor Locura.",
  },
];
