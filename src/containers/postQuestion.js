import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getQuestionInput } from '../actions/actionCreators';
import Question from '../components/Question/question';
import postQuestion from '../actions/postqtnAction';

export class QuestionPage extends Component {
  handleUpdateFields = (event) => {
    const { name, value } = event.target;
    const { freshQtn, getQuestionInputs } = this.props;
    getQuestionInputs({ ...freshQtn, [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { freshQtn, postQuestion } = this.props;
    postQuestion(freshQtn);
  };


  render() {
    return (
      <Question
        onChange={this.handleUpdateFields}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

QuestionPage.propTypes = {
  postQuestion: PropTypes.func,
  getQuestionInputs: PropTypes.func,
  freshQtn: PropTypes.shape({}),
};
QuestionPage.defaultProps = {
  postQuestion: () => {},
  getQuestionInputs: () => {},
  freshQtn: {},
};

const mapStateToProps = ({ postQtnReducer }) => (
  { freshQtn: postQtnReducer.Question }
);

export const mapDispatchToProps = dispatch => (
  {
    postQuestion: qtn => dispatch(postQuestion(qtn)),
    getQuestionInputs: obj => dispatch(getQuestionInput(obj)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(QuestionPage);
