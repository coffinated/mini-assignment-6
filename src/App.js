import React, { useReducer } from 'react';
import { createContext } from 'react';
import Dice from './Dice';
import Buttons from './Buttons';
import Sum from './Sum';
import './App.css';

export const DiceArrContext = createContext();
export const DispatchContext = createContext();

function newRoll() {
    return Math.ceil(Math.random() * 6);
}

function reducer(state, action) {
    switch (action.type) {
        case "roll":
            return [...state, newRoll()]
        case "reset":
            return [];
        default:
            break;
    }
}

export default function App() {
    const [state, dispatch] = useReducer(reducer, []);

    return (
        <div className="App">
            <DiceArrContext.Provider value={state}>
                <Sum />
                <DispatchContext.Provider value={dispatch}>
                    <Buttons />
                </DispatchContext.Provider>
                <Dice />
            </DiceArrContext.Provider>
        </div>
    );
}
