import React from 'react'
import PermissaoForm from './PermissaoForm'
import PermissaoList from './PermissaoList'
import PermissaoService from './PermissaoService'

export const PermissaoContext = React.createContext()

export default class Permissao extends React.Component{

    newEntity = { id: '', descricao: '', label: '' }

    state = {
        renderList: true,
        disable: false,
        entity: this.newEntity,
        list: []
    }

    constructor(props){
        super(props)
        this.service = new PermissaoService()
    }

    handleSubmit = (event) => {
        event.preventDefault()

        this.service.save(this.state.entity).then( resp => {
            this.setState({...this.state, renderList: true})
            this.listar()
            this.service.msgSuccess("Item Salvo com sucesso!")
        })
    }

    cancelar = () =>{
        this.setState({...this.state, renderList: true, entity: {}})
    }

    novo = () => {
        this.setState({...this.state, renderList:false, entity: this.newEntity})
    }

    editar = (entity) => {
        this.setState({...this.state, renderList:false, entity})
    }

    listar = () => {
        this.service
            .findAll()
            .then (resp => {
                this.setState({...this.state, list: resp.data})
            })
    }

    delete = (id) => {
        this.service.delete(id).then(resp => {
            this.service.msgSuccess("Item removido com sucesso!");
        }).catch(error => {

        })
    }

    renderPage = () =>{
        if(this.state.renderList){
            return (<PermissaoList />)
        }else{
            return ( <PermissaoForm />)
        }
    }

    handleFormChange = (event) => {
        let name = event.target.name
        let value = event.target.value
        this.setState({...this.state, entity: { ...this.state.entity, [name] : value}})
    }

    componentWillMount(){
        if(this.state.renderList){
            this.listar()
        }
    }

    componentWillUnmount(){
        this.setState({})
    }

    render(){
        return(
            <PermissaoContext.Provider value={{
                state: this.state,
                handleSubmit: this.handleSubmit,
                handleFormChange: this.handleFormChange,
                cancelar: this.cancelar,
                novo: this.novo,
                editar: this.editar,
                delete: this.delete,
                listar: this.listar
            }}>
                {this.renderPage()}
            </PermissaoContext.Provider>
        )
    }
}