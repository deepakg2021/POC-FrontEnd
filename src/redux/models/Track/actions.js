import { TRACK_LISTS, TRACK_FAILED, ADD_TRACK, DELETE_TRACK , EDIT_TRACK} from "./constants";
import { AdminService } from "../../../services";

export const trackLists = () => async(dispatch,getState) => {
    try{
        const response = await AdminService.getAllTracks();
        console.log("response is here", response)
        if(response.success){
           dispatch({type:TRACK_LISTS, payload:response.data});
           return response;
        } else{
            return Promise.reject(new Error("Api error"));
        }
    } catch(error){
        dispatch({type:TRACK_FAILED, payload:null});
        return Promise.reject(error);
    }
}
export const addTrack = (data) => async(dispatch,getState) => {
    try{
        const response = await AdminService.addTrack(data);
         console.log("response is here", response)
        if(response.success){
            dispatch({type:ADD_TRACK,payload:response.data});
            return response
        }else{
            return Promise.reject(new Error("Api error"));
        }
    } catch(error){
        dispatch({type:ADD_TRACK,payload:null});
        return Promise.reject(error);
    }
}

export const deleteTrack = (trackid) => async(dispatch,getState) => {
    try{
        const response = await AdminService.deleteTrack(trackid);
        console.log("response is here", response)
        if(response.success){
            dispatch({type:DELETE_TRACK,payload:{_id:trackid}});
            return response
        } else{
            return Promise.reject(new Error("Api error"));
        }
    } catch(error){
        dispatch({type:DELETE_TRACK,payload:null});
        return Promise.reject(error);
    }
}

export const getTrack = (trackId) => async(getState) => {
    try{
        const response = await AdminService.viewTrack(trackId);
        if(response.success){
          return response
        } else{
            return Promise.reject(new Error("Api error"));
        }
    } catch(error){
        return Promise.reject(error);
    }
}

export const updateTrack = (trackId,data) => async(dispatch,getState) => {
    try{
        const response = await AdminService.editTracks(trackId,data);
        console.log("response ", response)
        if(response.success){
         dispatch({type:EDIT_TRACK,payload:response.data});
         return response
        } else{
            return Promise.reject(new Error("Api error"));
        }
    } catch(error){
        dispatch({type:EDIT_TRACK,payload:null});
       return Promise.reject(error);
    }
}