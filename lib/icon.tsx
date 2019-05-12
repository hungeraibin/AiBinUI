import React from 'react';
import './importIcons';
import './icon.scss';

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <svg className="ab-icon"
      {...props}
    >
      <use xlinkHref={`#${props.name}`}></use>
    </svg>
  )
}

export default Icon;