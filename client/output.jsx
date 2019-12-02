import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.unpack = this.unpack.bind(this);
  }

  unpack() {
    const array = [];
    if (typeof this.props.info.output === 'string') {
      return this.props.info.output;
    } 
    const {
      serial_number, 
      registration_day, registration_month, registration_year,
      maintenance_year, next_renewal_year, second_renewal
    } = this.props.info.output;
    // const regDate = new Date(registration_year, registration_month, registration_day)
    array.push(<div key="1">{`Serial Number: ${serial_number}`}</div>);
    array.push(<div key="2">{`Registation Date: ${registration_month}-${registration_day}-${registration_year}`}</div>);
    array.push(<div key="3">{`Maintenance Filings Due: ${registration_month}-${registration_day}-${maintenance_year}`}</div>);
    array.push(<div key="4">{`Next Renewal Due: ${registration_month}-${registration_day}-${next_renewal_year}`}</div>);
    array.push(<div key="5">{`Second Renewal Due: ${registration_month}-${registration_day}-${second_renewal}`}</div>);
    return array;
  }

  render() {
    return (
      <div id="results-box">{this.unpack()}</div>
    );
  }
}

export default Input;
