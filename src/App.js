import React, { Component } from 'react';
import { connect } from 'react-redux';

import { textChange, asynchTest, buttonClick } from './Actions/actionCreator';

import ComponentOne from './Components/ComponentOne';
import ComponentTwo from './Components/ComponentTwo';

class App extends Component {

  /* Make better dispatching of actions (without using functions) */

  changeText = (e) => {
    this.props.onTextChange(e.target.value);
  }

  test = () => {
    this.props.asynchTest(this.props.error);
  }

  render() {
    return (
      <div className="App">
        {/* <h1>{this.props.textDisplay || this.props.initialText}</h1>
        <input type='text' onChange={this.changeText}></input>
        <p>Asynch Test: Timeout Alert with boolean state update.</p>
        <p>Current Boolean: {this.props.error}</p>
        <button onClick = {() => {this.test()}}>Asynch Test</button> */}
        <ComponentOne />
        <ComponentTwo />
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
    onTextChange: (val) => dispatch(textChange(val)),
    buttonClick: () => dispatch(buttonClick()),
    asynchTest: (msg) => dispatch(asynchTest(msg))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

