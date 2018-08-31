import axios from 'axios';
import constantes from '../const';

export default (data) => {
    return axios.post(constantes.local + "register/", data);
}