import React, { memo } from 'react';
import { ReactComponent as SoftwareLogo } from '../../assets/img/logo.svg';

import { CoreDiv } from './style';

export default memo(function Index({ list }) {
  return (
    <CoreDiv>
      <SoftwareLogo width={'200px'} />
      {list.map((item) => (
        <p key={item.id}>{item.id}</p>
      ))}
    </CoreDiv>
  );
});
