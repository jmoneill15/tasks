import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const defaultOption = options[0];
    const [current, setCurrent] = useState<string>(defaultOption);

    function updateCurrent(event: React.ChangeEvent<HTMLSelectElement>) {
        setCurrent(event.target.value);
    }

    function isCorrect(): string {
        let display = "";
        if (current === expectedAnswer) {
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
            <h3>Multiple Choice Question</h3>
            <div></div>
            <Form.Group>
                <Form.Label>
                    <Form.Select value={current} onChange={updateCurrent}>
                        {options.map((question: string) => (
                            <option key={question} value={question}>
                                {question}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Label>
            </Form.Group>
            <div>
                <span>{result}</span>
            </div>
        </div>
    );
}
