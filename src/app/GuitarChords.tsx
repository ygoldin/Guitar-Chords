// Created by Yael Goldin

import { FC, useState } from "react";
import { ChordDropdown } from "./ChordDropdown/ChordDropdown";
import { GuitarOutline } from "./GuitarOutline/GuitarOutline";
import "./GuitarChords.scss";
import { ChordInfo } from "../sdk/ChordInfo";
import { FingerPlacementOverlay } from "./FingerPlacementOverlay/FingerPlacementOverlay";
import { StringDecoration } from "./StringDecoration/StringDecoration";

export const GuitarChords: FC = () => {
  const [selectedChord, setSelectedChord] = useState<null | ChordInfo>(null);

  return (
    <div>
      <ChordDropdown onSelect={(chordInfo) => setSelectedChord(chordInfo)} />
      <div className={"outerContainer"}>
        <GuitarOutline
          numFrets={6}
          positions={selectedChord === null ? null : selectedChord.positions}
        />
        <FingerPlacementOverlay
          numFrets={6}
          positions={selectedChord === null ? null : selectedChord.positions}
          fingerings={selectedChord === null ? null : selectedChord.fingerings}
        />
      </div>
    </div>
  );
};
