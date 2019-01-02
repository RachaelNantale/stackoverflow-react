import ACTION_TYPE from './actionTypes';

const viewAllQuestions = dispatch => (
  fetch(' https://stackoverflow-lite222.herokuapp.com/api/v1/questions')
    .then(response => response.json())
    .then(data => (
      dispatch({
        type: ACTION_TYPE.GET_ALL_QUESTIONS,
        payload: data.message,
      })))
    .catch(() => { })
);
export default viewAllQuestions;
