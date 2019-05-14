import React, { useState } from 'react';
import Dialog from './dialog';

export default function() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button onClick={() => setVisible(!visible)}>CLICK</button>
      <Dialog visible={visible}>
        <strong>hello world</strong>
      </Dialog>
    </div>
  );
};
