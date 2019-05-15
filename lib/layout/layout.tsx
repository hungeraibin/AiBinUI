import React from 'react';
import { scopedClassMarker } from '../classes';
import './layout.scss';

interface Props extends React.HTMLAttributes<HTMLElement> {}

const sc = scopedClassMarker('ab-layout');
const Layout: React.FunctionComponent<Props> = (props) => {
  const { className, ...rest } = props;
  return (
    <div className={sc('', {extra: className})} {...rest}>
      {props.children}
    </div>
  );
};

export default Layout;