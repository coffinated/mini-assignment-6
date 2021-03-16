import React, { useContext } from 'react';
import { DispatchContext } from './App';

export default function Buttons() {

    const dispatch = useContext(DispatchContext);

    return (
        <div id="buttons">
            <button onClick={() => dispatch({type: "roll"})}>Roll a die</button>
            <button onClick={() => dispatch({type: "reset"})}>Reset dice</button>
        </div>
    )
}