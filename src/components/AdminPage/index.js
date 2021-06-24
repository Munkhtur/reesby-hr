import React, { useState } from 'react';
import ApprovalList from './ApprovalList';
import EmployeeList from './EmployeeList';
import Attendance from './Attendance';
import FileManager from './FileManager';
import SwitchComponents from './SwitchComponents';
import { Button, Tooltip } from 'antd';
import {
  AuditOutlined,
  ContactsOutlined,
  ScheduleFilled,
  FolderOpenOutlined,
} from '@ant-design/icons';
import './admin.css';

export default () => {
  const [state, setState] = useState('Attendance Report');

  return (
    <div className='adminPage'>
      <div className='adminSide'>
        <div className='logo'>
          <div className='nav-link'>
            <span className='link-text logo-text'>Reesby</span>
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fad'
              data-icon='angle-double-right'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 448 512'
              className='svg-inline--fa fa-angle-double-right fa-w-14 fa-5x'
            >
              <g className='fa-group'>
                <path
                  fill='currentColor'
                  d='M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z'
                  className='fa-secondary'
                ></path>
                <path
                  fill='currentColor'
                  d='M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z'
                  className='fa-primary'
                ></path>
              </g>
            </svg>
          </div>
        </div>
        <div className='nav-items'>
          <Button
            icon={<AuditOutlined />}
            type='link'
            onClick={() => setState('Approvals')}
          >
            <span className='nav-text'>Approvals</span>
          </Button>

          <Button
            icon={<ContactsOutlined />}
            type='link'
            onClick={() => setState('Employee Report')}
          >
            <span className='nav-text'>Employee Report</span>
          </Button>

          <Button
            icon={<ScheduleFilled />}
            type='link'
            onClick={() => setState('Attendance Report')}
          >
            <span className='nav-text'>Attendance Report</span>
          </Button>

          <Button
            icon={<FolderOpenOutlined />}
            type='link'
            onClick={() => setState('File Manager')}
          >
            <span className='nav-text'>File Manager</span>
          </Button>
        </div>
      </div>
      <div className='adminMain'>
        <div className='adminHeader'>
          {' '}
          <div className='contentTitle'>{state}</div>{' '}
        </div>
        <div className='adminFooter'></div>
        <div className='adminContent'>
          <SwitchComponents active={state}>
            <ApprovalList name='Approvals' />
            <EmployeeList name='Employee Report' />
            <Attendance name='Attendance Report' />
            <FileManager name='File Manager' />
          </SwitchComponents>
        </div>
        <div className='footer'>Reesby Technologies</div>
      </div>
    </div>
  );
};
