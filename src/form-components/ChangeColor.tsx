import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("");

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            <div>
                <Form.Check
                    inline
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="color-red"
                    label="red"
                    value="red"
                    checked={color === "red"}
                    style={{ backgroundColor: "red" }}
                ></Form.Check>
                <Form.Check
                    inline
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="color-orange"
                    label="orange"
                    value="orange"
                    checked={color === "orange"}
                    style={{ backgroundColor: "orange" }}
                ></Form.Check>
                <Form.Check
                    inline
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="color-yellow"
                    label="yellow"
                    value="yellow"
                    checked={color === "yellow"}
                    style={{ backgroundColor: "yellow" }}
                ></Form.Check>
                <Form.Check
                    inline
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="color-green"
                    label="green"
                    value="green"
                    checked={color === "green"}
                    style={{ backgroundColor: "green" }}
                ></Form.Check>
                <Form.Check
                    inline
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="color-cyan"
                    label="cyan"
                    value="cyan"
                    checked={color === "cyan"}
                    style={{ backgroundColor: "cyan" }}
                ></Form.Check>
                <Form.Check
                    inline
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="color-magenta"
                    label="magenta"
                    value="magenta"
                    checked={color === "magenta"}
                    style={{ backgroundColor: "magenta" }}
                ></Form.Check>
                <Form.Check
                    inline
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="color-white"
                    label="white"
                    value="white"
                    checked={color === "white"}
                    style={{ backgroundColor: "white" }}
                ></Form.Check>
                <Form.Check
                    inline
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="color-gray"
                    label="gray"
                    value="gray"
                    checked={color === "gray"}
                    style={{ backgroundColor: "gray" }}
                ></Form.Check>
                <div
                    data-testid="colored-box"
                    style={{ backgroundColor: color }}
                >
                    You have chosen {color}
                </div>
            </div>
        </div>
    );
}
