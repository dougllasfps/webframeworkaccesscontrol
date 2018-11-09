import React from 'react'
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from 'reactstrap'
import {Link} from 'react-router-dom'

export default class AppNavBar extends React.Component{
    state ={
        open: false
    }

    toggle = () => {
        this.setState({open: !this.state.open})
    }

    render(){
        return (
            <Navbar color="dark" dark expand="md">
                <NavbarBrand tag={Link} to="/">Início</NavbarBrand>
                <NavbarToggler onClick={this.toggle}/>
                <Collapse isOpen={this.state.open} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink tag={Link} to="/usuarios">Usuários</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/permissoes">Permissoes</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/grupos">Grupos</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/dougllasfps">GitHub</NavLink>
                    </NavItem>
                </Nav>
                </Collapse>
            </Navbar>
        )
    }
}