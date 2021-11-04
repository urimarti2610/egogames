import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'
import UrlList from '../Helpers/UrlList';
import GameListPage from './pages/GameListPage';
import HomePage from './pages/HomePage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import GameView from './components/Game/GameView';

const App = () => (
    <HashRouter>
        <Header />
        <div className="container full-height">
            <Switch>
                <Route exact path={UrlList.GAMES} component={GameListPage} />
                <Route exact path={`${UrlList.GAMES}/:url`} component={GameView} />
                <Route exact path={UrlList.HOME} component={HomePage} />
            </Switch>
        </div>
        <Footer />
    </HashRouter>
)

export default App;