import status from './status';
import sort from './sort';
import {combineReducers} from 'redux';
const myReducer = combineReducers({
    sort,
    status
})
export default myReducer;