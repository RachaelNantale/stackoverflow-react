import swal from 'sweetalert2';
import ACTION_TYPE from './actionTypes';

const userLogin = data => (dispatch) => {
  swal.showLoading();
  return fetch('http://127.0.0.1:5000/api/v1/auth/login',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json, */*',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => (response.json())
      .then(data => ((response.ok && Promise.resolve(data)) || (!response.ok && Promise.reject(data)
      ))))
    .then((data) => {
      dispatch({
        type: ACTION_TYPE.USER_LOGIN,
        payload: data,
      });
      localStorage.setItem('token', data);
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
