// Created by Yael Goldin

import { IS_DEBUG, NUM_STRINGS } from "./constants";

export class ChordInfo {
    /** The name of the chord */
    public readonly name: string;
    /** Which fret to hold down (or null if none) on each string, going from lowest to highest */
    public readonly positions: (number | null)[];
    /** Which fingers to use for each of the positions */
    public readonly fingerings: number[];

    constructor(name: string, positions: string[], fingerings: string[][]) {
        this.validateInput(positions, fingerings);
        this.name = name;
        this.positions = positions.map(position => position === 'x' ? null : Number(position));
        this.fingerings = fingerings[0].map(finger => Number(finger));  // We just care about the first fingering
    }

    private validateInput(positions: string[], fingerings: string[][]): void {
        if (IS_DEBUG) {
            if (positions.length !== NUM_STRINGS) {
                throw new Error(`must have ${NUM_STRINGS} string positions`);
            }
            if (fingerings[0].length !== NUM_STRINGS) {
                throw new Error(`must have ${NUM_STRINGS} string fingerings`);
            }
        }
    }
}