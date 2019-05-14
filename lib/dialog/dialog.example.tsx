import React, { useState } from 'react';
import Dialog from './dialog';

export default function() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button onClick={() => setVisible(!visible)}>CLICK</button>
      <Dialog visible={visible} buttons={
        [
          <button onClick={() => setVisible(false)}>yes</button>,
          <button onClick={() => setVisible(false)}>no</button>
        ]
      } onClose={() => setVisible(false)}>
        <strong>hello world</strong>
      </Dialog>
    </div>
  );
};
