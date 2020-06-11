import React from 'react';
import DualListBox from 'react-dual-listbox';
import 'react-dual-listbox/src/scss/react-dual-listbox.scss';
import './DualListWidget.scss';

class DualListWidget extends React.Component {
  state = {
    selected: this.props.selected
  };

  onChange = selected => {
    this.setState({ selected }, () => {
      this.props.onChange(this.state.selected);
    });
  };

  render() {
    const { options, selected: propSelected, ...restProps } = this.props;
    const { selected } = this.state;

    return <DualListBox {...restProps} options={options} selected={selected} onChange={this.onChange} />;
  }
}

DualListWidget.defaultProps = {
  icons: {
    moveLeft: <i className='material-icons'>chevron_left</i>,
    moveAllLeft: [
      <i key={0} className='material-icons'>
        chevron_left
      </i>,
      <i className='material-icons' key={1}>
        chevron_left
      </i>
    ],
    moveRight: <i className='material-icons'>chevron_right</i>,
    moveAllRight: [
      <i key={0} className='material-icons'>
        chevron_right
      </i>,
      <i className='material-icons' key={1}>
        chevron_right
      </i>
    ],
    moveDown: <i className='material-icons'>keyboard_arrow_down</i>,
    moveUp: <i className='material-icons'>keyboard_arrow_up</i>
  }
};

export default DualListWidget;
