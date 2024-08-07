import React from "react";
import { Paper, Typography, Link, Box } from '@mui/material';

const PriorityMessage = () => {
  return (
    <Paper style={{ padding: '16px', marginBottom: '16px' }}>
      <Typography variant="h6" gutterBottom style={{ color: 'white', backgroundColor: '#005EB8', padding: '8px' }}>
        PRIORITY MESSAGE
      </Typography>
      <Box style={{ padding: '16px' }}>
        <Typography variant="body1" gutterBottom>
          Bill Payments Report - Korea_Bill
        </Typography>
        <Link href="#" variant="body2" style={{ color: '#005EB8' }}>
          All Messages
        </Link>
      </Box>
    </Paper>
  );
};

export default PriorityMessage;
