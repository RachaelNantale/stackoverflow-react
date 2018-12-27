import React from 'react';
import PropTypes from 'prop-types';
import './Signup.scss';

const Signup = ({ onSubmit, onChange }) => (
  <div className="container" id="container1">
    <h3 className="text-left">Sign up</h3>
    <form className="centered-form" onSubmit={onSubmit}>
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          placeholder="Email"
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          name="password"
          onChange={onChange}
        />
      </div>
      <button type="submit" className="btn btn-primary" onClick={onSubmit}>Submit</button>
    </form>
  </div>

);
Signup.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Signup;
