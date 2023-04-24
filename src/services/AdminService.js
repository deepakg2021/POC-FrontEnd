import axios from 'axios';
import { API_BASE_URL } from '../constants';
import { JWT } from '../shared';

export const getDashboard = async () => { 
    try{
        const response = await axios.get(`${API_BASE_URL}/admin/dashboard`, {headers:{"Content-Type":"application/json", "Authorization":"Bearer "+JWT.getJwt()}});
        if(response.status === 200) {
            return response.data;  
        } else {
            return Promise.reject(new Error("Internal server error"));   
        }
    } catch(err){
        return Promise.reject(err);
    }   

};

export const getAllCases = async () => {  
    try{
        const response = await axios.get(`http://localhost:5000/api/v1/user/view-all-cases`, {headers:{"Content-Type":"application/json", "Authorization":"Bearer "+JWT.getJwt()}});
        if(response.status === 200) {
            return response.data;  
        } else {
            return Promise.reject(new Error("Internal server error"));   
        }
    } catch(err){
        return Promise.reject(err);
    };

};



