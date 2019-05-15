import React from 'react';
import { scopedClassMarker } from '../classes';

interface Props extends React.HTMLAttributes<HTMLElement> {}

const sc = scopedClassMarker('ab-layout');
const Content: React.FunctionComponent<Props> = (props) => {
  const { className, ...rest } = props;
  return (
    <div className={sc('content', {extra: className})} {...rest}>
      {props.children}
    </div>
  );
};

export default Content;