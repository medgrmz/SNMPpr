import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DevicesIcon from '@mui/icons-material/Devices';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SecurityUpdateIcon from '@mui/icons-material/SecurityUpdate';

const Sidebar = () => {
  const drawerWidth = 240;

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          marginTop: '64px',
        },
      }}
    >
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/devices">
          <ListItemIcon><DevicesIcon /></ListItemIcon>
          <ListItemText primary="Devices" />
        </ListItem>
        <ListItem button component={Link} to="/alerts">
          <ListItemIcon><NotificationsIcon /></ListItemIcon>
          <ListItemText primary="Alerts" />
        </ListItem>
        <ListItem button component={Link} to="/patches">
          <ListItemIcon><SecurityUpdateIcon /></ListItemIcon>
          <ListItemText primary="Patches" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;