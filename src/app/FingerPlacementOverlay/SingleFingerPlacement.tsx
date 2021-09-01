// Created by Yael Goldin

import { FC } from "react";
import "./SingleFingerPlacement.scss";

export type SingleFingerPlacementProps = Readonly<{
  disabled: boolean;
  finger?: number;
}>;

export const SingleFingerPlacement: FC<SingleFingerPlacementProps> = ({
  disabled,
  finger,
}) => {
  return finger ? (
    <button className={"singleFingerPlacement"} disabled={disabled}>
      <div className={"fingerValue"}>{finger}</div>
    </button>
  ) : (
    <button className={"invisibleFingerPlacement"} disabled={disabled}></button>
  );
};
