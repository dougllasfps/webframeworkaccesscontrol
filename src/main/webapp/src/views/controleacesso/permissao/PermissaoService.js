import ApiService from "../../../services/api/ApiService";

const baseUrl = `${process.env.REACT_APP_BASE_SERVICE_URL}/api/permissoes`

export default class PermissaoService extends ApiService{
    constructor(){
        super({baseUrl})
    }
}