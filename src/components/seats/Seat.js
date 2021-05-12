import { SeatComponent } from "./styles";

export default function Seat({number, isAvailable}){
    console.log(isAvailable);
    return(
        <SeatComponent isAvailable={isAvailable}>{number}</SeatComponent>
    );
}