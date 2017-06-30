import React, { Component } from 'react';

class StatusList extends Component {


  render() {


    const displayStatus = this.props.data.map((status, i) => {
      return (<ul key={i}>
              <li><b>{status.name}</b></li>
              <li>{status.status}</li>
            </ul>)
        })

    return (
      <div>
        {displayStatus}
      </div>
    );
  }
}

export default StatusList;