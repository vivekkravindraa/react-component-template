import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import classnames from 'classnames';
import Buttons from '../../molecules/Buttons/Buttons';
import Title from '../../molecules/Title/Title';

const Header = props => {
  const { type, title, subtitle, buttons, className, onAction, style, align } = props;
  return (
    <header className={classnames(className, `header--${align}`)} onClick={onAction} style={style}>
      {type === 'text' ? <Title title={title} subtitle={subtitle}></Title> : <Buttons buttons={buttons}></Buttons>}
    </header>
  );
};

Header.defaultProps = {
  type: 'text',
  text: 'Header Text',
  className: 'header',
  onAction: () => {}
};

Header.propTypes = {
  type: PropTypes.string,
  classNames: PropTypes.arrayOf(PropTypes.string),
  text: PropTypes.string,
  onAction: PropTypes.func
};
export default Header;
