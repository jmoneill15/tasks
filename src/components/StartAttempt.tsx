import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    //let attempts = 4;
    const [numAttemps, setNumAttemps] = useState<number>(4);
    const [quizing, startQuiz] = useState<boolean>(false);

    function addAttempt(): void {
        setNumAttemps(numAttemps + 1);
    }

    function changeAttempts(): void {
        setNumAttemps(numAttemps - 1);
    }

    return (
        <div>
            <div>
                {" "}
                Attempts: <span>{numAttemps}</span>
            </div>
            <div>
                <Button
                    onClick={() => {
                        startQuiz(true);
                        changeAttempts();
                    }}
                    disabled={quizing || numAttemps === 0}
                >
                    Start Quiz
                </Button>
                <Button onClick={() => startQuiz(false)} disabled={!quizing}>
                    Stop Quiz
                </Button>
            </div>
            <div>
                <Button onClick={addAttempt} disabled={quizing}>
                    {" "}
                    Mulligan
                </Button>
            </div>
            Start Attempt
        </div>
    );
}
