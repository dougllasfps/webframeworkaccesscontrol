import React from 'react'
import {Form, FormGroup, Input, Label, Row, Col, Button} from 'reactstrap'
import RenderIf from '../../../components/common/RenderIf'

import {DataTable} from 'primereact/datatable'
import {Panel} from 'primereact/panel'

import {GrupoContext} from './Grupo'
import { Column } from 'primereact/column';
import Page from "../../../components/template/Page";

class GrupoForm extends React.Component {

    render(){
        let title = this.props.entity.id ? 'Atualização de Grupo' : 'Cadastro de Grupo'
        let {id, descricao} = this.props.entity
        let permissoes = this.props.permissoesDisponiveis || []

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
                                <Label for="inputDesc">Descrição</Label>
                                <Input id="inputDesc" type="text" name="descricao" 
                                       disabled={this.props.disable} 
                                       value={descricao} onChange={this.props.handleFormChange}/>
                            </FormGroup>
                       </Col>
                    </Row>

                    <br/>
                    
                    <Row>
                        <Col md="12">
                            <Panel header="Permissões">
                                <DataTable value={permissoes} 
                                           onSelectionChange={(e) => this.props.selecionarPermissoes(e.data)} 
                                           selection={this.props.entity.permissoes}>
                                    <Column selectionMode="multiple" style={{width:'3em'}}/>
                                    <Column field="id" header="Código" />
                                    <Column field="descricao" header="Descrição" />
                                </DataTable>
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
    <GrupoContext.Consumer>
        {context=>(
            <GrupoForm {...context.state} {...context} />
        )}
    </GrupoContext.Consumer>
)