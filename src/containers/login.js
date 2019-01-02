import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUserInput } from '../actions/actionCreators';
import userLogin from '../actions/loginAction';
import Signup from '../components/Signup/signup';
import './auth.scss';
import '../components/Home/home.scss';


export class LoginPage extends Component {
  handleUpdateFields = (event) => {
    const { name, value } = event.target;
    const { freshUser, getUserInputs } = this.props;
    getUserInputs({ ...freshUser, [name]: value });
  };

  handleLogin = (event) => {
    event.preventDefault();
    const { freshUser, loginUser } = this.props;
    loginUser(freshUser);
  };

  render() {
    return (
      <Signup
        onChange={this.handleUpdateFields}
        onSubmit={this.handleLogin}
        title="Login"
      />
    );
  }
}

LoginPage.propTypes = {
  loginUser: PropTypes.func,
  getUserInputs: PropTypes.func,
  freshUser: PropTypes.shape({}),
};
LoginPage.defaultProps = {
  loginUser: () => {},
  getUserInputs: () => {},
  freshUser: {},
};

const mapStateToProps = ({ loginReducer }) => (
  { freshUser: loginReducer.freshUser }
);

export const mapDispatchToProps = dispatch => (
  {
    loginUser: user => dispatch(userLogin(user)),
    getUserInputs: obj => dispatch(getUserInput(obj)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
