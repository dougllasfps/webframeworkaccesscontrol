import React from 'react'
import {Container} from 'reactstrap'

export default class Page extends React.Component{
    render(){
        return(
            <Container>
                <div className="inside-page">
                    <h3 className="MuiTypography-root-69 MuiTypography-h6-86 MuiTypography-colorInherit-98 MuiTypography-noWrap-95">
                        {this.props.title}
                    </h3>
                    <hr />
                    <br />  
                    {this.props.children}
                </div>
            </Container>
        )
    }
}