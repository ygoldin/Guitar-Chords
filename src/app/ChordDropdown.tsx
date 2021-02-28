import React, { FC } from 'react';
import {getChordNames } from '../sdk';

const chordNames = getChordNames();

export const ChordDropdown: FC = () => {
    
    return <p>{chordNames}</p>;
}
