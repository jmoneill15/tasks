import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface ValueProp {
    value: number;
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    function Doubler(value: ValueProp): JSX.Element {
        const double = () => setDhValue(2 * value.value);
        return <Button onClick={double}>Double</Button>;
    }

    function Halver(value: ValueProp): JSX.Element {
        const half = () => setDhValue(0.5 * value.value);
        return <Button onClick={half}>Halve</Button>;
    }
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler value={dhValue}></Doubler>
            <Halver value={dhValue}></Halver>
        </div>
    );
}
