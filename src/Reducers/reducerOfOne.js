import {BUTTON_TEXT_CHANGE} from '../Actions/actionsOfOne';

const initialState = {
    textDisplay: 'Hello From, initialState Reducer Comp One',
    error: 'false',
    btnText: 'Not Clicked'
}

export default function reducerOfOne (state = initialState, action){
        switch(action.type) {
            case BUTTON_TEXT_CHANGE :
                let btnTxt = 'Not Clicked'; 
                if (state.btnText === 'Not Clicked'){
                    btnTxt = 'Clicked';
                }
                return{
                    ...state,
                    btnText: btnTxt
                }
            // case BUTTON :
            //     return {
            //         ...state,
            //         error: 'true'
            //     }
        }
        return state;
    }