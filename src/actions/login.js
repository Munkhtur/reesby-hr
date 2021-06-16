import axiosInstance from './../utils/axiosInstance';
import { setError, clearError } from './errorsAction';
import { getEvents } from './getEvents';

export const login = (details, history) => async (dispatch) => {
  try {
    const res = await axiosInstance(history).post('auth/login', details);
    console.log(res);
    if (res && res.data.user.is_active) {
      localStorage.token = res.data.token;
      dispatch(getEvents());
    }
    dispatch({
      type: 'LOGIN',
      payload: res.data.user,
    });
    dispatch(clearError());
  } catch (error) {
    console.log(error.response.data);
    dispatch(setError(error.response.data.detail));
  }
};
