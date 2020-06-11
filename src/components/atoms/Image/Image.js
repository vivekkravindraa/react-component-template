import React from 'react';

export const Image = props => {
  const { type, ...restProps } = props;
  return props.src ? <img {...restProps} alt='' /> : null;
};

export default Image;
