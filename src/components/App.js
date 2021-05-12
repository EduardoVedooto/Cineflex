import Header from './header/Header';
import GlobalStyle from './globalStyle';
import Home from './homeScreen/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Sessions from './sessions/Sessions';

export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Header />
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/movie/:movieID" exact component={Sessions} />
            </Switch>
        </BrowserRouter>
    );
}