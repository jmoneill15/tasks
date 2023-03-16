import React from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 and Julia ONeill with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World!
            </p>

            <h1>About Me</h1>
            <p> I am a sophomore Computer Science major here at UD.</p>

            <img
                src="https://marvel-b1-cdn.bc0a.com/f00000000164722/www.udel.edu/content/udel/en/udaily/2022/october/campus-safety-action-steps/_jcr_content/udaily_Image.img.jpg/1664969884485.jpg"
                alt="A picture of UD Campus"
                width="550"
            />

            <p>Some of my interests are:</p>

            <ul>
                <li>Listening to music </li>
                <li>Playing Video games</li>
                <li>Watching tv</li>
            </ul>

            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>

            <p> </p>
            <Container
                style={{ background: "red", width: "150", height: "3q00" }}
            >
                <Row>
                    <Col> First Column</Col>
                    <Col>
                        {" "}
                        Second Column <div></div>
                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </Container>
            <div></div>
            <hr></hr>
            <DoubleHalf></DoubleHalf>
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ShoveBox></ShoveBox>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
        </div>
    );
}

export default App;
