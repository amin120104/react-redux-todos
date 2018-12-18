import { createStore } from 'redux';
import rootReducer from '../reducers/Rootreducer';

const store = createStore(rootReducer);

export default store;