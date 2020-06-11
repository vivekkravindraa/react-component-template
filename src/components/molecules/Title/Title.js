import React from 'react';
import PropTypes from 'prop-types';

export const Title = props => {
  const { title, subtitle } = props;
  return (
    <>
      {title && <h5>{title}</h5>}
      {subtitle && <p>{subtitle}</p>}
    </>
  );
};

Title.defaultProps = {
  title: 'Title Text'
};

Title.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

export default Title;
