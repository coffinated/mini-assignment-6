import React, { useContext } from 'react';
import { DiceArrContext } from './App';

export default function Dice() {
    const diceArr = useContext(DiceArrContext);
    let diceResults = <div></div>;
    if (diceArr.length > 0) {
        diceResults = diceArr.map((result, index) => 
            <div key={index} className="dieSquare">{result}</div>
        );
    }

    return (
        <div id="diceBox">
            {diceResults}
        </div>
    );
}