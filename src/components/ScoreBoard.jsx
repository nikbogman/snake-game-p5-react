import React from "react";
import { GameContex } from "../GameProvider";

const ScoreBoard = () => {
    const {
        score: { scoreState },
        record: { recordState },
        wins: { winsState }
    } = React.useContext(GameContex);

    return <div className="score-board">
        <h2 className="score-points">{scoreState}</h2>
        <h2 className="other-points">🔝: {recordState}</h2>
        <h2 className="other-points">🏆: {winsState}</h2>
    </div>
}

export default ScoreBoard;
