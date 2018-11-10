import React from 'react'

import './login.css'

export default class LoginPage extends React.Component{
    render(){
        return(

            <div className="app-container ant-layout">
                <div className="app-header ant-layout-header">
                    <div className="container">
                        <div className="app-title"><a href="https://polls.callicoder.com/">Acesso</a></div>
                        <ul className="ant-menu app-menu ant-menu-light ant-menu-root ant-menu-horizontal singleMenu" 
                            role="menu"
                            aria-activedescendant="" 
                            tabindex="0" >
                            <li className="ant-menu-item ant-menu-item-selected" role="menuitem" aria-selected="true"><a
                                    href="https://polls.callicoder.com/login">Entrar</a></li>
                            <li className="ant-menu-item" role="menuitem" aria-selected="false"><a
                                    href="https://polls.callicoder.com/signup">Cadastrar</a></li>
                        </ul>
                    </div>
                </div>

                <div className="app-content ant-layout-content">
                    <div className="container">
                        <div className="login-container"><h3 className="page-title">Entrar</h3>
                            <div className="login-content">
                                <form className="ant-form ant-form-horizontal login-form">
                                    <div className="ant-row ant-form-item">
                                        <div className="ant-form-item-control-wrapper">
                                            <div className="ant-form-item-control">
                                                    <span className="ant-form-item-children">
                                                        <span className="ant-input-affix-wrapper ant-input-affix-wrapper-lg">
                                                            <span className="ant-input-prefix">
                                                                <i className="anticon anticon-user"></i>
                                                            </span>
                                                            <input type="text" name="usernameOrEmail" placeholder="Login ou Email" value=""
                                                                    id="usernameOrEmail" data-__meta="[object Object]"
                                                                    className="ant-input ant-input-lg">
                                                            </input>
                                                        </span>
                                                    </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ant-row ant-form-item">
                                        <div className="ant-form-item-control-wrapper">
                                            <div className="ant-form-item-control"><span className="ant-form-item-children"><span
                                                    className="ant-input-affix-wrapper ant-input-affix-wrapper-lg"><span
                                                    className="ant-input-prefix"><i className="anticon anticon-lock"></i></span><input
                                                    type="password" name="password" placeholder="Senha" value=""
                                                    id="password" data-__meta="[object Object]" data-__field="[object Object]"
                                                    className="ant-input ant-input-lg" /></span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ant-row ant-form-item">
                                        <div className="ant-form-item-control-wrapper">
                                            <div className="ant-form-item-control"><span className="ant-form-item-children"><button
                                                    type="submit"
                                                    className="ant-btn login-form-button ant-btn-primary ant-btn-lg"><span>Login</span></button>Or <a
                                                    href="https://polls.callicoder.com/signup">Registrar-se</a></span></div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}