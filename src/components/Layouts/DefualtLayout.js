import React from 'react';

const DefualtLayout = ({ children }) => {
  return (
    <>
      <div className='topBar'> Reesby HR</div>
      <div className='main'>{children}</div>
    </>
  );
};

export default DefualtLayout;
