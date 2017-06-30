import React, { Component } from 'react';

class StatusForm extends Component {

  render() {
    return (
      <div>
  
        Name: <input type="text"
                      onChange={ (event) => {
                        this.props.handleChange('newName', event.target.value)}
                        }/>
        <br/><br/>
        Status: <input type="text"
                      onChange={ (event) => {
                        this.props.handleChange('newStatus', event.target.value)}
                      }/>            
       <button onClick={ (event) => {this.props.handleSubmit(event)}}>
          Update Me Please!
      </button>
      
      </div>
    );
  }
}

export default StatusForm;

