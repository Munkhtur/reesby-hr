import axiosInstance from './../utils/axiosInstance';
import { setError, clearError } from './errorsAction';

export const signup = (user, history) => async (dispatch) => {
  //   console.log(process.env.REACT_APP_BACKEND_URL);
  try {
    const res = await axiosInstance().post('auth/register', user);
    console.log(res.data);
    history.push('/pending');
    dispatch(clearError());
  } catch (error) {
    console.log(Object.keys(error.response.data));
    if (Object.keys(error.response.data)[0] === 'email') {
      dispatch(setError(error.response.data.email[0]));
    } else if (Object.keys(error.response.data)[0] === 'fullname') {
      dispatch(setError(error.response.data.fullname[0]));
    } else {
      console.log(error);
    }
  }
};
