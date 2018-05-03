export const BUTTON_TEXT_CHANGE = 'BUTTON_TEXT_CHANGE';

export const btnTextChange = () => ({
    type: BUTTON_TEXT_CHANGE
})

export const getData = () => (dispatch, getState) => {
    let anyData = `I shouldn't be a string`;
    console.log('Get Data Initialized');
    return fetch(`https://api.coinmarketcap.com/v2/ticker/?limit=10`, {
        method: 'GET',
        // headers: {
        //     Authorization: `Bearer ${authToken}`
        // }
    })
        //.then(res => normalizeResponseErrors(res))
        .then(res => {
            anyData = res.json();
        })
        .then(() => {
            //data is the data from ALL coins
            //entry is the user coins
            console.log(anyData, '[ getData ]');
            dispatch(/*some other action on success*/);
        })
        .catch(err => {
            alert('Hey');
            //dispatch(/*an alert action*/);
        });
        
};