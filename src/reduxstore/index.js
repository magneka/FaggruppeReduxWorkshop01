import { combineReducers } from 'redux'
import counterReducer from './counter/counterReducer'
import customerListReducer from './customerlist/customerListReducer';


const allReducersCombined = combineReducers({
    counter: counterReducer,
    customers: customerListReducer,
})

// *****************************************************
// reset the state of a redux store (gjør ved innlogging)
// *****************************************************

const combinedReducer = (state, action) => {
    if (action.type === 'RESET_STORE') {
        state = undefined;
    }
    return allReducersCombined(state, action)
}
export const resetStore = () => {

    return {
        type: 'RESET_STORE'
    }
}

export default combinedReducer