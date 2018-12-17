import { combineReducers } from 'redux';

const todoReducer = (state=[], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            state = state.concat(action.payload);
            break;

        case 'DELETE_TODO':
            state = state.slice();
            state.slice(action.payload, 1);
            break;
    
        default:
            return state;
            break;
    }
}
const rootReducer = combineReducers({
    todos: todoReducer
});

export default rootReducer;