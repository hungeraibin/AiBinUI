import React, { Fragment, ReactElement } from 'react';
import './dialog.scss';
import { Icon } from '../index';
import { scopedClassMarker } from '../classes';

interface Props {
  visible: boolean;
  buttons: Array<ReactElement>;
  onClose: React.MouseEventHandler;
}

const scopedClass = scopedClassMarker('ab-dialog');
const sc = scopedClass;

const Dialog: React.FunctionComponent<Props> = (props) => {
  const onClickClose: React.MouseEventHandler = (e) => {
    props.onClose(e);
  }
  return (
    props.visible ?
      <Fragment>
        <div className={sc('mask')} onClick={onClickClose}></div>
        <div className={sc('')}>
          <div className={sc('close')} onClick={onClickClose}>
            <Icon name="close"></Icon>
          </div>
          <header className={sc('header')}>
            提示
          </header>
          <main className={sc('main')}>
            {props.children}
          </main>
          <footer className={sc('footer')}>
            {props.buttons.map((button, index) => 
              React.cloneElement(button, {key: index})
            )}
          </footer>
        </div>
      </Fragment>
      :
      null
  );
};

export default Dialog;