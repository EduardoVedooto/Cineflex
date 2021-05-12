export default function Movie({poster, name}) {
    return(
        <li>
            <img src={poster} alt={`Filme: ${name}`} />
        </li>
    );
}