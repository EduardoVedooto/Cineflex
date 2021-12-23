import { useHistory } from "react-router";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { Subtitle } from "../styles/Subtitle";

export default function Success(props){
    const {customers, movie, session, seats} = props.location.orderData;
    const history = useHistory();

    return(
        <Container>
            <Subtitle confirmation={true}>Pedido Feito <br/> com sucesso!</Subtitle>
            <InfoWrapper>
                <h3>Filme e sessão</h3>
                <p>{movie}</p>
                <p>{session.date} - {session.time}</p>
            </InfoWrapper>
            <InfoWrapper>
                <h3>Seus ingressos</h3>
                <ul>
                    {customers.map((customer, index) => (
                        <Item key={customer.id}>
                            <p><strong>Número do Assento:</strong> {seats[index]}</p>
                            <p><strong>Nome:</strong> {customer.name}</p>
                            <p><strong>CPF:</strong> {customer.CPF.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"\$1.\$2.\$3\-\$4")}</p>{/*eslint-disable-line*/}
                        </Item>
                    ))}
                </ul>
            </InfoWrapper>
            <ButtonBackHome onClick={() => history.push("/")}>Voltar pra home</ButtonBackHome>
        </Container>
    );
}

const Container = styled.main`
    background-color: #363333;
    padding: 67px 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;

`;

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 20px 15px 20px;
    color: #E9DDD4;
    margin: 0 auto 35px auto;
    background-color: #0a0a0a73;
    width: 90%;
    border-radius: 10px;
 

    h3 {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 10px;
    }
    p {
        font-size: 22px;
        margin-bottom: 5px;
        word-break: break-word;
    }

    ul {
        width: 100%;
    }
`;

const ButtonBackHome = styled(Button)`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 67px;
    border-radius: 0;
`;

const Item = styled.li`
    font-size: 22px;
    margin: 15px 0;
    padding: 15px;
    border-radius: 8px;
    border: 2px dashed #544545;
`;