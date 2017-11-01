import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import User from './User';
import request from 'superagent';

class App extends Component {

  componentWillMount = () => {
    request
      .get('https://randomuser.me/api/?results=50')
      .then(data => {
        this.setState({
          users: data.body.results
        })
      })
  }

  constructor() {
    super();

    this.state = {
      users: []
    }
  }

  render() {
    const styles = {
      backgroundColor: 'salmon',
      padding: '50px'
    }
    if (this.state.users.length > 0) {
      let displayedItem = this.state.users.map(item => <User name={item.email} />);

      return <div>{displayedItem}</div>
    } else {
      return <p style={styles}>Loading users...</p>
    }
  }
}

export default App;
