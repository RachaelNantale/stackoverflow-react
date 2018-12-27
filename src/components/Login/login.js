import React from 'react';
import PropTypes from 'prop-types';
import '../Signup/Signup.scss';

const Login = ({ onSubmit, onChange }) => (
  <div className="container" id="container1">
    <h3 className="text-left">Login</h3>
    <form className="centered-form" onSubmit={onSubmit}>
      <div className="form-group">
        <input type="email" className="form-control" id="email" placeholder="Email" onChange={onChange} />
      </div>
      <div className="form-group">
        <input type="password" className="form-control" id="pwd" placeholder="Password" onChange={onChange} />
      </div>
      <div className="form-group form-check" />
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>

);
Login.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Login;
