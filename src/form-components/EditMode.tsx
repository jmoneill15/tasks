import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setIsEditMode(event.target.checked);
    }

    function updateUserName(event: React.ChangeEvent<HTMLInputElement>) {
        setUserName(event.target.value);
    }

    function updateIsStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    function isAStudent(): string {
        if (isStudent === true) {
            return userName + " is a student";
        } else {
            return userName + " is not a student";
        }
    }

    const read = isAStudent();
    return (
        <div>
            <h3>Edit Mode</h3>

            <Form.Check
                type="switch"
                id="is-edit-mode"
                label="Edit?"
                checked={isEditMode}
                onChange={updateEditMode}
            ></Form.Check>
            <div>
                {isEditMode === true ? (
                    <span>
                        <Form.Group controlId="userName">
                            <Form.Label>
                                UserName:
                                <Form.Control
                                    value={userName}
                                    onChange={updateUserName}
                                ></Form.Control>
                            </Form.Label>
                        </Form.Group>
                        <div></div>
                        <Form.Check
                            type="checkbox"
                            id="is-student"
                            label="Student?"
                            checked={isStudent}
                            onChange={updateIsStudent}
                        ></Form.Check>
                    </span>
                ) : (
                    <span>{read} </span>
                )}
            </div>
        </div>
    );
}
