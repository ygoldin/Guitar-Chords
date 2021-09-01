// Created by Yael Goldin

import { FC, useState } from "react";
import { NUM_STRINGS } from "../../sdk/constants";
import { SingleFingerPlacement } from "./SingleFingerPlacement";
import "./ChordPositionSelection.scss";
import { getChordNames } from "../../sdk";

export type ChordPositionSelectionProps = Readonly<{
  numFrets: number;
}>;

export const ChordPositionSelection: FC<ChordPositionSelectionProps> = ({
  numFrets,
}) => {
  const [positions, setPositions] = useState([0, 0, 0, 0, 0, 0]);
  const [chordNames, setChordNames] = useState<string[]>([]);

  const onClick = (string: number, fret: number) => {
    return () => {
      const newPositions = [...positions];
      if (newPositions[string - 1] === 0) {
        newPositions[string - 1] = fret;
      } else if (newPositions[string - 1] === fret) {
        newPositions[string - 1] = 0;
      }
      setPositions(newPositions);
      console.log(newPositions);
    };
  };

  const renderFingerPlacements = () => {
    const result = [];
    for (let fret = 1; fret <= numFrets; fret++) {
      const fretResult = [];
      for (let guitarString = 1; guitarString <= NUM_STRINGS; guitarString++) {
        fretResult.push(
          <SingleFingerPlacement onClick={onClick(guitarString, fret)} />
        );
      }
      result.push(<div className={"fretSelection"}>{fretResult}</div>);
    }
    return result;
  };

  return (
    <div className={"chordSelection"}>
      {renderFingerPlacements()}
      <button onClick={() => setChordNames(getChordNames(positions))}>
        Go
      </button>
      {chordNames &&
        (chordNames === [] ? (
          <span>Not a chord</span>
        ) : (
          chordNames.map((chordName) => <span>{chordName}</span>)
        ))}
    </div>
  );
};
