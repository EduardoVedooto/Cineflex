import { Button } from "../styles/Button";
import { ScheduleTable } from "./styles";

export default function Day() {
    return (
        <>
            <h3>Quinta-feira - 24/06/2021</h3>
            <ScheduleTable>
                <Button schedule>15:00</Button>
                <Button schedule>19:00</Button>
                <Button schedule>19:00</Button>
                <Button schedule>19:00</Button>
                <Button schedule>19:00</Button>
                <Button schedule>19:00</Button>
            </ScheduleTable>
        </>
    );
}