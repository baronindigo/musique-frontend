import axios from 'axios';
import getToken from '../resolvers/getToken';
import constantes from '../const';

export default (id, data) => {
    let {firstName, lastName, phone, email, photo } = data;
    return axios({
        url : constantes.local + 'graphql',
        method : 'post',
        data : {
            query : 
                `mutation {
                    updateUser(id:"${id}", data:{
                        firstName : "${firstName}",
                        lastName  : "${lastName}",
                        email     : "${email}",
                        phone     : "${phone}",
                        photo     : "${photo}"
                    }){
                        _id,
                        firstName,
                        lastName,
                        email,
                        phone,
                        photo
                    }
                }`    
        },
        headers : { 'Authorization' : 'JWT ' + getToken() }
    })
}