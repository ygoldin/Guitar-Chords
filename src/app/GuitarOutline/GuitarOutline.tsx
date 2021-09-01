// Created by Yael Goldin

import React, { FC } from "react";
import { FretOutline } from "./FretOutline";
import "./GuitarOutline.scss";

export type GuitarOutlineProps = Readonly<{
  numFrets: number;
}>;

export const GuitarOutline: FC<GuitarOutlineProps> = ({ numFrets }) => {
  const renderOutline = () => {
    const result = [];
    for (let i = 0; i < numFrets; i++) {
      result.push(<FretOutline />);
    }
    return result;
  };
  return (
    <div className={"guitarOutline"}>
      <div className={"head"}></div>
      {renderOutline()}
    </div>
  );
};
