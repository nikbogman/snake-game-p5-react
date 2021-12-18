import React from "react";
import { CANVAS_HEIGHT, CANVAS_WIDTH } from "../properties";

const WinGame = () => {
    return <div className="block-div" style={{
        width: CANVAS_WIDTH,
        height: CANVAS_HEIGHT,
        backgroundColor: 'green',
    }}>
        <h1>You won!</h1>
    </div>
}
export default WinGame;