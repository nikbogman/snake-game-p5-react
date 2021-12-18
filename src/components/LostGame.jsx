import React from "react";
import { CANVAS_HEIGHT, CANVAS_WIDTH } from "../properties";

const LostGame = () => {
    return <div className="block-div" style={{
        width: CANVAS_WIDTH,
        height: CANVAS_HEIGHT,
        backgroundColor: 'red',
    }}>
        <h1>You lost!</h1>
    </div>
}

export default LostGame;
