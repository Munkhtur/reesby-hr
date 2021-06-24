import axiosInstance from './../utils/axiosInstance';

export const postAttendance = () => async (dispatch) => {
  const res = await axiosInstance().post('attendance/');
  console.log(res);
  dispatch({
    type: 'POST_ATTENDANCE',
    payload: res.data,
  });
};
