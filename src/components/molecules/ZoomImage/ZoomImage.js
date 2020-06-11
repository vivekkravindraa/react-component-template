import React from 'react';
import './ZoomImage.scss';
export const ZoomImage = props => {
  const { src } = props;
  return (
    <div className='image-container zoom-image'>
      {src ? <img src={src} alt='' className='main-image' /> : null}
      {src ? <img src={src} alt='' className='zoom-image' /> : null}
    </div>
  );
};

export default ZoomImage;
