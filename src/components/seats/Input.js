import { InputComponent, InputWrapper } from "./styles";

export default function Input({customers, setCustomers, seat, activateButton}){
    return(
        <InputWrapper>
            <h3>Assento: {seat.number}</h3>
            <InputComponent>
                <label>Nome do comprador</label>
                <input
                    type="text"
                    maxLength="30"
                    placeholder="Digite o seu nome..."
                    value={customers.find(customer => customer.id === seat.id).name} 
                    // onChange={e => setName(e.target.value)}
                    onChange={e => {
                        customers.find(customer => customer.id === seat.id).name = e.target.value;
                        setCustomers([...customers]);
                        activateButton();
                    }}
                />
            </InputComponent>
            <InputComponent>
                <label>CPF do comprador</label>
                <input 
                    type="text"
                    maxLength="11"
                    placeholder="Digite seu CPF..."
                    value={customers.find(customer => customer.id === seat.id).CPF} 
                    onChange={e => {
                        customers.find(customer => customer.id === seat.id).CPF = e.target.value;
                        setCustomers([...customers]);
                        activateButton();
                    }}
                />
            </InputComponent>
        </InputWrapper>
    );
}