import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { HeadDiv } from './style';

import { headerLinks } from '../../common/local-data';

export default memo(function Index({ setLogin }) {
  const isLogin = () => {
    setLogin(false);
  };

  return (
    <HeadDiv>
      <div className={'right'}>
        <button onClick={isLogin}>退出</button>
      </div>
      <div className={'left'}>
        {headerLinks.map((item) => (
          <Link to={item.link} key={item.title}>
            {item.title}
          </Link>
        ))}
      </div>
    </HeadDiv>
  );
});
