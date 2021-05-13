import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from './globalStyle';
import Header from './header/Header';
import Home from './homeScreen/Home';
import Sessions from './sessions/Sessions';
import Seats from './seats/Seats';
import Success from './success/Success';

export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Header />
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/movie/:movieID" exact component={Sessions} />
                <Route path="/movie/:movieID/session/:sessionID" exact component={Seats}/>
                <Route path="/success" exact component={Success}/>
            </Switch>
        </BrowserRouter>
    );
}