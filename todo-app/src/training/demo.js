import { createStore} from 'redux';
import {sort, status} from './actions/index';
import myReducer from './reducers/index';


//
const store = createStore(myReducer);
console.log("Default State",store.getState());
//
store.dispatch(status());
console.log('TOGGLE_STATUS', store.getState())
//
store.dispatch(sort({
        by: 'name',
        value: -1
}));
console.log('SORT', store.getState())