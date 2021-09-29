import React, { memo } from 'react';

import { Form, Input, Button } from 'antd';

export default memo(function CDindex({ setLogin }) {
  const isLogin = () => {
    setLogin(true);
  };
  return (
    <Form name="basic" onFinish={isLogin}>
      <Form.Item
        label="账号"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="密码"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          登录
        </Button>
      </Form.Item>
    </Form>
  );
});
