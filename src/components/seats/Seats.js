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
import Loading from "../loading/Loading";
import Swal from "sweetalert2";

export default function Seats() {

    const [selectedSeatID, setSelectedSeatID] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [isActive, setIsActive] = useState(false);
    const [session, setSession] = useState({});
    const [selectedSeats] = useState([]);
    const { sessionID } = useParams();
    const history = useHistory();

    

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${sessionID}/seats`);
        promisse.then(({data}) => {
            setSession(data);
        });
    },[sessionID]);
    
    if(!session.id) return <Loading/>;


    function selectSeat(seatID) {
        const seat = session.seats.find(seat => seat.id === seatID);

        if(selectedSeatID.includes(seatID)) {
            Swal.fire({
                titleText: "Remover assento?",
                icon: "question",
                showDenyButton: true,
                confirmButtonText: "Sim",
                denyButtonText: "Não",
                confirmButtonColor: "#900020",
                denyButtonColor: "#202020"
            }).then(response => {
                if(response.isConfirmed) {
                    selectedSeatID.splice(selectedSeatID.indexOf(seatID), 1);
                    selectedSeats.splice(selectedSeats.indexOf(seat.name), 1);
                    customers.splice(customers.indexOf(customers.find(eachCustomer => eachCustomer.id === seatID)), 1);
                    setSelectedSeatID([...selectedSeatID]);
                }
            });
            
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
        
        else Swal.fire({
            text: "",
            icon: "warning",
            confirmButtonColor: "#900020",
            confirmButtonText: "Entendido",
            titleText: "Este assento já está reservado"

        })
        activateButton();
    }

    function activateButton() {
        if(customers.length &&
          !customers.find(customer => customer.name === "") &&
          !customers.find(customer => customer.CPF === "") &&
          !customers.find(customer => customer.CPF.length < 11) &&
          customers.map(customer => customer.CPF).filter(CPF => Number(CPF)).length === customers.length
        )
        {
            setIsActive(true);    
        } else {
            setIsActive(false);
        }
    }

    function sendRequest() {
        const request = {
            ids: selectedSeatID,
            compradores: customers
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
                    customers: customers,
                    seats: selectedSeats
                }
            });
        })
    }

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
            
            {selectedSeats.map(((seat, index) => (
                <Input 
                    key={index}
                    customers={customers}
                    setCustomers={setCustomers}
                    seat={{number: seat, id: selectedSeatID[index]}} //Objeto que possui o número e o ID do assento
                    activateButton={activateButton}
                />
            )))}
            
            
            <FinalizationButton isActive={isActive} onClick={() => sendRequest()}  >
                {selectedSeats.length <= 1 ? "Reservar assento": "Reservar assentos"}
                
            </FinalizationButton>
            <Footer 
                title={session.movie.title} 
                poster={session.movie.posterURL} 
                day={session.day.weekday} 
                date={session.day.date}
                synopsis={session.movie.overview}
            />
        </SeatsComponent>
    );
}