const honeyGridModel = {
  header: {
    title: 'Products List',
    actionButtons: [
      {
        id: 'add-product',
        type: 'button',
        text: 'Add Product',
        theme: 'success'
      },
      {
        id: 'actions',
        type: 'button',
        text: 'Actions',
        theme: 'light',
        icon: 'filter_list'
      },
      {
        id: 'settings',
        type: 'button',
        theme: 'light',
        icon: 'settings'
      }
    ]
  },
  table: {
    theme: 'ag-theme-material', //ag-theme-balham,
    style: {
      height: '500px', //if no height is passed then grid height will be (no of rows * height of one row)
      width: '100%'
    },
    gridOptions: {
      pagination: true,
      rowSelection: 'multiple', //'single' or 'multiple'
      defaultColDef: {
        minWidth: 50,
        sortable: true,
        filter: true,
        resizable: true,
        editable: true
        // checkboxSelection: true // This will add check box to all columns
      },
      columnDefs: [
        {
          headerName: 'Make',
          field: 'make',
          headerCheckboxSelection: true,
          checkboxSelection: true
        },
        { headerName: 'Model', field: 'model' },
        { headerName: 'Price', field: 'price' }
      ],
      rowData: [
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 }
      ]
    }
  },
  dualListModalBox: {
    header: {
      title: 'Customise Table View',
      actionButtons: [
        {
          id: 'save_column_preference',
          type: 'button',
          text: 'Save',
          theme: 'success'
        }
      ]
    },
    dualListBoxProps: {
      canFilter: true,
      preserveSelectOrder: true,
      showOrderButtons: true
    },
    size: 'lg'
  },
  newProduct: {
    title: 'Create New Product',
    actionButtons: [
      {
        id: 'save',
        type: 'button',
        text: 'Save',
        theme: 'success'
      },
      {
        id: 'reset',
        type: 'reset',
        text: 'Reset',
        theme: 'warning'
      },
      {
        id: 'cancel',
        type: 'cancel',
        text: 'Cancel',
        theme: 'danger'
      }
    ],
    fields: [
      {
        id: 'make',
        inputType: 'text',
        placeholder: 'Make'
      },
      {
        id: 'model',
        inputType: 'select',
        options: [
          {
            value: 'Celica',
            label: 'Celica'
          },
          {
            value: 'Monster',
            label: 'Monster'
          },
          {
            value: 'Boxer',
            label: 'Boxer'
          }
        ],
        placeholder: 'Model'
      },
      {
        id: 'price',
        inputType: 'text',
        placeholder: 'Price'
      }
    ]
  }
};
export default honeyGridModel;
