import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import viewAllQuestions from '../actions/questionsActions';
import Questions from '../components/Questions/questions';

export class ViewallQtns extends Component {
  componentDidMount() {
    const { viewAllQtns } = this.props;
    viewAllQtns();
  }

  render() {
    const { questions } = this.props;
    return (
      <div className="container">
        {questions.length > 0 ? questions.map(
          (question, index) => <Questions question={question} key={index} />,
        ) : 'Loading Questions ... '}
      </div>
    );
  }
}

ViewallQtns.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.array).isRequired,
  viewAllQtns: PropTypes.func.isRequired,
};

export const mapStateToProps = ({ getQuestionsReducer }) => ({
  questions:
  getQuestionsReducer.qtns,
});
export const mapDispatchToProps = dispatch => ({
  viewAllQtns: () => dispatch(viewAllQuestions),
});
export default connect(mapStateToProps, mapDispatchToProps)(ViewallQtns);
