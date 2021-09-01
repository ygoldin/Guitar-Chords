// Created by Yael Goldin

import { FC } from "react";
import "./SingleStringDecoration.scss";

export enum StringDecorationType {
  Unplayed,
  Open,
  Played,
}

export type SingleStringDecorationProps = Readonly<{
  decorationType: StringDecorationType;
}>;

export const SingleStringDecoration: FC<SingleStringDecorationProps> = ({
  decorationType,
}) => {
  const decoration =
    decorationType === StringDecorationType.Unplayed
      ? "x"
      : decorationType === StringDecorationType.Open
      ? "o"
      : " ";
  return decoration === " " ? (
    <div className={"emptyDecoration"}>{"x"}</div>
  ) : (
    <div className={"singleDecoration"}>{decoration}</div>
  );
};
