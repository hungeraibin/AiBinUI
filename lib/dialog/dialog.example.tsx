import React, { useState } from 'react';
import Dialog from './dialog';

export default function() {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  return (
    <div>
      <div>
        <button onClick={() => setVisible(!visible)}>exmaple1</button>
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
        <button onClick={() => setVisible2(!visible2)}>exmaple2</button>
        <Dialog visible={visible2} closeOnClickMask={true} buttons={
          [
            <button onClick={() => setVisible2(false)}>yes</button>,
            <button onClick={() => setVisible2(false)}>no</button>
          ]
        } onClose={() => setVisible2(false)}>
          <strong>hello world</strong>
        </Dialog>
      </div>      
    </div>
  );
};
