// Created by Yael Goldin

import { FC, useState } from "react";
import { ChordDropdown } from "./ChordDropdown/ChordDropdown";
import { GuitarOutline } from "./GuitarOutline/GuitarOutline";
import "./GuitarChords.scss";
import { ChordInfo } from "../sdk/ChordInfo";
import { FingerPlacementOverlay } from "./FingerPlacementOverlay/FingerPlacementOverlay";
import { ChordPositionSelection } from "./FingerPlacementOverlay/ChordPositionSelection";
import { getChordInfo } from "../sdk";

export const GuitarChords: FC = () => {
  const [selectedChord, setSelectedChord] = useState<null | ChordInfo>(null);
  const [isSelectChord, setIsSelectChord] = useState(false);
  const [typedChord, setTypedChord] = useState("");

  return (
    <div className={"guitarChords"}>
      <button
        onClick={() => setIsSelectChord(!isSelectChord)}
        className={"selectionbutton"}
      >
        {isSelectChord
          ? "Switch to chord fingering selection"
          : "Switch to chord identification"}
      </button>
      {isSelectChord && (
        <div>
          <input
            type="text"
            name="name"
            placeholder="Enter a chord name"
            onChange={(event) => setTypedChord(event.target.value)}
          />
          <button onClick={() => setSelectedChord(getChordInfo(typedChord))}>
            Submit
          </button>
          <ChordDropdown
            onSelect={(chordInfo) => setSelectedChord(chordInfo)}
          />

          <div className={"outerContainer"}>
            <GuitarOutline
              numFrets={6}
              positions={
                selectedChord === null ? null : selectedChord.positions
              }
            />
            <FingerPlacementOverlay
              numFrets={6}
              positions={
                selectedChord === null ? null : selectedChord.positions
              }
              fingerings={
                selectedChord === null ? null : selectedChord.fingerings
              }
            />
          </div>
        </div>
      )}
      {!isSelectChord && (
        <div className={"outerContainer"}>
          <GuitarOutline numFrets={6} positions={null} />
          <ChordPositionSelection numFrets={6} />
        </div>
      )}
    </div>
  );
};
