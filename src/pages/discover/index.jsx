import React, { memo } from 'react';

import { Link } from 'react-router-dom';
import { Div } from './style';

import { renderRoutes } from 'react-router-config';
import routes from '../../router';

import { dicoverMenu } from '../../common/local-data';

export default memo(function Index({ route }) {
  return (
    <>
      <Div>
        {dicoverMenu.map((item) => (
          <Link key={item.title} to={item.link}>
            {item.title}
          </Link>
        ))}
      </Div>
      {renderRoutes(route.routes)}
    </>
  );
});
