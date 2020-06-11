import React, { Component } from 'react';
import uuid from 'uuid';
import { renderItem } from '../../renderers/itemRenderer';
import './Carousel.scss';
class Carousel extends Component {
  constructor(props) {
    super(props);
    this.itemsRef = React.createRef();
    this.state = {
      itemWidth: 300,
      sliderLeftMargin: 0,
      scrollWidth: 0
    };
  }

  componentDidMount() {
    const { itemsToShow, items, spaceBetweenItems = 20 } = this.props;
    const { offsetWidth } = this.itemsRef.current;
    const itemWidth = offsetWidth / itemsToShow - spaceBetweenItems;
    this.setState({
      itemWidth,
      scrollWidth: items.length * itemWidth
    });
  }

  slide = event => {
    const { dataset } = event.target;
    const { move } = dataset;
    const { itemsToShow, spaceBetweenItems = 20 } = this.props;
    const { sliderLeftMargin, itemWidth, scrollWidth } = this.state;
    const visibleItemsWidth = itemsToShow * (itemWidth + spaceBetweenItems);
    switch (move) {
      case 'right':
        if (scrollWidth - visibleItemsWidth > 0) {
          this.setState({
            sliderLeftMargin: sliderLeftMargin + visibleItemsWidth,
            scrollWidth: scrollWidth - visibleItemsWidth
          });
        }
        break;
      case 'left':
        if (sliderLeftMargin) {
          this.setState({
            sliderLeftMargin: sliderLeftMargin - visibleItemsWidth,
            scrollWidth: scrollWidth + visibleItemsWidth
          });
        }
        break;
      // no default
    }
  };

  render() {
    const { items, style = {}, spaceBetweenItems } = this.props;
    const { itemWidth, sliderLeftMargin } = this.state;
    return (
      <div className='row no-gutters'>
        <div className='col-sm-12'>
          <div className='slider' style={style}>
            <div className='arrow left' data-move='left' onClick={this.slide}></div>
            <ul ref={this.itemsRef} style={{ marginLeft: -sliderLeftMargin }}>
              {items.map((item, i) => (
                <li key={uuid.v4()} style={{ width: `${itemWidth}px`, margin: `0 ${spaceBetweenItems / 2}px` }}>
                  {renderItem(item)}
                </li>
              ))}
            </ul>
            <div className='arrow right' data-move='right' onClick={this.slide}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
