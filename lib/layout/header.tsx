import React from 'react';
import { scopedClassMarker } from '../classes';

const sc = scopedClassMarker('ab-layout');
const Header: React.FunctionComponent = (props) => {
  return (
    <div className={sc('header')}>
      {props.children}
    </div>
  );
};

export default Header;