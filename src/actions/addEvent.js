import axiosInstance from './../utils/axiosInstance';

export const addEvent = (event) => async (dispatch) => {
  const res = await axiosInstance().post('events/', event);
  dispatch({
    type: 'ADD_EVENT',
    payload: res.data,
  });
};
