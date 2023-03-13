import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type Holiday =
        | "New Years"
        | "Christmas"
        | "Thanksgiving"
        | "Fourth of July"
        | "My Birthday";

    const ALPHABET_HOLIDAYS: Record<Holiday, Holiday> = {
        Christmas: "Fourth of July",
        "Fourth of July": "My Birthday",
        "My Birthday": "New Years",
        "New Years": "Thanksgiving",
        Thanksgiving: "Christmas"
    };
    const YEAR_HOLIDAYS: Record<Holiday, Holiday> = {
        "New Years": "Fourth of July",
        "Fourth of July": "My Birthday",
        "My Birthday": "Thanksgiving",
        Thanksgiving: "Christmas",
        Christmas: "New Years"
    };

    const [holiday, setHoliday] = useState<Holiday>("New Years");

    function changeAlphabetHoliday(): void {
        const nextAlphabetHoliday = ALPHABET_HOLIDAYS[holiday];
        setHoliday(nextAlphabetHoliday);
    }

    function changeYearHoliday(): void {
        const nextYearHoliday = YEAR_HOLIDAYS[holiday];
        setHoliday(nextYearHoliday);
    }

    function holidayToEmoji(holiday: Holiday): string {
        let emoji = "";
        if (holiday === "New Years") {
            emoji = "🎉";
        } else if (holiday === "Christmas") {
            emoji = "🎄";
        } else if (holiday === "My Birthday") {
            emoji = "🎂";
        } else if (holiday === "Fourth of July") {
            emoji = "🇺🇸";
        } else if (holiday === "Thanksgiving") {
            emoji = "🦃";
        }
        return emoji;
    }

    return (
        <div>
            <div>
                <span>Holiday: {holidayToEmoji(holiday)}</span>
                <div></div>
                <Button onClick={changeAlphabetHoliday}>
                    Advance by Alphabet
                </Button>
                <Button onClick={changeYearHoliday}>Advance by Year</Button>
            </div>
            Cycle Holiday
        </div>
    );
}
