import { Link } from "react-router-dom";
import { Button } from "../styles/Button";
import { ScheduleTable } from "./styles";


export default function Day({movieID, date, weekday, schedule}) {
    return (
        <>
            <h3>{weekday} - {date}</h3>
            <ScheduleTable>    
                {schedule.map(session => {
                    return(
                        <Link to={`${movieID}/session/${session.id}`} key={session.id}>
                            <Button schedule>{session.name}</Button>
                        </Link>
                    );
                })}
            </ScheduleTable>
        </>
    );
}