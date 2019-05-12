import React from 'react';
import './icons/wechat.svg';
import './icons/alipay.svg';

interface IconProps {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <svg>
      <use xlinkHref={`#${props.name}`}></use>
    </svg>
  )
}

export default Icon;