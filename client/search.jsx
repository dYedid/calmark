import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log(event.target.value);
  }

  handleSubmit(event) {
    console.log('A serial number was submitted: ' + this.state.value);
    event.preventDefault();
    console.log('handleSubmit:', this.state.value)
    // const url = '/dbq/get/' + this.state.value;
    const url = '/test/'
    console.log(url);
    fetch(url)
      .then(response => response.json())
      // {
      //   return response.json()
      //   // console.log(response);
      //   // this.props.sc({ output: response });
      // };
      .then(data => {
        console.log(data);
        this.props.sc({ output: data });
      });
  }

  render() {
    return (
      <div id="search">
        <p><strong>Search Trademark Portfolio</strong></p>
        <form id='search-form' onSubmit={this.handleSubmit}>
          <label for="search-field">Enter Serial number:</label>
          <input id="search-field" type="text" placeholder="Enter serial number..." onChange={this.handleChange} ></input>
          <br/>
          <button id='search-button'>Search</button>
        </form>
      </div>
    )
  }
}

export default Search;

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
