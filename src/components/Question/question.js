import React from 'react';
import PropTypes from 'prop-types';
import './postqtn.scss';

const Question = ({ onSubmit, onChange }) => (
  <div className="container post-container">
    <div className="form-group">
      <form className="form-horizontal" onSubmit={onSubmit}>
        <h5>Title: </h5>
        <input
          type="text"
          className="form-control"
          placeholder="What's your programming question. Be specific"
          id="title"
          name="title"
          onChange={onChange}
        />
        <br />
        <h5>Description: </h5>
        <textarea
          rows="7"
          cols="14"
          id="description"
          name="description"
          className="form-control"
          onChange={onChange}
        />
        <br />
        <h5>Tags: </h5>
        <input
          type="text"
          className="form-control"
          placeholder="Atleast one tag"
          name="tags"
          id="tags"
          onChange={onChange}
        />
        <br />
        <button type="submit" className="btn btn-primary" onClick={onSubmit}>Post Your Question </button>
      </form>
    </div>
  </div>
);
Question.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

Question.defaultProps = {
  onChange: () => { },
  onSubmit: () => { },
};
export default Question;
