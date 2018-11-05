import React from 'react'

const ApplicationContext = React.createContext()

export default class AppContext extends React.Component{
    
    state = {
        usuarioLogado : null,
        autenticado: false,
        permissoes: []
    }

    getUsuarioAutenticado = () => {
        return this.state.usuarioLogado
    }

    getPermissoesUsuarioLogado = () => {
        return this.permissoes
    }

    render(){
        const context = {
            state: this.state,
            getUsuarioAutenticado: this.getUsuarioAutenticado,
            getPermissoesUsuarioLogado: this.getPermissoesUsuarioLogado
        }

        return(
            <ApplicationContext.Provider value={context}>
                {this.props.children}                
            </ApplicationContext.Provider>
        )
    }
}
