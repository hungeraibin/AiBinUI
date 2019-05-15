import React, { Fragment, ReactElement, ReactNode, ReactFragment } from 'react';
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

const alert = (content: string) => {
  const onClose = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  }
  const component = 
    <Dialog 
      visible={true} 
      buttons={[<button onClick={onClose}>OK</button>]}
      onClose={onClose}
    >
      {content}
    </Dialog>
  const div = document.createElement('div');
  document.body.append(div);
  ReactDOM.render(component, div);
};

const confirm = (content: string, yes?: ()=>void, no?: ()=>void) => {
  const onYes = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
    yes && yes();
  };
  const onNo = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
    no && no();
  };
  const component = (
    <Dialog visible={true}
            onClose={onNo}
            buttons={[
              <button onClick={onYes}>yes</button>,
              <button onClick={onNo}>no</button>
            ]}>
      {content}
    </Dialog>
  );
  const div = document.createElement('div');
  document.body.append(div);
  ReactDOM.render(component, div); 
};

const modal = (content: ReactNode | ReactFragment) => {
  const onClose = ()=>{
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  }
  const component = <Dialog visible={true} onClose={onClose}>{content}</Dialog>
  const div = document.createElement('div');
  document.body.append(div);
  ReactDOM.render(component, div);
  return onClose;
};

export { alert, confirm, modal };

export default Dialog;