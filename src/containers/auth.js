import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUserInput } from '../actions/actionCreators';
import userSignup from '../actions/signupactions';
import Signup from '../components/Signup/signup';
import './auth.scss';
import '../components/Home/home.scss';


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


  render() {
    return (
      <Signup
        onChange={this.handleUpdateFields}
        onSubmit={this.handleSignUp}
        title="Signup"
      />
    );
  }
}

AuthPage.propTypes = {
  signUpuser: PropTypes.func,
  getUserInputs: PropTypes.func,
  freshUser: PropTypes.shape({}),
};
AuthPage.defaultProps = {
  signUpuser: () => {},
  getUserInputs: () => {},
  freshUser: {},
};

const mapStateToProps = ({ userReducer }) => (
  { freshUser: userReducer.freshUser }
);

export const mapDispatchToProps = dispatch => (
  {
    signUpuser: user => dispatch(userSignup(user)),
    getUserInputs: obj => dispatch(getUserInput(obj)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
