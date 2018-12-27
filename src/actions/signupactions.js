import swal from 'sweetalert2';
import ACTION_TYPE from './actionTypes';

const userSignup = data => (dispatch) => {
  swal.showLoading();
  return fetch('http://127.0.0.1:5000/api/v1/auth/signup',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json, */*',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json()
      .then(data => ((response.ok && Promise.resolve(data)) || (!response.ok && Promise.reject(data)
      ))))
    .then((data) => {
      dispatch({
        type: ACTION_TYPE.USER_REGISTRATION,
        payload: data,
      });
      swal({
        title: 'Resgistration Successful',
        type: 'success',
        confirmButtonText: 'continue',
      });
    })
    .catch((error) => {
      dispatch({
        type: ACTION_TYPE.USER_REGISTER_FAIL,
        payload: error,
      });
      swal({
        title: 'Sorry, couldnt register',
        type: 'error',
        confirmButtonText: 'Try again',
        text: error.message,
      });
    });
};
export default userSignup;
