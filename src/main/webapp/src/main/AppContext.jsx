import React from 'react'

export const ApplicationContext = React.createContext()
export const ApplicationContextConsumer = ApplicationContext.Consumer

export default class AppContext extends React.Component{
    render(){
        return this.props.children
    }
}
