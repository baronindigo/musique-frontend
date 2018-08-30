import axios from 'axios';
import getToken from '../resolvers/getToken';
import constant from '../const';

export default () => {
    return axios({
        url: constant.url + 'graphql',
        method: 'post',
        data: {
            query:`
                query{
                    allUsers{
                        _id,
                        firstName,
                        lastName,
                        instrument{
                            name,
                            _id
                        },
                        location,
                        photo
                    }
                }
            `
        }, headers: {'Authorization':'JWT ' + getToken()}
    })
}