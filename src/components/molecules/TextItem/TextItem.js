import React from 'react';

export const TextItem = props => {
  const { heading, paragraph } = props;
  return (
    <div className='center-text'>
      <div className='content'>
        {heading ? <h2>{heading}</h2> : null}
        {paragraph ? <p>{paragraph}</p> : null}
      </div>
    </div>
  );
};

export default TextItem;
