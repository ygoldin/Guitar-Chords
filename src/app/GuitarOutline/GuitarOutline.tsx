import React, { FC } from "react";
import { Fret } from "./Fret";
import "./GuitarOutline.module.scss";

export type GuitarOutlineProps = Readonly<{
  numFrets: number;
}>;

export const GuitarOutline: FC<GuitarOutlineProps> = ({ numFrets }) => {
  const renderOutline = () => {
    const result = [];
    for (let i = 0; i < numFrets; i++) {
      result.push(<Fret />);
    }
    return result;
  };
  return <div className={"guitarOutline"}>{renderOutline()}</div>;
};
