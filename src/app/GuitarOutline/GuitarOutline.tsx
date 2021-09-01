// Created by Yael Goldin

import React, { FC } from "react";
import { StringDecoration } from "../StringDecoration/StringDecoration";
import { FretOutline } from "./FretOutline";
import "./GuitarOutline.scss";

export type GuitarOutlineProps = Readonly<{
  numFrets: number;
  positions: (number | null)[] | null;
}>;

export const GuitarOutline: FC<GuitarOutlineProps> = ({
  numFrets,
  positions,
}) => {
  const renderOutline = () => {
    const result = [];
    for (let i = 0; i < numFrets; i++) {
      result.push(<FretOutline />);
    }
    return result;
  };
  return (
    <div className={"guitarOutline"}>
      <StringDecoration positions={positions} />
      <div className={"head"}></div>
      {renderOutline()}
    </div>
  );
};
