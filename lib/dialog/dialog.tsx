import React, { Fragment, ReactElement, ReactNode } from 'react';
import ReactDOM from 'react-dom'; 
import './dialog.scss';
import { Icon } from '../index';
import { scopedClassMarker } from '../classes';

interface Props {
  visible: boolean;
  buttons?: Array<ReactElement>;
  onClose: React.MouseEventHandler;
  closeOnClickMask?: boolean;
}

const scopedClass = scopedClassMarker('ab-dialog');
const sc = scopedClass;

const Dialog: React.FunctionComponent<Props> = (props) => {
  const onClickClose: React.MouseEventHandler = (e) => {
    props.onClose(e);
  }
  const onClickMask: React.MouseEventHandler = (e) => {
    if (props.closeOnClickMask) {
      props.onClose(e);
    }
  }
  const component = props.visible ?
      <Fragment>
        <div className={sc('mask')} onClick={onClickMask}></div>
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
          {
            props.buttons && props.buttons.length > 0 && 
            <footer className={sc('footer')}>
              {props.buttons.map((button, index) => 
                React.cloneElement(button, {key: index})
              )}
            </footer>
          }

        </div>
      </Fragment>
      :
      null
  return (
    ReactDOM.createPortal(component, document.body)
  );
};

Dialog.defaultProps = {
  closeOnClickMask: false,
}

const modal = (content: ReactNode, buttons?: Array<ReactElement>, aferClose?: () => void) => {
  const onClose = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  }
  const component = 
    <Dialog 
      visible={true} 
      buttons={buttons}
      onClose={() => {
        onClose();
        aferClose && aferClose();
      }}>
      {content}
    </Dialog>
  const div = document.createElement('div');
  document.body.append(div);
  ReactDOM.render(component, div);
  return onClose;
}

const alert = (content: string) => {
  const button = [<button onClick={() => close}>OK</button>]
  const close = modal(content, button);
};

const confirm = (content: string, yes?: ()=>void, no?: ()=>void) => {
  const onYes = () => {
    close();
    yes && yes();
  };
  const onNo = () => {
    close();
    no && no();
  };
  const buttons =  [
    <button onClick={onYes}>yes</button>,
    <button onClick={onNo}>no</button>
  ]
  const close = modal(content, buttons, no);
};

export { alert, confirm, modal };

export default Dialog;