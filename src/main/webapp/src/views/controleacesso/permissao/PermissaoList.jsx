import React from 'react'

import {Row, Col, Button} from 'reactstrap'
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import Confirm from '../../../components/common/Confirm'

import {PermissaoContext} from './Permissao'
import Page from "../../../components/template/Page";


class PermissaoList extends React.Component {

    state = {
        showConfirm : false,
        idEntity : ''
    }

    actionTemplate = (rowData, column) => {
        return <div>
            <Button type="button" color="primary" className="mr-2" onClick={() => this.props.editar(rowData)}><i className="pi pi-pencil"></i></Button>
            <Button type="button" color="danger" onClick={() => this.prepareDelete(rowData)}><i className="pi pi-trash"></i></Button>
        </div>;
    }

    prepareDelete = (rowData) => {
        this.setState({...this.state, idEntity:rowData.id , showConfirm: true })
    }    

    confirmDelete = () => {
        this.props.delete(this.state.idEntity)
        this.setState({showConfirm:false})
        this.props.listar()
    }

    cancelDelete = () => {
        this.setState({showConfirm:false, idEntity: ''})
    }

    render(){
        let cols = [
            {field: 'id', header : 'Código', className: 'colunaAcoes'},
            {field: 'descricao', header : 'Descrição'},
            {field: 'label', header : 'Label'},
            {body: this.actionTemplate, header: '', className: 'colunaAcoes', field: 'acaoId'}
        ]

        let dynamicColumns = cols.map((col,i) => {
            return <Column key={col.field} field={col.field} header={col.header} body={col.body} className={col.className} />;
        });

        return(
            <Page title="Permissões">
                <Row className="p-grid">
                    <Col md="12">
                        <Button onClick={this.props.novo} color="success" style={{float: 'right'}}>Novo</Button>
                    </Col>                        
                </Row>
                <br />
                <Row>
                    <Col md="12">
                        <DataTable value={this.props.list}
                                    paginator={true}
                                    rows={10}>
                            {dynamicColumns}
                        </DataTable>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <Confirm  visible={this.state.showConfirm} 
                                  modal={false}
                                  onCancel={this.cancelDelete}
                                  message="Confirma a exclusão do item?" 
                                  onConfirm={this.confirmDelete} />
                    </Col>
                </Row>
            </Page>
        )
    }
}

export default () => (
    <PermissaoContext.Consumer>
        {context=>(
            <PermissaoList {...context.state} {...context} />
        )}
    </PermissaoContext.Consumer>
)