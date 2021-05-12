import { Button } from "../styles/Button";
import { ScheduleTable } from "./styles";

export default function Day({date, weekday, schedule}) {
    return (
        <>
            <h3>{weekday} - {date}</h3>
            <ScheduleTable>    
                {schedule.map(time => {
                    return(
                        <Button schedule key={time.id}>{time.name}</Button>
                    );
                })}
            </ScheduleTable>
        </>
    );
}