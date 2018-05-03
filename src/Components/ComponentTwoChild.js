import React, { Component } from 'react';
import { connect } from 'react-redux';

//import {  } from '../Actions/actionsOfTwoChild';

import LastChild from './LastChild';

class ComponentTwoChild extends Component {
  
    render() {
      return (
        <div className="ComponentTwoChild">
          <h1>Component Two Child</h1>
          <LastChild />
        </div>
      );
    }
}

const mapStateToProps = state => {
    console.log('[mapStateToProps]', state);
    return {
      textDisplay: state.reducerOfOne.textDisplay,
      error: state.reducerOfOne.error,
      initialText: state.reducerOfOne.initialText
    };
  }
  
  const mapDispatchToProps = dispatch => {
    return{
    //   onTextChange: (val) => dispatch(textChange(val)),
    //   buttonClick: () => dispatch(buttonClick()),
    //   asynchTest: (msg) => dispatch(asynchTest(msg))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ComponentTwoChild);