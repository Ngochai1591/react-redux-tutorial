import { createStore} from 'redux';

var initialState ={
    status: false,
    sort:{
        by: 'name',
        value: 1
    }
}

var myReducer = (state=initialState, action) =>{
    if(action.type === "TOGGLE_STATUS"){
        state.status = !state.status
        return state;
    }
    if(action.type === "SORT"){
        var {by, value} = action.sort;
        var {status} = state;
        return {
            status: status,
            sort: {
                by: by,
                value: value
            }
        }
    }

    return state
}

const store = createStore(myReducer);
console.log("Default State",store.getState());
//Change Status
var action = {
    type: 'TOGGLE_STATUS'
};

store.dispatch(action);
console.log('TOGGLE_STATUS', store.getState())

//Arrange Name from Z to A
var sort_action = {
    type: 'SORT',
    sort: {
        by: 'status',
        value: 1
    }
}

store.dispatch(sort_action);
console.log('ARRANGE', store.getState())