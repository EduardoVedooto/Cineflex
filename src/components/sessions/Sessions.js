import { Subtitle } from "../styles/Subtitle";
import Day from "./Day";
import { SessionsComponent, DayComponent } from "./styles";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../Footer/Footer";


export default function Sessions() {
    const { movieID } = useParams();

    const [session, setSession] = useState({days: []});

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${movieID}/showtimes`);
        promisse.then(({data}) => setSession(data));
    },[]);

    return(
        <SessionsComponent>
            <Subtitle>Selecione um horário</Subtitle>
            {session.days.map(day => {
                return(
                    <DayComponent key={day.id}>
                        <Day 
                            movieID={movieID}
                            date={day.date}
                            weekday={day.weekday}
                            schedule={day.showtimes}
                        />
                    </DayComponent>
                );
            })}
            <Footer poster={session.posterURL} title={session.title}/>
        </SessionsComponent>
    );
}