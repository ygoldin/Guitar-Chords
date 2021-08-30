import { FC } from "react";
import "./Fret.scss";
import { NUM_STRINGS } from "../../sdk/constants";
import { StringFret } from "./StringFretDiv";

export const Fret: FC = () => {
  const renderFret = () => {
    const result = [];
    for (let i = 0; i < NUM_STRINGS; i++) {
      result.push(<StringFret />);
    }
    return result;
  };
  return <div className={"fret"}>{renderFret()}</div>;
};
