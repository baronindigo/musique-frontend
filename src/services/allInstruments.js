import axios from 'axios';
import getToken from '../resolvers/getToken';
import constant from '../const';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFAZ21haWwuY29tIiwiaWQiOiI1Yjg0ZWI1ZDZkMWZjMTNlZWM3YzY5MWYiLCJpYXQiOjE1MzU0Mzc4MDUsImV4cCI6MTUzNTUyNDIwNX0.k_ONNtzMkKxDnTrf8XYjkjT3rQIP8JulDvw9gJKdass'

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
        }, headers: {'Authorization':'JWT ' + token}
    })
}