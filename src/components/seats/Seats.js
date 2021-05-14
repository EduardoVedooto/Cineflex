import Footer from "../Footer/Footer";
import { Subtitle } from "../styles/Subtitle";
import Seat from "./Seat";
import { SeatsComponent } from "./styles";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import Input from "./Input";
import { FinalizationButton } from "./../styles/Button";
import Label from "./Label";

export default function Seats() {

    const [session, setSession] = useState({});
    const [selected, setSelected] = useState([]);
    const [name, setName] = useState("");
    const [CPF, setCPF] = useState("");
    const { sessionID } = useParams();
    const [selectedSeats, setSelectedSeats] = useState([]);
    const history = useHistory();
    
    console.log(selectedSeats);

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${sessionID}/seats`);
        promisse.then(({data}) => {
            setSession(data);
        });
    },[]);
    
    if(!session.id) return null;


    function selectSeat(seatID) {
        const seat = session.seats.find(seat => seat.id === seatID);
        if(selected.includes(seatID)) {
            selected.splice(selected.indexOf(seatID), 1);
            selectedSeats.splice(selectedSeats.indexOf(seat.name), 1);
            setSelected([...selected]);
        } else if(seat.isAvailable) {
            selected.push(seat.id);
            selectedSeats.push(seat.name);
            setSelected([...selected]);
        } else {
            alert("Este assento está reservado! Por favor, escolha outra opção.")
        }
    }

    function sendRequest() {
        if(!name) {
            alert("Por favor, digite seu nome...");
            return;
        }
        if(!CPF || CPF.length !== 11 || !Number(CPF)) {
            alert("Por favor, digite um CPF válido...");
            return;
        }
        if(!selected.length) {
            alert("Nenhum assento selecionado. Por favor, selecione um assento para finalizar o pedido")
            return;
        }
        const request = {
            ids: selected,
            name: name,
            cpf: CPF
        };
        history.push({
            pathname:"/success",
            orderData: {
                movie: session.movie.title,
                session: {
                    date: session.day.date,
                    time: session.name
                },
                name: name,
                CPF: CPF,
                seats: selectedSeats
            }
        });
        console.log(request);
    }


    console.log(session);
    console.log(selected);
    // console.log(name);
    // console.log(CPF);

    return(
        <SeatsComponent>
            <Subtitle>Selecione o(s) assento(s)</Subtitle>
            <ul>
                {session.seats.map((seat) => {
                    return (
                        <Seat 
                            key={seat.id} 
                            seatID={seat.id} 
                            number={seat.name} 
                            isAvailable={seat.isAvailable}
                            isSelected={selected.includes(seat.id)}
                            selectSeat={selectSeat}
                        />
                    );
                })}
            </ul>

            <Label/>
            
            <Input maxLength="30" placeholder={"Digite o seu nome..."} label={"Nome do comprador:"} value={name} setValue={setName}/>
            <Input maxLength="11" placeholder={"Digite seu CPF..."} label={"CPF do comprador:"} value={CPF} setValue={setCPF}/>
            
            <FinalizationButton onClick={sendRequest} >
                    Reservar assento(s)
            </FinalizationButton>
            <Footer 
                title={session.movie.title} 
                poster={session.movie.posterURL} 
                day={session.day.weekday} 
                date={session.day.date} 
            />
        </SeatsComponent>
    );
}