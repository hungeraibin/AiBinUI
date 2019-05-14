import React, { Fragment } from 'react';
import './dialog.scss';
import Icon from '../icon/icon';

interface Props {
  visible: boolean;
}

const Dialog: React.FunctionComponent<Props> = (props) => {
  return (
    props.visible ?
      <Fragment>
        <div className="ab-dialog-mask"></div>
        <div className="ab-dialog">
          <div className="ab-dialog-close">
            <Icon name="close"></Icon>
          </div>
          <header className="ab-dialog-header">
            提示
          </header>
          <main className="ab-dialog-main">
            {props.children}
          </main>
          <footer className="ab-dialog-footer">
            <button>ok</button>
            <button>cancel</button>
          </footer>
        </div>
      </Fragment>
      :
      null
  );
};

export default Dialog;