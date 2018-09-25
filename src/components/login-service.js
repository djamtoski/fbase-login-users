import axios from 'axios';

export default axios.create({
    baseURL : "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCw-lZIhvFfrU2Y2GBbZr2kXO1BmVstvHM"
})