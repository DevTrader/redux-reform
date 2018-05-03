//Component One Represents UNUM's Signup and Login Pages
//Objective: Dispatch an action that will update state asynchronously from actions manager || Launch a NotificationSystem message from actions manager

/* To Do:
-Implement fetch to any public api (https://api.coinmarketcap.com/v2/ticker/?limit=10)
-Once you click another button, modify the baseURL to introduce an error
-Have catch error inside action manager initiate an alert

*/

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { btnTextChange, getData } from '../Actions/actionsOfOne';

class ComponentOne extends Component {
  
    render() {
      return (
        <div className="ComponentOne">
          <h1>Component One : Dispatch Action With Asynch Redux</h1>
          <h2>{this.props.textDisplay}</h2>
          <button onClick = {this.props.btnClick} style={{padding: '10px 20px', marginLeft: '5px'}}>{this.props.btnText}</button>
          <button onClick = {this.props.getData} style={{padding: '10px 20px', marginLeft: '5px'}}>Get Data</button>
        </div>
      );
    }
}

const mapStateToProps = state => {
    //console.log('[mapStateToProps]', state);
    return {
      textDisplay: state.reducerOfOne.textDisplay,
      error: state.reducerOfOne.error,
      btnText: state.reducerOfOne.btnText
    };
}
  
const mapDispatchToProps = dispatch => {
    return{
       btnClick: () => dispatch(btnTextChange()),
       getData: () => dispatch(getData())
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(ComponentOne);