/* Import all other reducers into this and combine them, rootReducer is not supposed to reduce anything else, but it should initiate state */
//https://github.com/reactjs/redux/blob/master/docs/api/combineReducers.md
import { combineReducers } from 'redux';

import reducerOfOne from './reducerOfOne';
import reducerOfTwo from './reducerOfTwo';
import reducerOfTwoChild from './reducerOfTwoChild';
import reducerOfLastChild from './reducerOfLastChild';

import {TEXT_CHANGE, BUTTON} from '../Actions/actionCreator';

// const initialState = {
//     textDisplay: '',
//     error: 'false',
//     initialText: 'Hey'
// }

const rootReducer = combineReducers({
    reducerOfOne,
    reducerOfTwo,
    reducerOfTwoChild,
    reducerOfLastChild
});

// export default function rootReducer (state = initialState, action){
//     switch(action.type) {
//         case TEXT_CHANGE : 
//             return{
//                 ...state,
//                 textDisplay: action.val
//             }
//         case BUTTON :
//             return {
//                 ...state,
//                 error: 'true'
//             }
//     }
//     return state;
// }

export default rootReducer;