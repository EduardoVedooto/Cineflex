import { HomeContainer } from "./styles";
import Movie from "./Movie";
import { Subtitle } from "./../styles/Subtitle";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const promisse = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies");
        promisse.then(({data}) => {
            setMovies(data);
        });
    },[]);

    return(
        <HomeContainer>
            <Subtitle>Selecione o filme</Subtitle>
            <ul>
                {movies.map(movie => <Movie key={movie.id} poster={movie.posterURL} name={movie.title}/>)}
            </ul>
        </HomeContainer>
    );
}