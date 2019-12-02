import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      regNum: '',
      date: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ regNum: event.target.value });
    console.log(event.target.value);
  }

  handleDateChange(event) {
    console.log(event.target.value);
    this.setState({ date: event.target.value });
  }

  handleSubmit(event) {
    console.log('A serial number was submitted: ' + this.state.regNum + this.state.date);
    event.preventDefault();
    console.log('handleSubmit:', this.state.regNum + '.' + this.state.date)
    const url = '/dbq/new/' + this.state.regNum + '/' + this.state.date;
    console.log(url);
    fetch(url, {
      method: 'post',
    })
      .then((response) => response.json())
      .then((data) => this.props.sc({ output: data }))
      .catch((error) => console.log('ERR in fetch handleSubmit INPUT:', error));
  }

  render() {
    return (
      <div id="input">
        <p><strong>File New Trademark</strong></p>
        <form id="input-form" onSubmit={this.handleSubmit}>
          <label htmlFor="input-field">Enter Serial Number:</label>
          <input id="input-field" type="text" name="serial-number" placeholder="Enter serial number..." onChange={this.handleChange} />
          <br />
          <label htmlFor="reg-date">Enter Registration Date:</label>
          <input type="date" id="reg-date" onChange={this.handleDateChange} />
          <br />
          <button type="submit" id="file-button">File</button>
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
