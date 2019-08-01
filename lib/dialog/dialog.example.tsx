import React, { useState } from 'react';
import Dialog, { alert, confirm, modal } from './dialog';
import Button from '../button/button';
import './dialog.example.scss';

export default function() {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const openModal = () => {
    const close = modal(
      <div>
        <p>Modal Content</p>
        <Button onClick={() => close()}>Close</Button>
      </div>
    );
  }
  return (
    <div>
      <div>
        <Button onClick={() => setVisible(!visible)}>Dialog1</Button>
        <Dialog visible={visible} buttons={
          [
            <Button onClick={() => setVisible(false)}>yes</Button>,
            <Button onClick={() => setVisible(false)}>no</Button>
          ]
        } onClose={() => setVisible(false)}>
          <strong>hello world</strong>
        </Dialog>
      </div>

      <div>
        <Button onClick={() => setVisible2(!visible2)}>Dialog2</Button>
        <Dialog visible={visible2} closeOnClickMask={true} buttons={
          [
            <Button onClick={() => setVisible2(false)}>yes</Button>,
            <Button onClick={() => setVisible2(false)}>no</Button>
          ]
        } onClose={() => setVisible2(false)}>
          <strong>hello world</strong>
        </Dialog>
      </div>

      <div>
        <Button onClick={() => alert('Alert Content')}>Alert</Button>
        <Button onClick={() => confirm('Confirm Content', () => {
          console.log('yes')
        }, () => {
          console.log('no')
        })}>Confirm</Button>
      </div>

      <div>
        <Button onClick={openModal}>Modal</Button>
      </div>

    </div>
  );
};
