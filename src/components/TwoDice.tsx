import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(2);
    const [rightDie, setRightDie] = useState<number>(3);
    function changeLeftDie(): void {
        const newValue = d6();
        setLeftDie(newValue);
    }

    function changeRightDie(): void {
        const newValue = d6();
        setRightDie(newValue);
    }

    return (
        <div>
            <span data-testid="left-die"> {leftDie}</span>
            <span data-testid="right-die"> {rightDie}</span>
            <div>
                <span>
                    Left Die: {leftDie} Right Die: {rightDie}
                </span>
                <div></div>
                <Button
                    onClick={() => {
                        changeLeftDie();
                    }}
                >
                    Roll Left
                </Button>
                <Button
                    onClick={() => {
                        changeRightDie();
                    }}
                >
                    Roll Right
                </Button>
                <div>
                    {leftDie === 1 && rightDie === 1 && <span>Lose</span>}
                    {leftDie !== 1 &&
                        rightDie !== 1 &&
                        leftDie === rightDie && <span>Win</span>}
                </div>
            </div>
            Two Dice
        </div>
    );
}
