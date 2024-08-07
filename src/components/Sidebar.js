import React from 'react';
import { List, ListItem, ListItemText, Paper, Toolbar, Typography } from '@mui/material';

const Sidebar = () => {
  return (
    <Paper style={{ width: '240px', height: '100vh', position: 'fixed' }}>
      <Toolbar>
        <Typography variant="h6" noWrap>
          Menu
        </Typography>
      </Toolbar>
      <List component="nav">
        <ListItem button>
          <ListItemText primary="Create Payments" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Create Payee" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="View Account Balance" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Manage Reports" />
        </ListItem>
      </List>
    </Paper>
  );
};

export default Sidebar;
