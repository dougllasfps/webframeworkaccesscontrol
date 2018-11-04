import React from 'react'
import {Link} from 'react-router-dom'

export default (props) => (
    <footer>
        <hr />
        <div className="container">
            <ul>
                <li><Link to="/">Empresa</Link></li>
                <li><Link to="/">Contato</Link></li>
                <li><Link to="/">Revisões</Link></li>
                <li><Link to="/">Termos de Serviço</Link></li>
            </ul>
        <p className="footer-copyright">© 2018 Copyright Text</p>
        </div>
        {/**
            <div className="footer-social">
                <Link to="/" className="social-icons"><i className="fa fa-facebook"></i></Link>
                <Link to="/" className="social-icons"><i className="google-plus" /></Link>
                <Link to="/" className="social-icons"><i className="twitter" /></Link>
            </div>
        
        */}
    </footer>
)