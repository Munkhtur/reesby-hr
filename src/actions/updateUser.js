import axiosInstance from './../utils/axiosInstance';

export const updateUser = (user) => async (dispatch) => {
  try {
    const res = await axiosInstance().post('auth/update', user);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
