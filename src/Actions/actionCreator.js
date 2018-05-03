/* Create 4 different action creators, one for each component*/
export const TEXT_CHANGE = 'TEXT_CHANGE';
export const BUTTON = 'BUTTON';
export const textChange = val => ({
    type: TEXT_CHANGE,
    val
    
});

const alertTest = (msg) => {
    console.log(msg)
    alert(msg);
}

export const buttonClick = () => ({
    type: BUTTON
})

export const asynchTest = (msg) => (dispatch, getState) => {
    // type: ASYNCH_TEST,
    //alert('something is happening');
    return dispatch => {
        console.log('this works')
        setTimeout(() => {
          dispatch(buttonClick());
          dispatch(alertTest('msg'));
        }, 1000);
      };
}