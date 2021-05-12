import { FooterComponent } from "./styles";

export default function Footer({poster, title, date, day}) {
    return(
        <FooterComponent>
            <img src={poster} alt={`Filme: ${title}`}/>
            <div>
                <p>{title}</p>
                <p>{date ? `${day} - ${date}` : ""}</p>
            </div>
        </FooterComponent>
    );
}