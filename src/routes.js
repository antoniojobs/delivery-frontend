import React from 'react';
import CadastroEntrega from './pages/CadastroEntregas';
import ListaEntregas from './pages/ListaEntregas';
import Mapa from './pages/Mapa';
import {BrowserRouter,Route,Switch} from 'react-router-dom';


export default function Routes(params) {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' component={ListaEntregas} exact />{/* lista todas a entregas */}
                <Route path='/cadastro' component={CadastroEntrega}/>{/* cadastra nova entregas */}
                <Route path='/mapa' component={Mapa}/>{/* detalha uma entrega cadastrada incluindo mapa*/}
            </Switch>
        </BrowserRouter>
    );
}
