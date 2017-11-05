import React, { Component } from 'react';
// import logo from './logo.svg';
import marked from 'marked';
// import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import ReactHtmlParser from 'react-html-parser';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    //local variables
    this.poop = marked('This *is* ~~text~~ `encoded` in __markdown__.'); //returns an html encoded string
    //set the state
    // this.state = {
    // };
  }

  // componentDidMount(){
  //   console.log(  );
  // }

  render() {
    return (
      <div className="App">

        { ReactHtmlParser(this.poop) }

      </div>
    );
  }
}

export default App;
