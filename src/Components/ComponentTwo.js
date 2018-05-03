import React, { Component } from 'react';
import { connect } from 'react-redux';

//import {  } from '../Actions/actionsOfTwo';

import ComponentTwoChild from './ComponentTwoChild';

class ComponentTwo extends Component {
  
    render() {
      return (
        <div className="ComponentTwo">
          <h1>Component Two</h1>
          <ComponentTwoChild />
        </div>
      );
    }
}

const mapStateToProps = state => {
    //console.log('[mapStateToProps]', state);
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(ComponentTwo);