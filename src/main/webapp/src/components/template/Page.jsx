import React from 'react'
import {Container} from 'reactstrap'

export default class Page extends React.Component{
    render(){
        return(
            <Container>
                <h2>{this.props.title}</h2>
                <hr />
                <br />  
                {this.props.children}
            </Container>
        )
    }
}