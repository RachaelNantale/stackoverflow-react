import swal from 'sweetalert2';
import ACTION_TYPE from './actionTypes';

const postQuestion = qtn => (dispatch) => {
  swal.showLoading();

  const token = localStorage.getItem('token');
  return fetch('https://stackoverflow-lite222.herokuapp.com/api/v1/questions',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json, */*',
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(qtn),
    })
    .then(response => (response.json())
      .then(data => ((response.ok && Promise.resolve(data)) || (!response.ok && Promise.reject(data)
      ))))
    .then((data) => {
      dispatch({
        type: ACTION_TYPE.POST_A_QUESTION_SUCCESS,
        payload: data,
      });
      swal({
        title: 'Successfully posted a Question',
        type: 'success',
        confirmButtonText: 'continue',
      });
      setTimeout(() => window.location.replace('/'), 3000);
    })
    .catch((error) => {
      dispatch({
        type: ACTION_TYPE.POST_A_QUESTION_FAILURE,
        payload: error,
      });
      swal({
        title: 'Sorry, couldnt create question',
        type: 'error',
        confirmButtonText: 'Try again',
        text: error.message,
      });
    });
};
export default postQuestion;
