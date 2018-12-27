import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUserInput } from '../actions/actionCreators';
import userSignup from '../actions/signupactions';
import userLogin from '../actions/loginAction';
import Signup from '../components/Signup/signup';
import Login from '../components/Login/login';
import './auth.scss';


export class AuthPage extends Component {
  handleUpdateFields = (event) => {
    const { name, value } = event.target;
    const { freshUser, getUserInputs } = this.props;
    getUserInputs({ ...freshUser, [name]: value });
  };

  handleSignUp = (event) => {
    event.preventDefault();
    const { freshUser, signUpuser } = this.props;
    signUpuser(freshUser);
  };

  handleLogin = (event) => {
    event.preventDefault();
    const { freshUser, loginUser } = this.props;
    loginUser(freshUser);
  };

  render() {
    return (
      <div className="container auth">
        <Signup
          onChange={this.handleUpdateFields}
          onSubmit={this.handleSignUp}
        />
        <Login
          onChange={this.handleUpdateFields}
          onSubmit={this.handleLogin}
        />
      </div>
    );
  }
}

AuthPage.propTypes = {
  signUpuser: PropTypes.func,
  loginUser: PropTypes.func,
  getUserInputs: PropTypes.func,
  freshUser: PropTypes.shape({}),
};
AuthPage.defaultProps = {
  signUpuser: () => {},
  loginUser: () => {},
  getUserInputs: () => {},
  freshUser: {},
};

const mapStateToProps = ({ userReducer, loginReducer }) => (
  { freshUser: userReducer.freshUser }, // eslint-disable-line 

  { freshUser: loginReducer.freshUser }
);

export const mapDispatchToProps = dispatch => (
  {
    signUpuser: user => dispatch(userSignup(user)),
    loginUser: user => dispatch(userLogin(user)),
    getUserInputs: obj => dispatch(getUserInput(obj)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
