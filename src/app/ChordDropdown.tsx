import React, { FC, useState } from "react";
import Select from "react-dropdown-select";
import { getChordOptions } from "../sdk";

const chordOptions = getChordOptions();

export const ChordDropdown: FC = () => {
  const [selectedChord, setSelectedChord] = useState("");
  return (
    <>
      <Select
        options={chordOptions}
        onChange={(values) => {
          setSelectedChord(values[0].name);
        }}
        values={chordOptions}
        placeholder={"Select chord..."}
        labelField="name"
      />
      <p>{selectedChord}</p>
    </>
  );
};
