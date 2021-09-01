// Created by Yael Goldin

import { FC } from "react";
import { NUM_STRINGS } from "../../sdk/constants";
import { SingleFingerPlacement } from "./SingleFingerPlacement";
import "./FretFingerPlacement.scss";

export type FretFingerPlacementProps = Readonly<{
  fretNumber: number;
  positions: (number | null)[] | null;
}>;

export const FretFingerPlacement: FC<FretFingerPlacementProps> = ({
  fretNumber,
  positions,
}) => {
  const renderFingerPlacements = () => {
    const result = [];
    for (let i = 1; i <= NUM_STRINGS; i++) {
      if (positions !== null && positions[i - 1] === fretNumber) {
        result.push(<SingleFingerPlacement disabled visible />);
      } else {
        result.push(<SingleFingerPlacement disabled />);
      }
    }
    return result;
  };

  return <div className={"fret"}>{renderFingerPlacements()}</div>;
};
