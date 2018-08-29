import axios from 'axios';
import getToken from '../resolvers/getToken';
import constant from '../const';


export default () => {
    return axios({
        url: constant.url + 'graphql',
        method: 'post',
        data: {
            query: `
                query{
                    allInstruments{
                        _id,
                        name
                    }
                }
            `
        }, headers: {'Authorization':'JWT ' + getToken()}

    })
}