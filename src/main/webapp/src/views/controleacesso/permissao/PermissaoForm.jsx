import React from 'react'
import {Form, FormGroup, Input, Label, Row, Col} from 'reactstrap'
import RenderIf from '../../../components/common/RenderIf'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


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
                                    <TextField
                                        id="inputCodigo"
                                        label="Código"
                                        name="id" 
                                        disabled={true}
                                        value={id}
                                        className="full-width"
                                        onChange={this.props.handleFormChange}
                                        margin="normal"
                                        />
                                 </FormGroup>
                            </Col>                        
                        </Row>
                    </RenderIf>
                    <Row>
                        <Col md="6">
                            <FormGroup>
                                <TextField
                                        id="inputDesc"
                                        label="Descrição"
                                        name="descricao" 
                                        disabled={this.props.disable}
                                        value={descricao}
                                        className="full-width"
                                        onChange={this.props.handleFormChange}
                                        margin="normal"
                                />
                            </FormGroup>
                        </Col>

                        <Col md="6">
                            <FormGroup>
                                <TextField
                                        id="inputLabel"
                                        label="Label"
                                        name="label" 
                                        disabled={this.props.disable}
                                        value={label}
                                        className="full-width"
                                        onChange={this.props.handleFormChange}
                                        margin="normal"
                                />
                             </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12">
                            <Button variant="contained" color="default" onClick={this.props.handleSubmit}>Salvar</Button>
                            <Button variant="contained" color="secondary" className="ml-3" onClick={this.props.cancelar}>Cancelar</Button>
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