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
  console.log(value);
  if (value !== null) {
    return new ChordInfo(chordName, value["positions"], value["fingerings"]);
  }
  return null;
};

export const getChordNames = (positions: number[]): string[] => {
  const stringifiedPositions = positions.map((position) => position.toString());
  const result = [];
  for (let i = 0; i < keys.length; i++) {
    const value = values[i][0];
    if (value !== null) {
      let allTrue = true;
      for (let j = 0; j < stringifiedPositions.length; j++) {
        if (
          !(
            stringifiedPositions[j] === value["positions"][j] ||
            (stringifiedPositions[j] === "0" && value["positions"][j] === "x")
          )
        ) {
          allTrue = false;
          break;
        }
      }
      if (allTrue) {
        result.push(keys[i]);
      }
    }
  }
  return result;
};
