import Seat from "./Seat";
import { LabelComponent } from "./styles";

export default function Label() {
    return(
        <LabelComponent>
            <div>
                <Seat isAvailable={true} isSelected={true} isLabel={true}/>
                Selecionado
            </div>
            <div>
                <Seat isAvailable={true} isSelected={false} isLabel={true}/>
                Disponível
            </div>
            <div>
                <Seat isAvailable={false} isSelected={false} isLabel={true}/>
                Indisponível
            </div>
        </LabelComponent>
    );
}