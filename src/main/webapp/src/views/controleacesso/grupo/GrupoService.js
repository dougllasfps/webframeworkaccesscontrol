import ApiService from "../../../services/api/ApiService";

const baseUrl = `${process.env.REACT_APP_BASE_SERVICE_URL}/api/grupos`

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