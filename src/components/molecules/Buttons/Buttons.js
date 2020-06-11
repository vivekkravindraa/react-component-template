import React, { useState } from 'react';
import Button from '../../atoms/Button/Button';
import './Buttons.scss';
const Buttons = props => {
  const [activeIndex, updateActiveIndex] = useState(0);

  const { buttons = [], onAction } = props;
  const onClick = event => {
    const { dataset } = event.target;
    updateActiveIndex(+dataset.key);
    if (onAction) {
      onAction(event);
    }
  };

  return buttons.map((button, index) => {
    return <Button {...button} active={index === activeIndex} data-key={index} onClick={onClick} key={index}></Button>;
  });
};

export default Buttons;
