import ajax from 'superagent';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { profile: { gender: 'unknown' }};
	}
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React {this.state.profile.gender}</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
  componentDidMount() {
	  ajax.get('http://localhost:8080/profile')
	  .end((error, response) => {
		  if (!error && response) {
			  this.setState({ profile: response.body });
		  } else {
			  console.log('There was an error fetching from GitHub', error);
		  }
	  }
	      );
  }
}

export default App;
