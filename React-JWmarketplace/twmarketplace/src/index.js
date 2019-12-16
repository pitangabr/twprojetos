import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Route,Redirect, BrowserRouter as Router, Switch} from 'react-router-dom';
// import App from './App';
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro';
// import Desh from './pages/desh';
// import DescricaoProduto from './pages/descricaoprodu';
import NaoEncontrado from './pages/naoencontrado/NaoEncontrado';
import PerfilAdm from './pages/desh/PerfilAdm';
import NotifiAdm from './pages/desh/NotifiAdm';
import { usuarioAutenticado, parseJwt } from './services/auth';

const PermissaoAdmin = ({component : Component}) =>(
    <Route
        render={props =>
            usuarioAutenticado() && parseJwt().Role === "Administrador" ? (
                <Component {...props}/>
            ) : (
                <Redirect to={{pathname: "/login"}}/>
            )
        }
    />
)



const Ways = (
    <Router>
        <div>
            <Switch>
                {/* <Route exact path = "/" component = {App}/> */}
                <Route path = "/login" component = {Login}/>
                <Route path = "/cadastro" component = {Cadastro}/>
                {/* <Route path = "/desh" component = {Desh}/> */}
                <Route path = "/perfiladm" component = {PerfilAdm}/>
                <Route path = "/NotifiAdm" component = {NotifiAdm}/>
                {/* <Route path = "/descricaoproduto" component = {DescricaoProduto}/> */}
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