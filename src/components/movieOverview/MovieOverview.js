import styled from "styled-components";

export default function MovieOverview({movie, isSynopsisDisplayed, setIsSynopsisDisplayed}){
    return(
        <Main isEnable={isSynopsisDisplayed}>
            <MovieContainer onClick={e => e.stopPropagation()}>
                <img src={movie.poster} alt={movie.title}/>
                <h1>{movie.title}</h1>
                <p>{movie.synopsis}</p>
            </MovieContainer>
        </Main>
    );
}

const Main = styled.main`
    background-color: rgba(0,0,0,.5);
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 15;
    align-items: center;
    justify-content: center;
    display: ${props => props.isEnable ? "flex" : "none"};
    backdrop-filter: blur(5px);
`;

const MovieContainer = styled.div`
    background-image: linear-gradient(0deg, rgba(0,0,0,0.95) 25%, rgba(70,70,70,0.5) 80%,rgba(255,255,255,0.1) 100%);
    background-position: center center;
    width: 325px;
    height: 600px;
    border-radius: 10px;
    position: relative;
    display: flex;
    flex-direction: column;

    h1 {
        text-align: center;
        font-size: 32px;
        color: #0a0a0a;
        font-weight: 700;
        margin-top: 30px;
        background-color: rgba(255,255,255,.5);
    }

    img {
        position: absolute;
        width: inherit;
        height: 100%;
        object-fit: cover;
        z-index: -1;
        border-radius: 10px;
    }

    p {
        margin: auto 20px 20px 20px;
        max-height: 300px;
        overflow-y: scroll;
    }
`;