import { createStore } from 'redux';
import boyacaApp from './store.js';

const configureStore = () =>{
// first parameter the reducer,
// second parameter the safe state
const store = createStore(
  boyacaApp
);

return store;
}

export default configureStore;
