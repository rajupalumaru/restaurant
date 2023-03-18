import React, { useState } from 'react';
import MaterialTable from 'material-table';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import './OpenOrders.css';

const data = [
  { id: 1, TableName: 'Order #001', Items: '3 Items', Total: '$50.00', Status: 'Mark Delivered' },
  { id: 2, TableName: 'Order #002', Items: '3 Items', Total: '$30.00', Status: 'Mark Delivered' },
  { id: 3, TableName: 'Order #003', Items: '3 Items', Total: '$75.00', Status: 'Cancel' },
  { id: 4, TableName: 'Order #004', Items: '3 Items', Total: '$100.00', Status: 'Mark Delivered' },
];

const OpenOrders = () => {
  const [open, setOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);

  const handleOpen = (rowData, status) => {
    setSelectedData(rowData);
    setSelectedStatus(status);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedData(null);
    setSelectedStatus(null);
    setOpen(false);
  };

  const handleStatusAction = (status) => {
    // Handle the action based on the selected status here
    console.log(`Action for ${status} status`);
    handleClose();
  };

  const columns = [
    { title: 'TableName', field: 'TableName' },
    { title: 'Items', field: 'Items' },
    { title: 'Total', field: 'Total' },
    {
      title: 'Status',
      field: 'Status',
      render: (rowData) => (
        <div className='orderStatus'>
          <Button onClick={() => handleOpen(rowData, 'Cancel')} className='cancelButton'>Cancel</Button>
          <Button onClick={() => handleOpen(rowData, 'Mark Delivered')} className='markButton'>Mark Delivered</Button>
        </div>
      ),
    },
  ];

  return (
    <>
      <MaterialTable
        title="My Table"
        data={data}
        columns={columns}
        options={{
          search: false,
          paging: false,
          filtering: false,
          exportButton: false,
          headerStyle: { backgroundColor: '#F5F5F5', fontWeight: 'bold' },
          rowStyle: { backgroundColor: '#EEE' },
          direction: 'rtl',
        }}
      />
      <Modal open={open} onClose={handleClose}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: '#fff', padding: '2rem' }}>
          <h3>{selectedStatus} for {selectedData?.TableName}</h3>
          <div className='modalButtons'>
          <Button variant="contained" color="primary" onClick={() => handleStatusAction(selectedStatus)} className='modalButtonConfirm'>Confirm</Button>
          <Button variant="contained" color="secondary" onClick={handleClose} className='modalButtonCancel'>Cancel</Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default OpenOrders;
