import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import App from './App';
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro'
// import Desh from './pages/desh';
// import PerfilUsuario from './pages/perfilusuario';
// import DescricaoProduto from './pages/descricaoprodu';
import NaoEncontrado from './pages/naoencontrado/NaoEncontrado';

const Ways = (
    <Router>
        <div>
            <Switch>
                {/* <Route exact path = "/" component = {App}/> */}
                <Route path = "/login" component = {Login}/>
                <Route path = "/cadastro" component = {Cadastro}/>
                {/* <Route path = "/desh" component = {Desh}/>
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
