import React from 'react';
import PropTypes from 'prop-types';
import './HeaderWithActions.scss';
import Title from '../Title/Title';
import ActionButtons from '../ActionButtons/ActionButtons';

const HeaderWithActions = props => {
  const { title, subtitle, actionButtons, onClick, ...restProps } = props;
  return (
    <header {...restProps}>
      {title ? <Title title={title} subtitle={subtitle} /> : null}
      <div className='action-buttons'>
        {actionButtons ? (
          <ActionButtons actionButtons={actionButtons} onClick={onClick} />
        ) : null}
      </div>
    </header>
  );
};

HeaderWithActions.defaultProps = {
  title: 'Header Text',
  className: 'header'
};

HeaderWithActions.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  className: PropTypes.string
};
export default HeaderWithActions;
