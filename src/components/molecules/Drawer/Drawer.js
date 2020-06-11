import React from 'react';
import './Drawer.scss';
export const DrawerContent = props => {
  const { heading, paragraph, footerNote, style } = props;
  return (
    <div className='drawer'>
      <div className='drawer-content' style={style}>
        {heading ? <h2>{heading}</h2> : null}
        {paragraph ? <p>{paragraph}</p> : null}
        {footerNote ? <span className='font-size-1'>{footerNote}</span> : null}
      </div>
    </div>
  );
};

export const Drawer = props => {
  const { src, drawer } = props;
  return (
    <div className='drawer-container'>
      {src ? <img src={src} alt='' /> : null}
      <DrawerContent {...drawer} />
    </div>
  );
};

export default Drawer;
