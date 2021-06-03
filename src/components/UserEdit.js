import React, { useState } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import userData from './../userDatabase';

const UserEdit = () => {
  const { id } = useParams();
  const history = useHistory();
  const user = userData.filter((user) => user.id === id)[0];

  // console.log(user1)
  // const user = { fullName: '', username: '', approved: false }
  const [details, setDetails] = useState({
    fullName: user.fullName,
    username: user.username,
    department: user.department,
    approved: user.approved,
    workedHours: user.workedHours,
  });

  const handleChange = (e) => {
    setDetails({ ...details, approved: !details.approved });
  };

  const handleSubmit = () => {
    const edited = { ...user, ...details };
    userData.map((el, i) => {
      if (el.id === user.id) {
        userData.splice(i, 1, edited);
      }
    });
    history.push('/admin');
  };

  return (
    <div className='formDiv'>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <input
            type='text'
            name='name'
            placeholder='Full Name'
            value={details.fullName || ''}
            onChange={(e) =>
              setDetails({ ...details, fullName: e.target.value })
            }
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            name='email'
            placeholder='Username'
            value={details.username}
            onChange={(e) =>
              setDetails({ ...details, username: e.target.value })
            }
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            name='department'
            placeholder='Department'
            value={details.department}
            onChange={(e) =>
              setDetails({ ...details, department: e.target.value })
            }
          />
        </div>
        <div className='form-group'>
          <input
            type='number'
            name='totalHours'
            placeholder='Worked Hours'
            value={details.workedHours}
            onChange={(e) =>
              setDetails({ ...details, workedHours: e.target.value })
            }
          />
        </div>
        <input
          type='checkbox'
          id='status'
          name='status'
          value='Approve'
          onChange={handleChange}
          checked={details.approved}
        />
        <label> Approve</label>
        <br></br>

        <div className='form-group submitBtn'>
          <input type='submit' value='Save' />
        </div>
        {/* {errors && <p className="errorMessage">{errors.msg}</p>} */}
      </form>
    </div>
  );
};

export default UserEdit;
