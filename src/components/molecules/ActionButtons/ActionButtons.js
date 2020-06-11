import React, { Fragment } from 'react';
import Button from '../../atoms/Button/Button';
export const ActionButtons = props => {
  const { actionButtons = [], onClick } = props;
  const elements = actionButtons.map(button => {
    return <Button {...button} onClick={onClick} key={button.id} />;
  });

  return <Fragment>{elements}</Fragment>;
};

export default ActionButtons;
