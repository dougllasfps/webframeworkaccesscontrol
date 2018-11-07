import React from 'react'

export const ApplicationContext = React.createContext()

export const withConsumer = (Consumer) => (WrappedComponent) => {
    return class extends React.Component {
       render() {
           console.log(Consumer, WrappedComponent)
          return (
              <Consumer>
                  {(context)=>(
                      <WrappedComponent {...context.state} {...context} />
                  )}
              </Consumer>
          )
       }
    }
 }

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
