import React from 'react';
import HeaderWithActions from '../../molecules/HeaderWithActions/HeaderWithActions';
import ActionButtons from '../ActionButtons/ActionButtons';
import './Form.scss';

const Form = ({ title, actionButtons, fields, onAction, className }) => {
  return (
    <div className={className}>
      <form>
        <HeaderWithActions title={title} actionButtons={actionButtons} onClick={onAction} />
        {fields.map(field => (
          <Element {...field} key={field.id} onAction={onAction} />
        ))}
        <div className='form-bottom'>
          {actionButtons ? <ActionButtons actionButtons={actionButtons} onClick={onAction} /> : null}
        </div>
      </form>
    </div>
  );
};

export default Form;

export const Element = ({ inputType, onAction, ...restProps }) => {
  let element = null;
  switch (inputType) {
    case 'text':
      element = <input {...restProps} className='form-control' onChange={onAction} />;
      break;
    case 'select':
      element = <Select {...restProps} onChange={onAction} />;
      break;
    //   no default
  }

  return <div className='form-group'>{element}</div>;
};

export const Select = ({ id, options = [], onChange }) => {
  return (
    <select id={id} className='form-control' defaultValue={options[0].value} onChange={onChange}>
      {options.map(({ value, label, ...restProps }) => (
        <option value={value} {...restProps} key={value}>
          {label}
        </option>
      ))}
    </select>
  );
};
