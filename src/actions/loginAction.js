import swal from 'sweetalert2';
import ACTION_TYPE from './actionTypes';

const userLogin = user => (dispatch) => {
  swal.showLoading();
  return fetch('https://stackoverflow-lite222.herokuapp.com/api/v1/auth/login',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json, */*',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
    .then(response => response.json()
      .then(data => ((response.ok && Promise.resolve(data)) || (!response.ok && Promise.reject(data)
      ))))
    .then((data) => {
      dispatch({
        type: ACTION_TYPE.USER_LOGIN_SUCCESS,
        payload: data,
      });
      localStorage.setItem('token', data.token);
      swal({
        title: 'Login Successful',
        type: 'success',
        confirmButtonText: 'continue',
      });
      setTimeout(() => window.location.replace('/'), 3000);
    })
    .catch((error) => {
      dispatch({
        type: ACTION_TYPE.USER_LOGIN_FAIL,
        payload: error,
      });
      swal({
        title: 'Sorry, couldnt login',
        type: 'error',
        confirmButtonText: 'Try again',
        text: error.message,
      });
    });
};
export default userLogin;
