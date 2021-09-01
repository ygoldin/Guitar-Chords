// Created by Yael Goldin

import { FC, useEffect, useState } from "react";
import { NUM_STRINGS } from "../../sdk/constants";
import {
  SingleStringDecoration,
  StringDecorationType,
} from "./SingleStringDecoration";
import "./StringDecoration.scss";

export type StringDecorationProps = Readonly<{
  positions: (number | null)[] | null;
}>;

export const StringDecoration: FC<StringDecorationProps> = ({ positions }) => {
  const [decorationAdded, setDecorationAdded] = useState(false);
  const [decorations, setDecorations] = useState<StringDecorationType[]>([]);

  useEffect(() => {
    if (positions === null) {
      setDecorations([]);
    } else {
      const result = [];
      for (let i = 0; i < NUM_STRINGS; i++) {
        const value = positions[i];
        let decorationType = StringDecorationType.Played;
        if (value === null) {
          decorationType = StringDecorationType.Unplayed;
          setDecorationAdded(true);
        } else if (value === 0) {
          decorationType = StringDecorationType.Open;
          // setDecorationAdded(true);
        }
        result.push(decorationType);
      }
      setDecorations(result);
    }
  }, [positions]);

  if (!decorationAdded) {
    return null;
  }

  return (
    <div className={"stringDecoration"}>
      {decorations.map((decoration) => (
        <SingleStringDecoration decorationType={decoration} />
      ))}
    </div>
  );
};
