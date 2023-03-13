import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );
    function switchType(): void {
        if (questionType === "short_answer_question") {
            setQuestionType("multiple_choice_question");
        } else if (questionType === "multiple_choice_question") {
            setQuestionType("short_answer_question");
        }
    }
    return (
        <div>
            <div>
                <div></div>
                <Button onClick={switchType}>Change Type</Button>
                <div></div>
                {questionType === "short_answer_question" && (
                    <span> Short Answer </span>
                )}
                {questionType === "multiple_choice_question" && (
                    <span>Multiple Choice</span>
                )}
            </div>
            Change Type
        </div>
    );
}
