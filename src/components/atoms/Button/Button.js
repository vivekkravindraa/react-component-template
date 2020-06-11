import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';
import classnames from 'classnames';

export const Button = props => {
  const {
    text,
    active,
    className,
    onClick,
    items,
    theme,
    icon,
    ...restProps
  } = props;
  return (
    <button
      className={classnames(
        { [`${className}`]: !theme },
        { [`btn btn-${theme}`]: theme },
        { active: active }
      )}
      {...restProps}
      onClick={onClick}
    >
      {text ? <span>{text}</span> : null}
      {icon ? <i className='material-icons'>{icon}</i> : null}
    </button>
  );
};

Button.defaultProps = {
  className: 'btn btn--default btn--outline',
  onClick: () => {}
};

Button.propTypes = {
  text: PropTypes.string,
  theme: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
    'link'
  ])
};

export default Button;
