import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import PaymentPending from "./PaymentPending";
import PriorityMessage from "./PriorityMessage";
import QuickNavigation from "./QuickNavigation";
import PendingTasks from "./PendingTasks";
import Payments from "./Payments";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Dashboard = () => {
   
      
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <PaymentPending />
        </Grid>
        <Grid item xs={4}>
         <PriorityMessage/>
        </Grid>
        <Grid item xs={4}>
          <QuickNavigation />
        </Grid>
        <Grid item xs={4}>
          <PendingTasks />
        </Grid>
        <Grid item xs={4}>
          <Payments/>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
