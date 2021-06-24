import axiosInstance from './../utils/axiosInstance';

export const getAttendance = () => async (dispatch) => {
  const res = await axiosInstance().get('attendance/');
  console.log(res.data);
  dispatch({
    type: 'GET_ATTENDANCE',
    payload: res.data,
  });
};

export const getAttendance1 = () => async (dispatch) => {
  const res = await axiosInstance().get(`attendance/${1}/`);
  console.log(res, 'one');
  //   dispatch({
  //     type: 'GET_ATTENDANCE',
  //     payload: res.data,
  //   });
};
