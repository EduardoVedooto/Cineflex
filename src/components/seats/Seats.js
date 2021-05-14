import Footer from "../Footer/Footer";
import { Subtitle } from "../styles/Subtitle";
import Seat from "./Seat";
import { InputWrapper, SeatsComponent } from "./styles";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import Input from "./Input";
import { FinalizationButton } from "./../styles/Button";
import Label from "./Label";

export default function Seats() {

    const [session, setSession] = useState({});
    const [selectedSeatID, setSelectedSeatID] = useState([]);
    const [name, setName] = useState("");
    const [CPF, setCPF] = useState("");
    const { sessionID } = useParams();
    const [selectedSeats] = useState([]);
    const history = useHistory();
    const [customers, setCustomers] = useState([]);

    

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${sessionID}/seats`);
        promisse.then(({data}) => {
            setSession(data);
        });
    },[]);
    
    if(!session.id) return null;


    function selectSeat(seatID) {
        const seat = session.seats.find(seat => seat.id === seatID);

        if(selectedSeatID.includes(seatID)) {
            if(!window.confirm("Deseja remover o assento?")) return null;
            selectedSeatID.splice(selectedSeatID.indexOf(seatID), 1);
            selectedSeats.splice(selectedSeats.indexOf(seat.name), 1);
            customers.splice(customers.indexOf(customers.find(eachCustomer => eachCustomer.id === seatID)), 1);
            // Explicação da linha anterior (Ln43): 
            // Faz a remoção (splice) do comprador com index (indexOf) encontrado ao percorrer (find) a lista de compradores e achar o ID correspondente
            setSelectedSeatID([...selectedSeatID]);
        } 
        
        else if(seat.isAvailable) {
            selectedSeatID.push(seat.id);
            selectedSeats.push(seat.name);
            setSelectedSeatID([...selectedSeatID]);
            customers.push({
                id: seat.id,
                name: "",
                CPF: ""
            });
        }
        
        else {
            alert("Este assento está reservado! Por favor, escolha outra opção.")
        }
    }


    function sendRequest() {
        if(customers.find(customer => customer.name === "")) {
            console.log(customers.find(customer => customer.name === ""));
            alert("Todos os campos 'Nomes' precisam estar preenchidos...");
            return;
        }
        if(customers.find(customer => customer.CPF === "")) {
            alert("Todos os campos 'CPF' precisam estar preenchidos...");
            return;
        }
        if(!customers.length) {
            alert("Nenhum assento selecionado. Por favor, selecione um assento para finalizar o pedido")
            return;
        }
        const request = {
            ids: selectedSeatID,
            name: name,
            cpf: CPF
        };
        
        const promisse = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/seats/book-many",request);

        promisse.then(() => {
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
        })
    }

    // console.log(customers);
    // console.log(selectedSeats);
    // console.log(session);
    // console.log(selected);
    // console.log(name);
    // console.log(CPF);

    console.log({
        ids: selectedSeatID,
        compradores: customers
    })

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
                            isSelected={selectedSeatID.includes(seat.id)}
                            selectSeat={selectSeat}
                        />
                    );
                })}
            </ul>

            <Label/>
            
            {selectedSeats.map(((seat, index) => <Input key={index} customers={customers} setCustomers={setCustomers} seat={{number: seat, id: selectedSeatID[index]}} name={name} setName={setName} CPF={CPF} setCPF={setCPF}/>))}
            
            
            <FinalizationButton onClick={sendRequest}  >
                {selectedSeats.length <= 1 ? "Reservar assento": "Reservar assentos"}
                
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