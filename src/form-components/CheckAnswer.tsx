import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }

    function isCorrect(): string {
        let display = "";
        if (answer === expectedAnswer) {
            display = "✔️";
            return display;
        } else {
            display = "❌";
            return display;
        }
    }

    const result = isCorrect();

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formAnswer">
                <Form.Label> Answer: </Form.Label>
                <Form.Control
                    value={answer}
                    onChange={updateAnswer}
                ></Form.Control>
            </Form.Group>
            <div>
                <span>{result}</span>
            </div>
        </div>
    );
}
