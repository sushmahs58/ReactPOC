import React from "react";
import { Paper, Typography, List, ListItem, ListItemText, Divider, IconButton} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const QuickNavigation = () => {
  const navigationItems = [
    {
      title: "Create Payments",
      description: "Make a new domestic or international payment",
    },
    {
      title: "Create Payee",
      description: "Create a new beneficiary with details to receive payment",
    },
    {
      title: "View Account Balance",
      description: "View balance and details of your account",
    },
    {
      title: "Manage Reports",
      description: "View, schedule and run reports",
    },
  ];

  return (
    <Paper style={{ padding: '16px' }}>
       <Typography variant="h6" gutterBottom style={{ color: 'white', backgroundColor: '#005EB8', padding: '8px' }}>
        Quick Navigation
      </Typography>
      <List>
        {navigationItems.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem>
              <ListItemText
                primary={item.title}
                secondary={item.description}
              />
              <IconButton edge="end" aria-label="info">
                <InfoOutlinedIcon />
              </IconButton>
            </ListItem>
            {index < navigationItems.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
};

export default QuickNavigation;
