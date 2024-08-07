import React, { useState } from "react";
import { Paper, Typography, Tabs, Tab, Box, IconButton } from "@mui/material";
import OpenInFullOutlinedIcon from "@mui/icons-material/OpenInFullOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";

const Payments = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
   
    <Paper style={{ padding: '16px', marginBottom: '16px' }}>
      <Box display="flex" justifyContent="space-between" alignItems="center"  style={{ color: 'white', backgroundColor: '#005EB8', padding: '4px' }}>
      <Typography variant="h6" gutterBottom >PAYMENTS IN LAST 7 DAYS (MY VIEW)</Typography>
        <Box>
          <IconButton>
            <FilterAltOutlinedIcon />
          </IconButton>
          <IconButton>
            <OpenInFullOutlinedIcon />
          </IconButton>
        </Box>
      </Box>
      <Tabs
        value={activeTab}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        style={{ marginTop: '16px' }}
      >
        <Tab label="CLIENT WORKFLOW" />
        <Tab label="BANK WORKFLOW" />
      </Tabs>
      <Box style={{ padding: '16px' }}>
        {activeTab === 0 && (
          <Box display="flex" justifyContent="space-around">
            <BarChart label="Processed by Bank" value={25} color="#3de98d" />
            <BarChart label="Rejected by Bank" value={14} color="#21adfe" />
          </Box>
        )}
        {activeTab === 1 && (
          <Box display="flex" justifyContent="center">
            <Typography>No Data</Typography>
          </Box>
        )}
      </Box>
      <Box display="flex" alignItems="center" marginTop="16px">
        <CachedOutlinedIcon />
        <Typography variant="body2" style={{ marginLeft: '8px' }}>
          Last Updated 17/07/2024 04:09:41 PM
        </Typography>
      </Box>
    </Paper>
  );
};

const BarChart = ({ label, value, color }) => {
  return (
    <Box textAlign="center">
      <Box
        style={{
          height: `${value * 10}px`,
          backgroundColor: color,
          width: '40px',
          margin: '0 auto',
          position: 'relative'
        }}
      >
        <Typography
          variant="caption"
          style={{
            position: 'absolute',
            top: '-20px',
            left: '50%',
            transform: 'translateX(-50%)',
            color: '#000'
          }}
        >
          {value}
        </Typography>
      </Box>
      <Typography variant="body2" style={{ marginTop: '8px' }}>
        {label}
      </Typography>
    </Box>
  );
};

export default Payments;
