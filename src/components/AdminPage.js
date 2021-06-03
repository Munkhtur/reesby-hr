import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import userData from './../userDatabase';
import msToTime from './../utils/msToTime';
import decTime from './../utils/decTime';

const AdminPage = () => {
  const history = useHistory();
  userData.sort(function (x, y) {
    return x.approved === y.approved ? 0 : x.approved ? 1 : -1;
  });

  console.log(userData);
  return (
    <div className='content'>
      <h1>All users</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Status</th>
            <th>Total hours</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.fullName}</td>
              <td>{user.username}</td>
              <td>{user.department}</td>
              <td>{user.approved ? <p>Approved</p> : <p>Needs Approval</p>}</td>
              <td>{user.workedHours}</td>
              <td>
                {' '}
                <button
                  onClick={() => history.push(`/admin/user-edit/${user.id}`)}
                >
                  edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;
