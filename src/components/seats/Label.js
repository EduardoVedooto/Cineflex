import Seat from "./Seat";
import { LabelComponent } from "./styles";

export default function Label() {
    return(
        <LabelComponent>
            <div>
                <Seat isAvailable={true} isSelected={true}/>
                Selecionado
            </div>
            <div>
                <Seat isAvailable={true} isSelected={false}/>
                Disponível
            </div>
            <div>
                <Seat isAvailable={false} isSelected={false}/>
                Indisponível
            </div>
        </LabelComponent>
    );
}