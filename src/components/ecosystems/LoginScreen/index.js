import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  pushRoute,
  getPost,
  clearPost,
} from './../../../redux/modules/App/index';
import { login } from './../../../redux/modules/User/index';

class LoginScreen extends React.Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
    post: PropTypes.shape({
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }),
    getPost: PropTypes.func.isRequired,
    clearPost: PropTypes.func.isRequired,
  };

  login = () => {
    this.props.login('nome do user');
  };

  render() {
    const { getPost, clearPost, post } = this.props;

    return (
      <div>
        <p>Login screen</p>
        <button onClick={this.login}>Login</button>
        <button onClick={getPost}>Get posts</button>
        <button onClick={clearPost}>Clear post</button>
        <hr />
        {post && <p>Title: {post.title}</p>}
      </div>
    );
  }
}

const actions = dispatch => ({
  login: name => {
    dispatch(login(name));
    dispatch(pushRoute('/'));
  },
  getPost: () => dispatch(getPost()),
  clearPost: () => dispatch(clearPost()),
});

export default connect(({ app }) => ({ post: app.post }), actions)(LoginScreen);
