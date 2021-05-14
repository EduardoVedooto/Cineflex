import { useHistory } from "react-router";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { Subtitle } from "../styles/Subtitle";

export default function Success(props){
    console.log(props.location);
    const {movie, CPF, name, session, seats} = props.location.orderData;
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
                <h3>Lugares</h3>
                <ul>
                    {seats.map((seat, index) => <Seat key={index}>Assento: {seat}</Seat>)}
                </ul>
            </InfoWrapper>
            <InfoWrapper>
                <h3>Comprador</h3>
                <p>Nome: {name}</p>
                <p>CPF: {CPF.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"\$1.\$2.\$3\-\$4")}</p>
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
    height: 100vh;
    @media(max-height: 744px) {
        height: auto;
    }
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
`;

const ButtonBackHome = styled(Button)`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 67px;
`;

const Seat = styled.li`
    font-size: 22px;
    margin: 5px 0;
`;