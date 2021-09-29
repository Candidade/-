import React, { memo, useState } from 'react';

import { BannerDiv, ListDiv } from './style';

import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from '../router';

import CDheader from '../components/cd-header';
import CDcore from '../components/cd-core';
import CDfooter from '../components/cd-footer';

export default memo(function Index({ setLogin }) {
  const [list, setList] = useState([
    { id: 1, name: '吃饭', done: false },
    { id: 2, name: '睡觉', done: false },
    { id: 3, name: '打豆豆', done: false },
  ]);
  return (
    <HashRouter>
      <BannerDiv>
        <CDheader setLogin={setLogin} />
        {renderRoutes(routes)}
        <CDcore list={list} />
        <CDfooter />
      </BannerDiv>
    </HashRouter>
  );
});
