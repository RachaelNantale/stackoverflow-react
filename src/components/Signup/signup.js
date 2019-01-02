import React from 'react';
import PropTypes from 'prop-types';
import './Signup.scss';

const Signup = ({ onSubmit, onChange, title }) => (
  <div className=" signup-container">
    <form className="centered-form" onSubmit={onSubmit}>
      <h3 className="text-center ">{title}</h3>
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
  title: PropTypes.string.isRequired,
};

export default Signup;
