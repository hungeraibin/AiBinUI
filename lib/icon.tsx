import React from 'react';
import './importIcons';
import './icon.scss';

interface IconProps {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <svg className="ab-icon">
      <use xlinkHref={`#${props.name}`}></use>
    </svg>
  )
}

export default Icon;