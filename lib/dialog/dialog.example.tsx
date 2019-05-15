import React, { useState } from 'react';
import Dialog, { alert, confirm, modal } from './dialog';

export default function() {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const openModal = () => {
    const close = modal(
      <div>
        <h1>Modal Content</h1>
        <button onClick={() => close()}>Close</button>
      </div>
    );
  }
  return (
    <div>
      <div>
        <button onClick={() => setVisible(!visible)}>Dialog1</button>
        <Dialog visible={visible} buttons={
          [
            <button onClick={() => setVisible(false)}>yes</button>,
            <button onClick={() => setVisible(false)}>no</button>
          ]
        } onClose={() => setVisible(false)}>
          <strong>hello world</strong>
        </Dialog>
      </div>

      <div>
        <button onClick={() => setVisible2(!visible2)}>Dialog2</button>
        <Dialog visible={visible2} closeOnClickMask={true} buttons={
          [
            <button onClick={() => setVisible2(false)}>yes</button>,
            <button onClick={() => setVisible2(false)}>no</button>
          ]
        } onClose={() => setVisible2(false)}>
          <strong>hello world</strong>
        </Dialog>
      </div>

      <div>
        <button onClick={() => alert('Alert Content')}>Alert</button>
        <button onClick={() => confirm('Confirm Content', () => {
          console.log('yes')
        }, () => {
          console.log('no')
        })}>Confirm</button>
      </div>

      <div>
        <button onClick={openModal}>Modal</button>
      </div>      

    </div>
  );
};
