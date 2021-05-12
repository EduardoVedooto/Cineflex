import { Subtitle } from "../styles/Subtitle";
import Day from "./Day";
import { SessionsComponent, DayComponent } from "./styles";


export default function Sessions() {
    return(
        <SessionsComponent>
            <Subtitle>Selecione um horário</Subtitle>
            <DayComponent><Day/></DayComponent>
            <DayComponent><Day/></DayComponent>
            <DayComponent><Day/></DayComponent>
            
            
            
        </SessionsComponent>
    );
}