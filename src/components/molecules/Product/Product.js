import React from 'react';
import uuid from 'uuid';

import Drawer from '../Drawer/Drawer';
import TextItem from '../TextItem/TextItem';
import Image from '../../atoms/Image/Image';
import AltImage from '../AltImage/AltImage';
import ZoomImage from '../ZoomImage/ZoomImage';

const Product = props => {
  console.log(props);
  debugger;
  const { items } = props;
  return items.map(item => {
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
  });
};
export default Product;
