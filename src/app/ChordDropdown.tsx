import React, { FC, useState } from "react";
import Select from "react-dropdown-select";
import { getChordInfo, getChordOptions } from "../sdk";

const chordOptions = getChordOptions();

export const ChordDropdown: FC = () => {
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
