import React from 'react';
import PropTypes from 'prop-types';
import './questions.scss';

const Questions = ({ question }) => (
  <div className="container">
    <div className="text-section">
      <div>
        <h4>
          {question.title}
        </h4>
        <hr />
        <div>
          {question.Time}
        </div>
        <div>
          {question.By}
        </div>
      </div>
    </div>
    <hr />
  </div>
);
Questions.propTypes = {
  question: PropTypes.shape({}),
};
Questions.defaultProps = {
  question: [],
};
export default Questions;
