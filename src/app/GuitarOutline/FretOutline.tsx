// Created by Yael Goldin

import { FC } from "react";
import "./FretOutline.scss";
import { NUM_STRINGS } from "../../sdk/constants";
import { StringFret } from "./StringFretDiv";

export const FretOutline: FC = () => {
  const renderFret = () => {
    const result = [];
    for (let i = 0; i < NUM_STRINGS - 1; i++) {
      result.push(<StringFret />);
    }
    return result;
  };
  return <div className={"fret"}>{renderFret()}</div>;
};
