import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<string>("3");
    const [requested, setRequested] = useState<string>("0");

    function isDisabled(): boolean {
        if (attemptsLeft === "0") {
            return true;
        } else {
            return false;
        }
    }

    function useAttempts(): void {
        const attemptsToNum = parseInt(attemptsLeft);
        const requestedToNum = parseInt(requested);
        if (!Number.isNaN(requestedToNum) && requestedToNum !== 0) {
            const value = attemptsToNum - requestedToNum;
            setAttemptsLeft(value.toString());
        } else {
            const value = attemptsToNum - 1;
            setAttemptsLeft(value.toString());
        }
    }

    function addAttemps(): void {
        const attemptsToNum = parseInt(attemptsLeft);
        const requestedToNum = parseInt(requested);
        if (!Number.isNaN(requestedToNum)) {
            const value = attemptsToNum + requestedToNum;
            setAttemptsLeft(value.toString());
        } else {
            setAttemptsLeft(attemptsLeft);
        }
    }

    const disabledState = isDisabled();

    return (
        <div>
            <h3>Give Attempts</h3>
            <span>Number of Attempts: {attemptsLeft}</span>
            <div>
                <Form.Group controlId="formAttempts">
                    <Form.Label>Requested:</Form.Label>
                    <Form.Control
                        type="number"
                        value={requested}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setRequested(event.target.value)}
                    ></Form.Control>
                </Form.Group>
            </div>

            <Button onClick={useAttempts} disabled={disabledState}>
                Use
            </Button>
            <Button onClick={addAttemps}>Gain</Button>
        </div>
    );
}
