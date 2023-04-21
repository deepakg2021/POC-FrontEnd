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

export const getAllUser = async () => { 
    try{
        const response = await axios.get(`${API_BASE_URL}/admin/user`, {headers:{"Content-Type":"application/json", "Authorization":"Bearer "+JWT.getJwt()}});
        if(response.status === 200) {
            return response.data;  
        } else {
            return Promise.reject(new Error("Internal server error"));   
        }
    } catch(err){
        return Promise.reject(err);
    };

};

export const addUser = async (data) => { console.log("data" ,data);
    try{
        const response = await axios.post(`${API_BASE_URL}/admin/user`, data, {headers:{"Content-Type":"application/json", "Authorization":"Bearer "+JWT.getJwt()}});
        if(response.status === 200) {
            return response.data;  
        } else {
            return Promise.reject(new Error("Internal server error"));   
        }
    }
    catch(err){
        return Promise.reject(err)
    }
};


export const viewUser = async (userId) => { 
    try{
        const response = await axios.get(`${API_BASE_URL}/admin/user/${userId}`,  {headers:{"Content-Type":"application/json", "Authorization":"Bearer "+JWT.getJwt()}});
        if(response.status === 200) {
            return response.data;  
        } else {
            return Promise.reject(new Error("Internal server error"));   
        }
    }
    catch(err){
        return Promise.reject(err)
    }
};

export const editUser = async (data,userId) => { 
    try{
        const response = await axios.put(`${API_BASE_URL}/admin/user/${userId}`,data,  {headers:{"Content-Type":"application/json", "Authorization":"Bearer "+JWT.getJwt()}});
        if(response.status === 200) {
            return response.data;  
        } else {
            return Promise.reject(new Error("Internal server error"));   
        }
    }
    catch(err){
        return Promise.reject(err)
    }
};

export const deleteUser = async (userId) => { 
    try{
        const response = await axios.delete(`${API_BASE_URL}/admin/user/${userId}`,  {headers:{"Content-Type":"application/json", "Authorization":"Bearer "+JWT.getJwt()}});
        if(response.status === 200) {
            return response.data;  
        } else {
            return Promise.reject(new Error("Internal server error"));   
        }
    }
    catch(err){
        return Promise.reject(err)
    }
};



