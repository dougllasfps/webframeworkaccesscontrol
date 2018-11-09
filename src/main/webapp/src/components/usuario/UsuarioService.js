import ApiService from '../../common/api/ApiService'

const baseUrl = `${process.env.REACT_APP_BASE_SERVICE_URL}/api/usuarios`

export default class GrupoService extends ApiService{
    constructor(){
        super({baseUrl})
    }

    novo = () => {
        return this.api.get(`${baseUrl}/novo`)
    }

    findOne = (id) => {
        return this.api.get(`${baseUrl}/${id}`)
    }
}