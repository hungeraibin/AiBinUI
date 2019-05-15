import React from 'react';
import { scopedClassMarker } from '../classes';

const sc = scopedClassMarker('ab-layout');
const Content: React.FunctionComponent = (props) => {
  return (
    <div className={sc('content')}>
      {props.children}
    </div>
  );
};

export default Content;