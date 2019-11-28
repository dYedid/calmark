import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    // let array = [],
    // for (let entry of Object.entries(this.props.info)) {
    //   array.push(<div id="results-box">entry</div>)
    //   console.log (entry)
    // }

    return (
      <div id="results-box">{this.props.info}</div>
    )
  }
}

export default Input;

// {this.props.info}