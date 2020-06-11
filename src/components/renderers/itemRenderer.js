import React from 'react';
import uuid from 'uuid';
import Drawer from '../molecules/Drawer/Drawer';
import TextItem from '../molecules/TextItem/TextItem';
import Image from '../atoms/Image/Image';
import AltImage from '../molecules/AltImage/AltImage';
import ZoomImage from '../molecules/ZoomImage/ZoomImage';

export const itemsRenderer = (itemsToRender = []) => {
  return itemsToRender.map(item => getItem(item));
};

export const renderItem = item => getItem(item);

const getItem = item => {
  let component = null;
  switch (item.type) {
    case 'image':
      component = <Image {...item} key={uuid.v4()} />;
      break;
    case 'altImage':
      component = <AltImage {...item} key={uuid.v4()} />;
      break;
    case 'zoomImage':
      component = <ZoomImage {...item} key={uuid.v4()} />;
      break;
    case 'text':
      component = <TextItem {...item} key={uuid.v4()} />;
      break;
    case 'drawer':
      component = <Drawer {...item} key={uuid.v4()} />;
      break;
    // no default
  }
  return component;
};
