import React from "react";

export const GameContex = React.createContext();

export const GameProvider = ({ children }) => {
    const [scoreState, setScoreState] = React.useState(0);
    const [recordState, setRecordState] = React.useState(0);
    const [winsState, setWinsState] = React.useState(0);
    const [resultState, setResultState] = React.useState(undefined);

    const contextValue = {
        score: { scoreState, setScoreState },
        record: { recordState, setRecordState },
        wins: { winsState, setWinsState },
        result: { resultState, setResultState }
    }

    return <GameContex.Provider
        value={contextValue}>
        {children}
    </GameContex.Provider>
}

