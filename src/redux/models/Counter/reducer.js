import { INCREMENT ,DECREMENT } from "./constants";

const intialState = {
  count: 0
}

const Counter = (state=intialState , action ) => {
    switch(action.type){
        case INCREMENT :
            return{...state, count:state.count+1}
       
        case DECREMENT :
            return {...state, count:state.count-1}
       
        default :
        return intialState;
    }
}
export default Counter;