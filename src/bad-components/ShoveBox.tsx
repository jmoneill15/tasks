import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface BoxProp {
    position: number;
    setPosition: (newPosition: number) => void;
}

export function ShoveBox(): JSX.Element {
    const [position, setPosition] = useState<number>(10);

    function ShoveBoxButton(box: BoxProp) {
        const shove = () => setPosition(4 + box.position);
        return <Button onClick={shove}>Shove the Box</Button>;
    }

    function MoveableBox(): JSX.Element {
        return (
            <div
                data-testid="moveable-box"
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "lightblue",
                    border: "1px solid blue",
                    display: "inline-block",
                    verticalAlign: "bottom",
                    marginLeft: position + "px"
                }}
            ></div>
        );
    }

    const box = MoveableBox();

    return (
        <div>
            <h3>Shove Box</h3>
            <span>The box is at: {position}</span>
            <div>
                <ShoveBoxButton
                    position={position}
                    setPosition={setPosition}
                ></ShoveBoxButton>
                {box}
            </div>
        </div>
    );
}
