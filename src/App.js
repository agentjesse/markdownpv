import React, { Component } from 'react';
import marked from 'marked';
import ReactHtmlParser from 'react-html-parser';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    //set the state
    this.state = {
      textAreaValue: 'This *is* ~~text~~ `encoded` in __markdown__.\n## Edit markdown for live preview',
      reactElement: undefined
    };
  }

  //initial page load: read value from textarea and then trigger conversion
  componentDidMount(){ this.startConvert( document.querySelector("textarea").value ); }
  
  startConvert(mdString){
    // console.log( ReactHtmlParser( marked(mdString) ) );
    this.setState({
      textAreaValue: mdString,
      reactElement: ReactHtmlParser( marked(mdString) )
    });
  }

  render() {
    return (
      <div className="App">

        <textarea 
          onInput={()=>{ 
            this.startConvert( document.querySelector("textarea").value );
          }}
        >{this.state.textAreaValue}</textarea>

        <div className='parsedText'>{this.state.reactElement}</div>

      </div>
    );
  }
}

export default App;
