// Created by Yael Goldin

import { FC, useState } from "react";
import { ChordDropdown } from "./ChordDropdown/ChordDropdown";
import { GuitarOutline } from "./GuitarOutline/GuitarOutline";
import "./GuitarChords.scss";
import { ChordInfo } from "../sdk/ChordInfo";
import { FingerPlacementOverlay } from "./FingerPlacementOverlay/FingerPlacementOverlay";
import { ChordPositionSelection } from "./FingerPlacementOverlay/ChordPositionSelection";

export const GuitarChords: FC = () => {
  const [selectedChord, setSelectedChord] = useState<null | ChordInfo>(null);
  const [isSelectChord, setIsSelectChord] = useState(false);

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
