import React from 'react'
import {Container} from 'reactstrap'

export default class Page extends React.Component{
    render(){
        return(
            <Container>
                <div className="well well-lg">
                    <h2>{this.props.title}</h2>
                    <hr />
                    <br />  
                    {this.props.children}
                </div>
            </Container>
        )
    }
}