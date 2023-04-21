import {TRACK_LISTS,TRACK_FAILED,ADD_TRACK,DELETE_TRACK,EDIT_TRACK} from './constants';

const initialState = {
    tracks:[]
}

const trackReducer = (state=initialState, action)=>{
       switch(action.type) {
           case TRACK_LISTS:
               return {...state, tracks:[...action.payload]}
            case TRACK_FAILED:
                return {...state, tracks:[null]}
            case ADD_TRACK:{
                const newtracks = state.tracks;
                newtracks.push(action.payload);
                return {...state, tracks:[...newtracks]}
            }
            case DELETE_TRACK:{
                const removetracks = state.tracks;
                const i = removetracks.findIndex((item)=> item._id === action.payload._id );
                if( i !== -1 ){
                    removetracks.splice(i,1);
                }
                return {...state, tracks:[...removetracks]}
            }
            case EDIT_TRACK:{
                const edittracks = state.tracks;
                const found = edittracks.find((item)=> item._id === action.payload._id);
                if(found) {
                    found.trackName = action.payload.trackName;
                    found.artistName = action.payload.artistName;
                    found.fileName = action.payload.fileName;
                }
                return {...state, tracks:[...edittracks]}
            }
           default:
               return initialState;
       }
}

export default trackReducer;