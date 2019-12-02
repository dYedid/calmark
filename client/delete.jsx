import React from 'react';

class Delete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log(event.target.value);
  }

  handleSubmit(event) {
    console.log('Serial number to be deleted: ' + this.state.value);
    event.preventDefault();
    console.log('handleSubmit:', this.state.value);
    const url = '/dbq/delete/' + this.state.value;
    // const url = '/test/';
    console.log(url);
    fetch(url, { method: 'delete' })
      .then((response) => response.json())
      .then((data) => {
        console.log('DATA', data);
        this.props.sc({ output: `${data} \n DELETED: ${this.state.value}` });
      }).catch((error) => console.log('ERR in fetch handleSubmit DELETE:', error));
  }

  render() {
    return (
      <div id="delete">
        <p><strong>Delete Trademark</strong></p>
        <form id="search-form" onSubmit={this.handleSubmit}>
          <label htmlFor="search-field">Enter Serial Number:</label>
          <input id="search-field" type="text" placeholder="Enter serial number..." onChange={this.handleChange} />
          <br />
          <button type="submit" id="search-button">Delete</button>
        </form>
      </div>
    )
  };
}

export default Delete;
