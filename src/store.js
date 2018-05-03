import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducers/rootReducer';
/*combine reducer at rootReducer, here you you add the rootReducer and apply thunk*/

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;