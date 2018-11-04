import React from 'react'
import GrupoForm from './GrupoForm'
import GrupoList from './GrupoList'
import GrupoService from './GrupoService'
import PermissaoService from '../permissao/PermissaoService'

export const GrupoContext = React.createContext()

export default class Grupo extends React.Component{

    newEntity = { id: '', descricao: '', permissoes: [] }

    state = {
        renderList: true,
        disable: false,
        entity: this.newEntity,
        list: [],
        permissoesDisponiveis: []
    }

    constructor(props){
        super(props)
        this.service = new GrupoService()
        this.permisaoService = new PermissaoService()
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
        this.permisaoService.findAll().then( resp => {
            this.setState({...this.state, renderList:false, entity: this.newEntity, permissoesDisponiveis: resp.data})
        })        
    }

    editar = (entity) => {
        this.service.findOne(entity.id).then(resp => {
            this.setState({...this.state, renderList:false, entity: resp.data.entity, permissoesDisponiveis: resp.data.permissoesDisponiveis })
        })        
    }

    listar = () => {
        this.service.findAll().then (resp => {
            this.setState({...this.state, list: resp.data})
        })
    }

    delete = (id) => {
        this.service.delete(id).then(resp => {
            this.service.msgSuccess("Item removido com sucesso!");
        })
    }

    renderPage = () =>{
        if(this.state.renderList){
            return (<GrupoList />)
        }else{
            return ( <GrupoForm />)
        }
    }

    handleFormChange = (event) => {
        let name = event.target.name
        let value = event.target.value
        this.setState({...this.state, entity: { ...this.state.entity, [name] : value}})
    }

    selecionarPermissoes = (permissoes) => {
        this.setState({...this.state, entity: {...this.state.entity, permissoes} })
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

        const context = {
            state: this.state,
            handleSubmit: this.handleSubmit,
            handleFormChange: this.handleFormChange,
            cancelar: this.cancelar,
            novo: this.novo,
            editar: this.editar,
            delete: this.delete,
            listar: this.listar,
            selecionarPermissoes: this.selecionarPermissoes
        }

        const Component = () => (
            this.renderPage()
        )             

        return(
            <GrupoContext.Provider value={context}>
                <Component />
            </GrupoContext.Provider>
        )
    }
}