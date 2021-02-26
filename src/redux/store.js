import { createStore } from 'redux';
import rootReducer from './rootReducer';
//npm i redux-devtools-extension
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(rootReducer, composeWithDevTools());

export default store;