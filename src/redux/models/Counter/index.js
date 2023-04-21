import store from '../../store';

import {
    increment,
    decrement
} from './actions';


const actions = {
    increment: () => store.dispatch(increment()),
    decrement: () => store.dispatch(decrement())
}

export default actions;