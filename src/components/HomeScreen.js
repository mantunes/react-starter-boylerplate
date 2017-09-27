import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addName, removeName } from '../redux/modules/app';
import { logout } from '../redux/modules/user';
import Input from './Input';
import List from './List';

class HomeScreen extends React.Component {
  static propTypes = {
    addName: PropTypes.func.isRequired,
    removeName: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    names: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }),
    ),
  };

  addName = event => {
    event.preventDefault();
    const elem = event.target.firstChild;
    this.props.addName(elem.value);
    elem.value = '';
  };

  render() {
    return (
      <div>
        <h3>Redux Example</h3>
        <List names={this.props.names} onRemove={this.props.removeName} />
        <Input onSubmit={this.addName} />
        <button onClick={this.props.logout}>Logout</button>
      </div>
    );
  }
}

export default connect(({ app }) => ({ names: app.list }), {
  addName,
  removeName,
  logout,
})(HomeScreen);
