import React, { Component } from 'react';
import { render } from 'react-dom';
import Input from './input.jsx';
import Search from './search.jsx';
import Output from './output.jsx';
import Delete from './delete.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      output: 'RESULTS',
    };
    this.stateChanger = this.stateChanger.bind(this);

  };

  //   this.handleSubmit = this.handleSubmit.bind(this);
  //   this.handleInputSubmit = this.handleInputSubmit.bind(this);
  // }

  // handleSubmit(event, connected, serial, value) {
  //   alert('A form was submitted: ' + this.state[connected][serial]);
  //   this.state[connected][serial] = value
  //   // event.preventDefault();
  // };

  // handleInputSubmit(event, serial, date) {
  //   alert('A form was submitted: ' + this.state[connected][serial]);
  //   this.state.input.serial = serial;
  //   this.state.input.regDate = date;
  //   // event.preventDefault();
  // };

  // componentDidMount () {
  //   fetch(post, http://localhost:3000)
  // }
  stateChanger(newState) {
    this.setState(newState);
    return console.log('state updated');
  }

  render() {
    return (
      <div id="body">
        <h3>
          Trademark Management
        </h3>
        <div id="top-box">
          <Search sc={this.stateChanger} />
          <Input sc={this.stateChanger} />
          <Delete sc={this.stateChanger} />
        </div>
        <Output info={this.state.output} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

module.hot.accept();

// search instance:
// value={this.state.search.serialNum}
//           handleSubmit={this.handleSubmit}

// input:
// value={this.state.input.serialNum} date={this.state.input.regDate} 
// handleInputSubmit={this.handleInputSubmit}

// delete: 
// value={this.state.delete.serialNum}
//           handleSubmit={this.handleSubmit}


