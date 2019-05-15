import React from 'react';
import { scopedClassMarker } from '../classes';

const sc = scopedClassMarker('ab-layout');
const Aside: React.FunctionComponent = (props) => {
  return (
    <div className={sc('aside')}>
      {props.children}
    </div>
  );
};

export default Aside;