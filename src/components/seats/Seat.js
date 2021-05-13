import { SeatComponent } from "./styles";

export default function Seat({number, isAvailable, isSelected}){
    console.log(isAvailable);
    return(
        <SeatComponent isAvailable={isAvailable} isSelected={isSelected}>{number}</SeatComponent>
    );
}