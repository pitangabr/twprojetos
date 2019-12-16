import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

// import Login from './pages/login';
// import Cadastro from './pages/cadastro';
// import Desh from './pages/desh';
// import PerfilUsuario from './pages/perfilusuario';
// import DescricaoProduto from './pages/descricaoprodu';
import Home from './pages/Home/home';
import NaoEncontrado from './pages/naoencontrado/NaoEncontrado';
import adm from './pages/ADM/adm';

const Ways = (
    <Router>
        <div>
            <Switch>
                <Route exact path = "/" component = {adm}/>
                {/* <Route path = "/login" component = {Login}/>
                <Route path = "/cadastro" component = {Cadastro}/>
                <Route path = "/desh" component = {Desh}/>
                <Route path = "/perfilusuario" component = {PerfilUsuario}/>
                <Route path = "/descricaoproduto" component = {DescricaoProduto}/> */}
                <Route component = {NaoEncontrado}/>
            </Switch>
        </div>
    </Router>
);


ReactDOM.render(Ways, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
