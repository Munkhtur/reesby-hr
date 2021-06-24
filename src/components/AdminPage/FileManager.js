import React from 'react';
import { Table, Button, Space, Tag, Input, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const FileManager = () => {
  const props = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange({ file, fileList }) {
      if (file.status !== 'uploading') {
        console.log(file, fileList);
      }
    },
  };
  const columns = [
    {
      title: 'File name',
      dataIndex: 'filename',
      key: 'filename',
    },
    {
      title: 'Link',
      dataIndex: 'link',
      key: 'link',
    },
    {
      title: 'Download',
      dataIndex: 'download',
      key: 'download',
    },
  ];

  const data = [];
  return (
    <>
      <div className='contentHeader'>
        <Upload {...props}>
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
      </div>
      <Table columns={columns} dataSource={data} pagination={false} />
    </>
  );
};

export default FileManager;
