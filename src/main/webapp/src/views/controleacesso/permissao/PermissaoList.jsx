import React from 'react'

import DataTable from '../../../components/common/DataTable'
import Button from '@material-ui/core/Button';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {Row, Col} from 'reactstrap'
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
            <Button type="button" color="default" className="mr-2" onClick={() => this.props.editar(rowData)}><i className="pi pi-pencil"></i></Button>
            <Button type="button" color="default" onClick={() => this.prepareDelete(rowData)}><i className="pi pi-trash"></i></Button>
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
            {header : 'Código', className: 'colunaAcoes'},
            {header : 'Descrição'},
            {header : 'Label'},
            {header: '', className: 'colunaAcoes'},
            {header: '', className: 'colunaAcoes'}
        ]

        let {list} = this.props || []

        return(
            <Page title="Permissões">
                <Row className="p-grid">
                    <Col md="12">
                        <Button variant="contained" color="primary" onClick={this.props.novo} style={{float: 'right'}}>Novo</Button>
                    </Col>                        
                </Row>
                <br />
                <Row>
                    <Col md="12">
                        <DataTable cols={cols}>
                            {list.map( item => (
                                <TableRow key={item.id}>
                                    <TableCell>{item.id}</TableCell>
                                    <TableCell>{item.descricao}</TableCell>
                                    <TableCell>{item.label}</TableCell>
                                    <TableCell>
                                        <IconButton onClick={ (e) => this.props.editar(item) }>
                                            <EditIcon />
                                        </IconButton>
                                    </TableCell>
                                    <TableCell>
                                        <IconButton onClick={ (e) => this.prepareDelete(item) }>
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
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