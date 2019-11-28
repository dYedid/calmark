import React from 'react';

class Delete extends React.Component {
  render () {
    return (
      <div id="delete">
        <p><strong>Delete Trademark</strong></p>
        <form id='search-form'>
          <label for="search-field">Enter Serial Number:</label>
          <input id="search-field" type="text" placeholder="Enter serial number..."></input>
          <br/>
          <button id='search-button'>Delete</button>
        </form>
    </div>
    )
  }
}

export default Delete;

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
