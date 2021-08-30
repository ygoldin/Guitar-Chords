// Created by Yael Goldin

import { ChordInfo } from "./ChordInfo";
import { CHORD_COLLECTION } from "./chords";
import { ChordOption } from "./types";

const keys = Object.keys(CHORD_COLLECTION);
const values = Object.values(CHORD_COLLECTION);

export const getChordOptions = (): ChordOption[] => {
  return keys.map((key) => ({ id: key, name: key }));
};

export const getChordInfo = (chordName: string): ChordInfo | null => {
  const idx = keys.indexOf(chordName);
  const value = values[idx][0];
  //   console.log(value);
  if (value !== null) {
    console.log(value["positions"]);
    console.log(value["fingerings"]);
    return new ChordInfo(chordName, value["positions"], value["fingerings"]);
  }
  return null;
};
