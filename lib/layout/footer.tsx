import React from 'react';
import { scopedClassMarker } from '../classes';

const sc = scopedClassMarker('ab-layout');
const Footer: React.FunctionComponent = (props) => {
  return (
    <div className={sc('footer')}>
      {props.children}
    </div>
  );
};

export default Footer;