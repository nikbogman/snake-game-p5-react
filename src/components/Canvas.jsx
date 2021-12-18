import React from "react";
import Snake from "../assets/Snake";
import Food from "../assets/Food";
import * as props from "../properties";
import p5 from "p5";
import { GameContex } from "../GameProvider";

const Canvas = () => {
    const {
        score: { setScoreState },
        record: { recordState, setRecordState },
        result: { resultState, setResultState },
        wins: { winsState, setWinsState }
    } = React.useContext(GameContex);

    const p5Ref = React.useRef();
    const blocksPerRow = 20;
    let myP5;
    React.useEffect(() => {
        if (!resultState)
            myP5 = new p5(sketch, p5Ref.current);
    }, [resultState])

    const sketch = (p5) => {
        let snake;
        let food;
        const rows = props.CANVAS_WIDTH / blocksPerRow;
        const columns = props.CANVAS_HEIGHT / blocksPerRow;
        let framesPerSecond = 5;
        let localScore = 0;

        p5.setup = () => {
            p5.createCanvas(props.CANVAS_WIDTH, props.CANVAS_HEIGHT);
            food = new Food(p5);
            food.spawn(blocksPerRow);
            snake = new Snake(p5);
        };

        p5.keyPressed = () => {
            switch (p5.keyCode) {
                case p5.LEFT_ARROW:
                    snake.changeDirectory(-1, 0);
                    break;
                case p5.RIGHT_ARROW:
                    snake.changeDirectory(1, 0);
                    break;
                case p5.DOWN_ARROW:
                    snake.changeDirectory(0, 1);
                    break;
                case p5.UP_ARROW:
                    snake.changeDirectory(0, -1);
                    break;
            }
        };

        p5.draw = () => {
            p5.scale(blocksPerRow);
            if (snake.eat(food)) {
                food.spawn(blocksPerRow);
                framesPerSecond += 1;
                if (framesPerSecond > 30) framesPerSecond = 30;
            }
            p5.background(props.COLOR_BLACK);

            food.draw();
            p5.frameRate(framesPerSecond);

            snake.update(rows, columns);
            snake.draw();

            if (snake.over()) {
                p5.noLoop();
                setResultState("lost");
            }
            if (snake.len === 30) {
                p5.noLoop();
                setResultState("win");

                const prevWins = winsState;
                setWinsState(prevWins + 1);
            }
            localScore = snake.len;
            setScoreState(localScore);
            if (localScore > recordState)
                setRecordState(localScore);
        };
    };

    return <div className="block-div" ref={p5Ref} />
}

export default Canvas;