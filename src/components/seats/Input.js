import { InputComponent } from "./styles";

export default function Input({placeholder, label}){
    return(
        <InputComponent>
            <label>{label}</label>
            <input type="text" placeholder={placeholder} />
        </InputComponent>
    );
}