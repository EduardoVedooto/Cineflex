import { SeatComponent } from "./styles";

export default function Seat({number, isAvailable, isSelected, seatID, selectSeat, isLabel}){
    
    return(
        <SeatComponent 
            onClick={() => isLabel ? null : selectSeat(seatID)} 
            id={seatID} 
            isAvailable={isAvailable} 
            isSelected={isSelected}
            isLabel={isLabel}
        >
            {number}
        </SeatComponent>
    );
}