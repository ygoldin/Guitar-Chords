// Created by Yael Goldin

import { FC } from "react";
import "./SingleFingerPlacement.scss";

export type SingleFingerPlacementProps = Readonly<{
  disabled: boolean;
  visible?: boolean;
}>;

export const SingleFingerPlacement: FC<SingleFingerPlacementProps> = ({
  disabled,
  visible = false,
}) => {
  return visible ? (
    <button className={"singleFingerPlacement"} disabled={disabled}></button>
  ) : (
    <button className={"invisibleFingerPlacement"} disabled={disabled}></button>
  );
};
