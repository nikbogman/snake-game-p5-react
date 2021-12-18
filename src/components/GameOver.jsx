import React from "react";
import { GameContex } from "../GameProvider";
import LostGame from "./LostGame";
import WinGame from "./WinGame";

const GameOver = () => {
    const { result: { resultState } } = React.useContext(GameContex);
    if (resultState === "win")
        return <WinGame />
    if (resultState === "lost")
        return <LostGame />
    return "";
}

export default GameOver;