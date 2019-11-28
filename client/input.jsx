import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      regNum: '',
      date: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(event) {
    this.setState({ value: event.target.regNum });
    console.log(event.target.regNum);
  }

  handleChange(event) {
    this.setState({ value: event.target.date });
    console.log(event.target.date);
  }

  handleSubmit(event) {
    console.log('A serial number was submitted: ' + this.state.regNum + this.state.date);
    event.preventDefault();
    console.log('handleSubmit:', this.state.regNum + '-' + this.state.date)
    const url = '/dbq/new/' + this.state.regNum + '-' + this.state.date;
    console.log(url);
    fetch(url)
      .then(response => response.json())
      .then(data => this.props.sc(data));
  }

  render () {
    return (
      <div id="input">
        <p><strong>File New Trademark</strong></p>
        <form id='input-form' onSubmit={this.handleSubmit}>
          <label for="input-field">Enter Serial Number:</label>
          <input id="input-field" type="text" name="serial-number" placeholder="Enter serial number..." onChange={this.handleChangeS}></input>
          <br/>
          <label for="reg-date">Enter Registration Date:</label>
          <input type="date" id="reg-date" onChange={this.handleChangeD} ></input>
          <br/>
          <button id='file-button'>File</button>
        </form>
      </div>
    )
  }
}

export default Input;

// {
//   search: {
//     serialNum: '',
//   },
//   input: {
//     serialNum: '',
//     // regDate: new Date();
//     regDate: 0,
//   },
//   delete: {
//     serialNum: '',
//   },
// }
