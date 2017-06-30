import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import StatusForm from './components/StatusForm'
import StatusList from './components/StatusList'

import axios from 'axios'

class App extends Component {

  constructor() {
    super()
    this.state = {
      statuses : [],
      newName: '',
      newStatus: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    axios.get('/api/getstatus')
         .then((response) => {
           console.log(response.data)
          this.setState({
            statuses: response.data
          })
    })
  }

  handleSubmit(event) {

    let newStatus = this.state.statuses.slice()
    newStatus.push(
      { name: this.state.newName, status: this.state.newStatus }
    )

    this.setState({
      statuses: [...this.state.statuses, { name: this.state.newName, status: this.state.newStatus }],
      newName: '',
      newStatus: ''
    })
  }

  handleChange(property, value) {
    this.setState({
      [property] : value
    })
  }



  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Our Awesome Social Media Platform!</h2>
        </div>
          <StatusForm handleSubmit={this.handleSubmit}
                      handleChange={this.handleChange}/>
          <StatusList data={this.state.statuses} />
      </div>
    );
  }
}

export default App;
