import Axios from 'axios';
Axios.interceptors.use(function(response){
    return response.data
},function(error){
    return Promise.reject(error);
});
export default Axios;