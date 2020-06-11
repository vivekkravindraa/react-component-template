import React, { useState, useEffect } from 'react';
import './DualListModalBox.scss';
import { Modal, ModalBody } from 'reactstrap';
import HeaderWithActions from '../HeaderWithActions/HeaderWithActions.js';
import DualListWidget from '../DualListBox/DualListWidget';

const DualListModalBox = props => {
  const { header, toggle, dualListBoxProps, options, selected, onAction, ...restProps } = props;

  const [columnsSelected, updateSelectedColumns] = useState(selected);

  useEffect(() => {
    updateSelectedColumns(columnsSelected);
  }, [selected]);

  const onChange = selectedColumns => {
    updateSelectedColumns(selectedColumns);
  };

  const onHeaderAction = eventData => {
    onAction({ action: eventData.target.id, payload: [...columnsSelected] });
  };

  return (
    <Modal {...restProps} toggle={toggle}>
      <div className='modal-header'>
        <HeaderWithActions {...header} onClick={onHeaderAction} />
      </div>
      <ModalBody>
        <DualListWidget {...dualListBoxProps} options={options} selected={columnsSelected} onChange={onChange} />
      </ModalBody>
    </Modal>
  );
};

DualListModalBox.defaultProps = {
  options: [],
  selected: [],
  onAction: () => {}
};
export default DualListModalBox;
