import React, { Component } from 'react';

class User extends Component {

  render() {
    const styles = {
      border: '1px solid red',
      marginBottom: '25px'
    }
    return <p style={styles}>{this.props.name}</p>
  }
}

export default User;
