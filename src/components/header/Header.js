import {HeaderContainer} from './styles';
import {FiChevronsLeft} from "react-icons/fi";
import { useLocation, useHistory } from "react-router-dom";

export default function Header() {
    const history = useHistory();
    const pathname = useLocation().pathname;
    let enable;
    if(pathname === "/" || pathname === "/success") enable = false;
    else enable = true;

    return(
        <HeaderContainer enableGoBack={enable}>
            <h1>CINEFLEX</h1>
            <FiChevronsLeft onClick={() => history.goBack()} color={"#900020"} size={40}/>
        </HeaderContainer>
    );
}