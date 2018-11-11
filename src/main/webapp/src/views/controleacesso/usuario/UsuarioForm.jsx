import React from 'react'
import {Form, FormGroup, Input, Label, Row, Col, Button} from 'reactstrap'
import RenderIf from '../../../components/common/RenderIf'

import {PickList} from 'primereact/picklist';
import {Panel} from 'primereact/panel'

import {UsuarioContext} from './Usuario'
import Page from "../../../components/template/Page";

class UsuarioForm extends React.Component {

    onChange(event) {
        this.props.selecionarGrupos(event);
    }

    grupoTemplate(grupo) {       
        return (
            <div className="p-clearfix">
                <div style={{ fontSize: '14px', float: 'right', margin: '15px 5px 0 0' }}>{grupo.descricao}</div>
            </div>
        );
    }

    render(){
        let title = this.props.entity.id ? 'Atualização de Usuario' : 'Cadastro de Usuario'
        let {id, nome, email, cpf} = this.props.entity
        let gruposDisponiveis = this.props.gruposDisponiveis || []

        return(
            <Page title={title}>
                <Form>
                    <RenderIf test={id}>
                        <Row>
                            <Col md="6">
                                <FormGroup>
                                    <Label for="inputCodigo">Código</Label>
                                    <Input id="inputCodigo" type="text" name="id" 
                                        disabled={true} value={id} 
                                        onChange={this.props.handleFormChange} />
                                </FormGroup>
                            </Col>                        
                        </Row>
                    </RenderIf>
                    <Row>
                        <Col md="6">
                            <FormGroup>
                                <Label for="inputNome">Nome</Label>
                                <Input id="inputNome" 
                                       type="text" 
                                       name="nome" 
                                       disabled={this.props.disable} 
                                       value={nome} 
                                       onChange={this.props.handleFormChange}/>
                            </FormGroup>
                       </Col>
                       <Col md="6">
                            <FormGroup>
                                <Label for="inputEmail">Email</Label>
                                <Input id="inputEmail" type="email" name="email" 
                                       disabled={this.props.disable} 
                                       value={email} onChange={this.props.handleFormChange}/>
                            </FormGroup>
                       </Col>
                    </Row>

                     <Row>
                        <Col md="6">
                            <FormGroup>
                                <Label for="inputCPF">CPF</Label>
                                <Input id="inputCPF" type="text" name="cpf" 
                                       disabled={this.props.disable} 
                                       value={cpf} 
                                       onChange={this.props.handleFormChange}/>
                            </FormGroup>
                       </Col>
                    </Row>

                    <br/>
                    
                    <Row>
                        <Col md="12">
                            <Panel header="Grupos">
                            <PickList targetHeader="Selecionados"
                                      sourceHeader="Disponíveis"
                                      source={gruposDisponiveis} 
                                      showSourceControls={false}
                                      showTargetControls={false}
                                      responsive={true}
                                      target={this.props.entity.grupos} 
                                      itemTemplate={this.grupoTemplate} 
                                      onChange={(e) => this.onChange(e)} />
                            </Panel>
                        </Col>
                    </Row>

                    <br/>

                    <Row>
                        <Col xs="12">
                            <Button color="primary" onClick={this.props.handleSubmit}>Salvar</Button>
                            <Button className="ml-3" onClick={this.props.cancelar}>Cancelar</Button>
                        </Col>
                    </Row>
                </Form>
            </Page>
        )
    }
}

export default () => (
    <UsuarioContext.Consumer>
        {context=>(
            <UsuarioForm {...context.state} {...context} />
        )}
    </UsuarioContext.Consumer>
)