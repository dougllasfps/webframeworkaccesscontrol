import React from 'react'
import { Route } from 'react-router-dom';
import Permissao from '../../components/permissao/Permissao'
import Grupo from '../../components/grupo/Grupo'
import Home from '../../views/Home'
import Usuario from '../../components/usuario/Usuario'

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
