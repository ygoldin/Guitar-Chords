// Created by Yael Goldin

import React, { FC, useState } from "react";
import Select from "react-dropdown-select";
import { getChordInfo, getChordOptions } from "../sdk";
import { ChordInfo } from "../sdk/ChordInfo";

const chordOptions = getChordOptions();

export type ChordDropdownProps = Readonly<{
  onSelect: (chordInfo: ChordInfo | null) => void;
}>;

export const ChordDropdown: FC<ChordDropdownProps> = ({ onSelect }) => {
  const [selectedChord, setSelectedChord] = useState("");
  return (
    <>
      <Select
        options={chordOptions}
        onChange={(values) => {
          const chordInfo = getChordInfo(values[0].name);
          const chordToString =
            chordInfo === null ? "No info known" : chordInfo.toString();
          setSelectedChord(chordToString);
          onSelect(chordInfo);
        }}
        values={[]}
        labelField="name"
        style={{ width: "200px", color: "black" }}
        searchable={true}
        searchBy="name"
      />
      <p>{selectedChord}</p>
    </>
  );
};
