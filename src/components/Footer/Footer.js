import { useState } from "react";
import MovieOverview from "../movieOverview/MovieOverview";
import { FooterComponent } from "./styles";


export default function Footer({poster, title, date, day, synopsis}) {
    const [isSynopsisDisplayed, setIsSynopsisDisplayed] = useState(false);

    return(
        <FooterComponent onClick={() => setIsSynopsisDisplayed(!isSynopsisDisplayed)}>
            <img src={poster} alt={`Filme: ${title}`}/>
            <div>
                <p>{title}</p>
                <p>{date ? `${day} - ${date}` : ""}</p>
            </div>
            <MovieOverview
                movie={{title, poster, synopsis}} 
                isSynopsisDisplayed={isSynopsisDisplayed} 
                setIsSynopsisDisplayed={setIsSynopsisDisplayed}
            />
        </FooterComponent>
    );
}