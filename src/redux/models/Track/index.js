import {trackLists} from './actions';
import { addTrack } from './actions';
import store from '../../store';
import { updateTrack, getTrack, deleteTrack } from './actions';

const model = {
     trackList: ()=>{
        return store.dispatch(trackLists());
     },
     addTrack:(data)=>{
         return store.dispatch(addTrack(data));
     },
     deleteTrack:(trackId)=>{
        return store.dispatch(deleteTrack(trackId));  
     },
     updateTrack:(trackId,data)=>{
         return store.dispatch(updateTrack(trackId,data));
     },
     getTrack:(trackId)=>{
        return store.dispatch(getTrack(trackId)) ;
     }
}

export default model;