// Created by Yael Goldin

import { FC } from "react";
import { NUM_STRINGS } from "../../sdk/constants";
import { SingleFingerPlacement } from "./SingleFingerPlacement";
import "./FretFingerPlacement.scss";

export type FretFingerPlacementProps = Readonly<{
  fretNumber: number;
  positions: (number | null)[] | null;
  fingerings: number[] | null;
}>;

export const FretFingerPlacement: FC<FretFingerPlacementProps> = ({
  fretNumber,
  positions,
  fingerings,
}) => {
  const renderFingerPlacements = () => {
    const result = [];
    for (let i = 1; i <= NUM_STRINGS; i++) {
      if (
        positions !== null &&
        fingerings !== null &&
        positions[i - 1] === fretNumber
      ) {
        result.push(<SingleFingerPlacement finger={fingerings[i - 1]} />);
      } else {
        result.push(<SingleFingerPlacement />);
      }
    }
    return result;
  };

  return <div className={"fret"}>{renderFingerPlacements()}</div>;
};
