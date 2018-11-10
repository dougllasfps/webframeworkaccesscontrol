import React from 'react'
import {Form, FormGroup, Input, Label, Row, Col, Button} from 'reactstrap'
import RenderIf from '../../../components/common/RenderIf'

import {PermissaoContext} from './Permissao'
import Page from "../../../components/template/Page";

class PermissaoForm extends React.Component {
    render(){
        let title = this.props.entity.id ? 'Atualização de Permissão' : 'Cadastro de Permissão'
        let {id, descricao, label} = this.props.entity

        return(
            <Page title={title}>
                <Form>
                    <RenderIf test={id}>
                        <Row>
                            <Col md="12">
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
                                <Label for="inputDesc">Descrição</Label>
                                <Input id="inputDesc" type="text" name="descricao" 
                                       disabled={this.props.disable} 
                                       value={descricao} onChange={this.props.handleFormChange}/>
                            </FormGroup>
                        </Col>

                        <Col md="6">
                            <FormGroup>
                                <Label for="inputLabel">Label</Label>
                                <Input id="inputLabel" type="text" name="label" 
                                       disabled={this.props.disable} value={label} 
                                       onChange={this.props.handleFormChange}/>
                            </FormGroup>
                        </Col>
                    </Row>
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
    <PermissaoContext.Consumer>
        {context=>(
            <PermissaoForm {...context.state} {...context} />
        )}
    </PermissaoContext.Consumer>
)