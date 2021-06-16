import { updateUser } from './updateUser';
export const logout = (total, user) => (dispatch) => {
  const obj = { total_hours: total };
  const edited = { ...user, ...obj };
  console.log(edited);
  dispatch(updateUser(edited));
  localStorage.removeItem('token');
  dispatch({
    type: 'LOGOUT',
  });
};
