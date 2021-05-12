import { FooterComponent } from "./styles";

export default function Footer({poster, title, session}) {
    return(
        <FooterComponent>
            <img src={poster} alt={`Filme: ${title}`}/>
            <div>
                <p>{title}</p>
                <p>{session ? session : ""}</p>
            </div>
        </FooterComponent>
    );
}