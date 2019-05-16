import React, { ReactElement } from 'react';
import { scopedClassMarker } from '../helpers/classes';
import './layout.scss';
import Aside from './aside';

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: ReactElement | Array<ReactElement>;
}

const sc = scopedClassMarker('ab-layout');
const Layout: React.FunctionComponent<Props> = (props) => {
  const { className, ...rest } = props;
  const children = props.children as Array<ReactElement>
  const hasAside = 'length' in children && 
    children.reduce((result, node) => result || node.type === Aside, false);

  return (
    <div className={sc({'': true, hasAside}, {extra: className})} {...rest}>
      {props.children}
    </div>
  );
};

export default Layout;
export { Layout };
export { default as Header } from './header';
export { default as Footer } from './footer';
export { default as Content } from './content';
export { default as Aside } from './aside';