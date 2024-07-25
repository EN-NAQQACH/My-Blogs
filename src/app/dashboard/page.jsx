"use client";
import React, { useEffect, useRef } from 'react';
import Blogs from './blogs/page';
import { SmileOutlined } from '@ant-design/icons';
import { Button, notification } from 'antd';
import { useSelector } from 'react-redux';

function Page() {
  const user = useSelector((state) => state.user);
  const [api, contextHolder] = notification.useNotification();
  const notificationShown = useRef(false);

  const openNotification = () => {
    api.open({
      message: 'Notification Title',
      description:
        'please update your profile information.',
      icon: (
        <SmileOutlined
          style={{
            color: '#108ee9',
          }}
        />
      ),
    });
  };

  // useEffect(() => {
  //   if (!notificationShown.current) {
  //     const timer = setTimeout(() => {
  //       if(user?.username === null || user?.bio === null || user?.socialLinks?.facebook === null || user?.socialLinks?.instagram === null || user?.socialLinks?.twitter === null){
  //         openNotification();
  //       }
  //       notificationShown.current = true;
  //     }, 3000); 
  //     return () => clearTimeout(timer); 
  //   }
  // }, []);

  return (
    <>
      {contextHolder}
      <Blogs />
    </>
  );
}

export default Page;
