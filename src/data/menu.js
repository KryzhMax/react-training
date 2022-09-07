import univ from "../assets/images/univ.svg";
import facult from "../assets/images/facult.svg";
import { nanoid } from "nanoid";

export const menuConfig = [
  {
    id: nanoid(),
    name: "Университет",
    img: univ,
    to: "university",
  },

  {
    id: nanoid(),
    name: "Факультеты",
    img: facult,
    to: "faculties",
  },
];
