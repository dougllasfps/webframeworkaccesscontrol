import React from 'react'
import UsuarioForm from './UsuarioForm'
import UsuarioList from './UsuarioList'
import UsuarioService from './UsuarioService'
import GrupoService from '../grupo/GrupoService'

export const UsuarioContext = React.createContext()

export default class Usuario extends React.Component {

    newEntity = { id: '', nome: '', email: '', senha: '', senhaMatch: '', grupos: [] }

    state = {
        renderList: true,
        disable: false,
        entity: this.newEntity,
        list: [],
        gruposDisponiveis: []
    }

    constructor(props){
        super(props)
        this.service = new UsuarioService()
        this.grupoService = new GrupoService()
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
        this.grupoService.findAll().then( resp => {
            this.setState({...this.state, renderList:false, entity: this.newEntity, gruposDisponiveis: resp.data})
        })        
    }

    editar = (entity) => {
        this.service.findOne(entity.id).then(resp => {
            this.setState({...this.state, renderList:false, entity: resp.data.entity, gruposDisponiveis: resp.data.gruposDisponiveis })
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
            return (<UsuarioList />)
        }else{
            return ( <UsuarioForm />)
        }
    }

    handleFormChange = (event) => {
        let name = event.target.name
        let value = event.target.value
        this.setState({...this.state, entity: { ...this.state.entity, [name] : value}})
    }

    selecionarGrupos = (grupos) => {
        this.setState({...this.state, entity: {...this.state.entity, grupos} })
    } 

    componentWillMount(){
        console.log('componentWillMount')
        if(this.state.renderList){
            console.log(this.state.renderList)
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
            selecionarGrupos: this.selecionarGrupos
        }

        const Component = () => (
            this.renderPage()
        )             

        return(
            <UsuarioContext.Provider value={context}>
                <Component />
            </UsuarioContext.Provider>
        )
    }
}