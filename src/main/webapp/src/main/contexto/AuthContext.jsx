import React from 'react'

const AuthContext = React.createContext()
export const AuthContextConsumer = AuthContext.Consumer

export class AuthContextProvider extends React.Component{
    
    state = {
        usuarioLogado : null,
        autenticado: false,
        token: '',
        permissoes: []
    }

    isAutenticado = () => {
        return this.autenticado
    }

    getUsuarioAutenticado = () => {
        return this.state.usuarioLogado
    }

    hasAuthority = (auth) => {
        return this.state.permissoes.find( a => a === auth);
    }

    getCurrentToken = () => {
        return this.state.token;
    }

    setCurrentToken = (token) => {
        this.setState({...this.state, token})
    }

    render(){
        const contextValue = {
            getUsuarioAutenticado: this.getUsuarioAutenticado,
            hasAuthority: this.hasAuthority,
            isAutenticado : this.isAutenticado,
            getCurrentToken: this.getCurrentToken,
            setCurrentToken: this.setCurrentToken
        }

        return(
            <AuthContext.Provider value={contextValue}>
                {this.props.children}                
            </AuthContext.Provider>
        )
    }
}