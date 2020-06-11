import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.min.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.min.css';
import 'ag-grid-community/dist/styles/ag-theme-material.min.css';
import './HoneyGrid.scss';
import autoBind from 'react-auto-bind';
import HeaderWithActions from '../../molecules/HeaderWithActions/HeaderWithActions';
import DualListModalBox from '../../molecules/DualListModalBox/DualListModalBox';
import Form from '../../molecules/Form/Form';

class HoneyGrid extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
    const { table, dualListModalBox } = this.props;
    const { gridOptions = {} } = table;
    const { columnDefs = [] } = gridOptions;
    const columnKeys = columnDefs.map(colDef => colDef.field);

    this.state = {
      isSettingModalOpen: false,
      dualListModalBox,
      columnDefs,
      columnKeys,
      product: {}
    };
  }

  componentDidMount() {
    const { dualListModalBox } = this.props;
    const { columnDefs = [] } = this.state;
    const options = [];
    const selected = [];

    columnDefs.forEach(column => {
      const { headerName, field, hide } = column;
      options.push({
        value: field,
        label: headerName
      });
      if (!hide) {
        selected.push(field);
      }
    });

    dualListModalBox.options = [...options];
    dualListModalBox.selected = [...selected];

    this.setState({
      dualListModalBox
    });
  }

  toggleSettingModal() {
    const { isSettingModalOpen } = this.state;
    this.setState({
      isSettingModalOpen: !isSettingModalOpen
    });
  }

  onColumnSettingsApply({ action, payload }) {
    switch (action) {
      case 'save_column_preference':
        this.saveColumnPreference(payload);
        break;
      // no default
    }
  }

  saveColumnPreference(selectedColumns = []) {
    const { dualListModalBox, columnKeys, isSettingModalOpen } = this.state;
    dualListModalBox.selected = selectedColumns;

    this.setState(
      {
        dualListModalBox,
        selected: selectedColumns,
        isSettingModalOpen: !isSettingModalOpen
      },
      () => {
        if (this.columnApi) {
          this.columnApi.setColumnsVisible(columnKeys, false);
          this.columnApi.setColumnsVisible(selectedColumns, true);
          selectedColumns.forEach((colKey, toIndex) => {
            this.columnApi.moveColumn(colKey, toIndex);
          });
        }
        if (this.props.onSaveColumnPreference) {
          this.props.onSaveColumnPreference(selectedColumns);
        }
      }
    );
  }

  onHeaderAction(event) {
    const { id } = event.target;
    switch (id) {
      case 'settings':
        this.toggleSettingModal();
        break;
      case 'add-product':
        this.showAddProduct();
      // no default
    }
  }

  showAddProduct = () => {
    this.setState({
      showAddProduct: true
    });
  };

  hideAddProduct = () => {
    this.setState({
      showAddProduct: false,
      product: {}
    });
  };

  onGridReady = params => {
    this.gridApi = params.api;
    this.columnApi = params.columnApi;
    this.gridApi.setColumnDefs(this.state.columnDefs);
  };

  saveProduct = () => {
    const { product } = this.state;
    if (this.props.saveProduct) {
      this.props.saveProduct({ ...product });
    }
    if (this.gridApi) {
      this.gridApi.updateRowData({ add: [{ ...product }] });
    }
  };

  onProductAction = event => {
    const { type, target } = event;
    const { product } = this.state;
    switch (type) {
      case 'change':
        product[target.id] = target.value;
        this.setState({ product });
        break;
      case 'click':
        switch (target.id) {
          case 'cancel':
            this.hideAddProduct();
            break;
          case 'save':
            this.saveProduct();
            break;
          // no default
        }
        if (target.id === 'cancel') {
          this.hideAddProduct();
        }
        break;
      // no default
    }
  };

  render() {
    const { header, table, dualListModalBox, newProduct } = this.props;
    const { theme, style, gridOptions } = table;
    const { columnDefs, ...restGridOptions } = gridOptions;
    const { isSettingModalOpen, showAddProduct } = this.state;
    const domLayout = style && style.height ? 'normal' : 'autoHeight';

    return (
      <div className='honey-grid'>
        {showAddProduct ? <Form {...newProduct} className='product-editor' onAction={this.onProductAction} /> : null}

        <HeaderWithActions {...header} onClick={this.onHeaderAction} />
        <div className={theme} style={style}>
          <AgGridReact {...restGridOptions} domLayout={domLayout} onGridReady={this.onGridReady} />
        </div>
        {isSettingModalOpen && (
          <DualListModalBox
            {...dualListModalBox}
            isOpen={isSettingModalOpen}
            toggle={this.toggleSettingModal}
            onAction={this.onColumnSettingsApply}
          />
        )}
      </div>
    );
  }
}

HoneyGrid.propTypes = {
  header: PropTypes.shape({
    title: PropTypes.string,
    actionButtons: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        type: PropTypes.string,
        text: PropTypes.string,
        theme: PropTypes.string
      })
    )
  }),
  table: PropTypes.shape({
    theme: PropTypes.string,
    style: PropTypes.object
  })
};

export default HoneyGrid;
