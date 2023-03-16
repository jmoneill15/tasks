import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

interface ColorProp {
    color: number;
}

export function ColoredBox(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    const updateColor = () => setColorIndex((1 + colorIndex) % COLORS.length);
    function ChangeColor(): JSX.Element {
        //const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
        return <Button onClick={updateColor}>Next Color</Button>;
    }

    function ColorPreview(color: ColorProp): JSX.Element {
        //const updateColor = () => setColorIndex((1 + color.color) % COLORS.length);
        return (
            <div
                data-testid="colored-box"
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: COLORS[color.color],
                    display: "inline-block",
                    verticalAlign: "bottom",
                    marginLeft: "5px"
                }}
            ></div>
        );
    }
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor></ChangeColor>
                <ColorPreview color={colorIndex}></ColorPreview>
            </div>
        </div>
    );
}
