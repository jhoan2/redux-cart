import { createStore } from 'redux';
import reducer from './rootReducer';

const store = createStore(reducer, initialstate);

export default store;