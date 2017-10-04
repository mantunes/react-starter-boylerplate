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

  login = event => {
    event.preventDefault();
    const email = event.target.childNodes[0].value;
    const pass = event.target.childNodes[1].value;
    console.log("passou aqui");
    this.props.login(email, pass);
  };

  render() {
    const { getPost, clearPost, post } = this.props;

    return (
      <div>
        <p>Login screen</p>
        <form onSubmit={this.login} action="">
          <input type="text" placeholder="email" value="samuthekid@gmail.com" />
          <input type="password" placeholder="password" value="samu123" />
          <button type="submit">Login</button>
        </form>
        <button onClick={getPost}>Get posts</button>
        <button onClick={clearPost}>Clear post</button>
        <hr />
        {post && <p>Title: {post.title}</p>}
      </div>
    );
  }
}

const actions = dispatch => ({
  login: (email, pass) => {
    dispatch(login(email, pass));
    //dispatch(pushRoute('/'));
  },
  getPost: () => dispatch(getPost()),
  clearPost: () => dispatch(clearPost()),
});

export default connect(({ app }) => ({ post: app.post }), actions)(LoginScreen);
