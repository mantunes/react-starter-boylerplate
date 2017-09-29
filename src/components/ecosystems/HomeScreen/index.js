import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addName, removeName } from './../../../redux/modules/App/index';
import { logout } from './../../../redux/modules/User/index';
import Input from './../../molecules/Input/index';
import List from './../../molecules/List/index';

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
    if (elem.value !== '') this.props.addName(elem.value);
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
