import { FC, useState } from "react";
import { ChordDropdown } from "./ChordDropdown";
import { GuitarOutline } from "./GuitarOutline/GuitarOutline";
import "./GuitarChords.scss";
import { ChordInfo } from "../sdk/ChordInfo";
import { FingerPlacementOverlay } from "./FingerPlacementOverlay/FingerPlacementOverlay";

export const GuitarChords: FC = () => {
  const [selectedChord, setSelectedChord] = useState<null | ChordInfo>(null);

  return (
    <div>
      <ChordDropdown onSelect={(chordInfo) => setSelectedChord(chordInfo)} />
      <div className={"outerContainer"}>
        <GuitarOutline numFrets={6} />
        <FingerPlacementOverlay
          numFrets={6}
          positions={selectedChord === null ? null : selectedChord.positions}
        />
      </div>
    </div>
  );
};
