// Created by Yael Goldin

import { FC, useState } from "react";
import "./SingleFingerPlacement.scss";

export type SingleFingerPlacementProps = Readonly<{
  onClick?: () => void;
  finger?: number;
}>;

export const SingleFingerPlacement: FC<SingleFingerPlacementProps> = ({
  onClick,
  finger,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const fullOnClick = () => {
    if (onClick) {
      onClick();
    }
    setIsClicked(!isClicked);
  };

  if (finger) {
    return (
      <button className={"singleFingerPlacement"} disabled={true}>
        <div className={"fingerValue"}>{finger}</div>
      </button>
    );
  } else if (onClick) {
    return isClicked ? (
      <button className={"singleFingerPlacement"} onClick={fullOnClick} />
    ) : (
      <button className={"unclicked"} onClick={fullOnClick} />
    );
  } else {
    return (
      <button className={"invisibleFingerPlacement"} disabled={true}></button>
    );
  }
};
