import Api from './Api'

import {showErrorMessage,showSuccessMessage,showWarnMessage} from '../messages/messages'

export default class GenericService {

    constructor( {baseUrl} ){
        this.api = new Api()
        this.baseUrl = baseUrl
    }

    getApi = () => {
        return this.api;
    }

    onSuccess = (resp, successCallBack) => {
        if(successCallBack){
            successCallBack(resp)
        }else{
            this.msgSuccess('Item salvo com sucesso!')
        }
    }

    onError = (error, errorCallBack) => {
        if(errorCallBack){
            errorCallBack(error)
        }else{
            if(error.data.messages){
                error.data.messages.array.forEach(e => {
                    this.msgErro(e)
                });
            }
        }
    }

    save = ( entity ) => {
        return entity.id ? this.update(entity) : this.api.post( this.baseUrl, entity )
    }

    update = ( entity ) => {
        return this.api.put( `${this.baseUrl}/${entity.id}`, entity)
    }

    delete = (id) => {
        return this.api.delete(`${this.baseUrl}/${id}`)
    }

    findAll = ()=> {
        return this.api.get(this.baseUrl);
    }

    find = ({query, successCallBack, errorCallBack}) => {
        return this.api.get(`${this.baseUrl}?${query}`, this.onSuccess(successCallBack), this.onError(errorCallBack))
    }

    msgErro = (message) => {
        showErrorMessage(message)
    }

    msgSuccess = (message) => {
        showSuccessMessage(message)
    }

    msgWarn = (message) => {
        showWarnMessage(message)
    }
}