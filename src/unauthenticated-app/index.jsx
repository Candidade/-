import React, { memo, useState, useEffect } from 'react';

import Http from '../sevices/axios';

import { Button, Divider } from 'antd';
import { Container, Header, Box } from './style';

import CDregister from './register';
import CDsign from './sign-in';

export default memo(function CDindex({ setLogin }) {
  const [change, setChange] = useState(false);
  useEffect(() => {
    Http({
      method: 'post',
      url: '/users',
      params: { id: 3 },
      data: { name: 'hh', age: 99 },
    }).then((res) => {
      // console.log(res);
    });
  }, []);
  return (
    <Container>
      <Header />
      <Box>
        {change ? <CDregister /> : <CDsign setLogin={setLogin} />}
        <Divider />
        <Button type={'link'} onClick={() => setChange(!change)}>
          {change ? '已有账号?直接登录' : '没有账号?注册账号'}
        </Button>
      </Box>
    </Container>
  );
});
