import { HomeContainer } from "./styles";
import Movie from "./Movie";
import { Subtitle } from "./../styles/Subtitle";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
                {movies.map(movie => {
                    return (
                        <Link to={`movie/${movie.id}`} key={movie.id} >
                            <Movie poster={movie.posterURL} name={movie.title}/>
                        </Link>
                    );
                })}
            </ul>
        </HomeContainer>
    );
}