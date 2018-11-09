import React from 'react'

import { Route } from 'react-router-dom';

import {AuthContextConsumer} from '../../main/AuthContext'

class AuthRoute extends React.Component{

    renderRoute = (props) => {

        let authorized = this.props.hasAuthority(this.props.authority)
        if(authorized){
            return (
                null
            )
        }
    }

    render() {
        return(
            <Route {...this.props} render={(props) => this.renderRoute(props)} />
        )
    }
}

export default () => (
    <AuthContextConsumer>
        {(ctx) => (
            <AuthRoute hasAuthority={ctx.hasAuthority} />
        )}
    </AuthContextConsumer>
)