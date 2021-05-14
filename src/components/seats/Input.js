import { InputComponent } from "./styles";

export default function Input({maxLength, placeholder, label, value, setValue,}){
    return(
        <InputComponent>
            <label>{label}</label>
            <input 
                type="text"
                maxLength={maxLength}
                placeholder={placeholder} 
                value={value} 
                onChange={e => setValue(e.target.value)} />
        </InputComponent>
    );
}