import React from 'react';
import { scopedClassMarker } from '../helpers/classes';

interface Props extends React.HTMLAttributes<HTMLElement> {}

const sc = scopedClassMarker('ab-layout');
const Aside: React.FunctionComponent<Props> = (props) => {
  const { className, ...rest } = props;
  return (
    <div className={sc('aside', {extra: className})} {...rest}>
      {props.children}
    </div>
  );
};

export default Aside;