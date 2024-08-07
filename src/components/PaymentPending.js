import React from 'react';
import { Paper, Typography, Box } from '@mui/material';

const PaymentPending = () => {
    return (
      <Paper style={{ padding: '16px', marginBottom: '16px' }}>
        <Typography variant="h6" gutterBottom style={{ color: 'white', backgroundColor: '#005EB8', padding: '8px' }}>
          PAYMENT - PENDING APPROVAL
        </Typography>
        <Box style={{ padding: '16px' }}>
          <Typography variant="body1" gutterBottom>
            <span style={{ fontWeight: 'bold' }}>Q0022706</span> | Cut-off time 2 hrs from now
          </Typography>
          <Typography variant="body2" style={{ color: '#005EB8', fontWeight: 'bold' }}>
            KRW 701
          </Typography>
        </Box>
      </Paper>
    );
  };

export default PaymentPending;
