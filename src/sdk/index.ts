// Created by Yael Goldin

// import { ChordInfo } from './ChordInfo';
import { CHORD_COLLECTION } from "./chords";
import { ChordOption } from "./types";

export const getChordOptions = (): ChordOption[] => {
  const keys = Object.keys(CHORD_COLLECTION);
  return keys.map((key) => ({ id: key, name: key }));
};

// export const getChordInfo = (chordName: string) : ChordInfo => {
//     const chordJson = CHORD_COLLECTION[chordName][0]; // Only care about one way to play the chord
//     return new ChordInfo(chordName, chordJson['positions'], chordJson['fingerings']);
// }
