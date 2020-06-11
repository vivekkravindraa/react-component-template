import React from 'react';
import './AltImage.scss';
import clasnames from 'classnames';

export const AltImage = props => {
  const { src, altImageSrc } = props;
  return (
    <div className={clasnames('image-container', { 'alt-image': altImageSrc })}>
      {src ? <img src={src} alt='' className='main-image' /> : null}
      {altImageSrc ? <img src={altImageSrc} alt='' className='alt-image' /> : null}
    </div>
  );
};

export default AltImage;
