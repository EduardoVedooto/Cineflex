import Footer from "../Footer/Footer";
import { Subtitle } from "../styles/Subtitle";
import Seat from "./Seat";
import { SeatsComponent } from "./styles";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Input from "./Input";
import { FinalizationButton } from "./../styles/Button";
import Label from "./Label";

export default function Seats() {

    const [session, setSession] = useState({});
    const { sessionID } = useParams();

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${sessionID}/seats`);
        promisse.then(({data}) => {
            setSession(data);
        });
    },[]);
    
    if(!session.id) return null;

    console.log(session);

    return(
        <SeatsComponent>
            <Subtitle>Selecione o(s) assento(s)</Subtitle>
            <ul>
                {session.seats.map((seat) => <Seat key={seat.id} number={seat.name} isAvailable={seat.isAvailable}/>)}
            </ul>

            <Label/>
            
            <Input placeholder={"Digite o seu nome..."} label={"Nome do comprador:"}/>
            <Input placeholder={"Digite seu CPF..."} label={"CPF do comprador:"}/>
            
            <FinalizationButton>Reservar assento(s)</FinalizationButton>
            
            <Footer 
                title={session.movie.title} 
                poster={session.movie.posterURL} 
                day={session.day.weekday} 
                date={session.day.date} 
            />
        </SeatsComponent>
    );
}