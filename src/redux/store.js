import { createStore } from 'redux';
import reducer from './rootReducer';
//npm i redux-devtools-extension
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(reducer, composeWithDevTools());

export default store;