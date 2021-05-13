import { InputComponent } from "./styles";

export default function Input({maxLength, placeholder, label, value, setValue, validate}){
    return(
        <InputComponent>
            <label>{label}</label>
            <input 
                type="text"
                maxlength={maxLength}
                placeholder={placeholder} 
                value={value} 
                onChange={e => {
                    setValue(e.target.value);
                    validate();
                }} />
        </InputComponent>
    );
}