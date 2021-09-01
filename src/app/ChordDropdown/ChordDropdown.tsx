// Created by Yael Goldin

import { FC } from "react";
import Select from "react-dropdown-select";
import "./ChordDropdown.scss";
import { getChordInfo, getChordOptions } from "../../sdk";
import { ChordInfo } from "../../sdk/ChordInfo";

const chordOptions = getChordOptions();

export type ChordDropdownProps = Readonly<{
  onSelect: (chordInfo: ChordInfo | null) => void;
}>;

export const ChordDropdown: FC<ChordDropdownProps> = ({ onSelect }) => {
  return (
    <Select
      options={chordOptions}
      onChange={(values) => {
        const chordInfo = getChordInfo(values[0].name);
        onSelect(chordInfo);
      }}
      values={[]}
      labelField="name"
      style={{ width: "200px", color: "black" }}
      searchable={true}
      searchBy="name"
      className="dropdown"
    />
  );
};
