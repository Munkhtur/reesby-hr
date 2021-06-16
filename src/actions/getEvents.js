import axiosInstance from './../utils/axiosInstance';

export const getEvents = () => async (dispatch) => {
  const res = await axiosInstance().get('events/');
  console.log(res);
  dispatch({
    type: 'GET_EVENTS',
    payload: res.data,
  });
};
