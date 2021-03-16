import React, { useContext } from 'react';
import { DiceArrContext } from './App';

export default function Sum() {
    const rollState = useContext(DiceArrContext);
    let summedRolls = 0;
    if (rollState.length > 0) {
        summedRolls = rollState.reduce((a, b) => a + b);
    }

    return (
        <h2>Sum: {summedRolls}</h2>
    )
}