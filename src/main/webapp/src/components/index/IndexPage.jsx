import React from 'react'
import Login from '../login/Login'

import Rotas from '../../common/template/Rotas'

class IndexPage extends React.Component{

    render(){
        const {autenticado} = this.props
        console.log(autenticado)
        if(autenticado){
            return (
                <Rotas />
            )
        }else{
            return(
                <Login />
            )
        }
    }
}
