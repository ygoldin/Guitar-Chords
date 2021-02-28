// Created by Yael Goldin

// import { ChordInfo } from './ChordInfo';
import { CHORD_COLLECTION } from './chords';

export const getChordNames = () : string[] => {
    return Object.keys(CHORD_COLLECTION);
}

// export const getChordInfo = (chordName: string) : ChordInfo => {
//     const chordJson = CHORD_COLLECTION[chordName][0]; // Only care about one way to play the chord
//     return new ChordInfo(chordName, chordJson['positions'], chordJson['fingerings']);
// }
