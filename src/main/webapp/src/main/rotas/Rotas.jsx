import React from 'react'
import { Route } from 'react-router-dom';
import Permissao from '../../views/controleacesso/permissao/Permissao'
import Grupo from '../../views/controleacesso/grupo/Grupo'
import Usuario from '../../views/controleacesso/usuario/Usuario'
import Home from '../../views/Home'

export default class Rotas extends React.Component{
    render(){
        return(
            <div>
                <Route path="/" exact component={Home} />
                <Route path="/permissoes" exact component={Permissao} />
                <Route path="/grupos" exact component={Grupo} />
                <Route path="/usuarios" exact component={Usuario} />
            </div>
        )
    }
}
