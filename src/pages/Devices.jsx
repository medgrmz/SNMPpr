import React from 'react';
import { Grid, Paper, Typography, Box, Chip, Stack } from '@mui/material';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import SignalWifiStatusbar4BarIcon from '@mui/icons-material/SignalWifiStatusbar4Bar';
import MemoryIcon from '@mui/icons-material/Memory';
import StorageIcon from '@mui/icons-material/Storage';
import SpeedIcon from '@mui/icons-material/Speed';

const Devices = () => {
  const devices = [
    { 
      name: 'Firewall',
      type: 'Network Security',
      status: 'Active',
      ip: '192.168.1.1',
      cpu: '45%',
      memory: '60%',
      storage: '55%',
      bandwidth: '75 Mbps',
      lastUpdate: '2 minutes ago'
    },
    { 
      name: 'Switch',
      type: 'Network Device',
      status: 'Active',
      ip: '192.168.1.2',
      cpu: '30%',
      memory: '45%',
      storage: '40%',
      bandwidth: '120 Mbps',
      lastUpdate: '1 minute ago'
    },
    { 
      name: 'Windows Server',
      type: 'Server',
      status: 'Active',
      ip: '192.168.1.3',
      cpu: '65%',
      memory: '75%',
      storage: '80%',
      bandwidth: '90 Mbps',
      lastUpdate: '3 minutes ago'
    },
    { 
      name: 'Endpoint 1',
      type: 'Workstation',
      status: 'Active',
      ip: '192.168.1.4',
      cpu: '25%',
      memory: '50%',
      storage: '65%',
      bandwidth: '45 Mbps',
      lastUpdate: '5 minutes ago'
    },
    { 
      name: 'Endpoint 2',
      type: 'Workstation',
      status: 'Active',
      ip: '192.168.1.5',
      cpu: '35%',
      memory: '55%',
      storage: '70%',
      bandwidth: '40 Mbps',
      lastUpdate: '4 minutes ago'
    }
  ];

  const deviceData = devices.map(device => ({
    name: device.name,
    value: 1,
    color: device.status === 'Active' ? '#4CAF50' : '#FF5252'
  }));

  return (
    <Box sx={{ 
      width: '100%',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
      p: 3,
      px: 6,
      overflow: 'hidden',
      position: 'fixed',
      top: 64,
      left: 240,
      right: 0,
      bottom: 0,
      backgroundColor: '#f5f5f5'
    }}>
      <Typography variant="h4" sx={{ textAlign: 'center' }}>
        Device Management Dashboard
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper 
            sx={{ 
              p: 2,
              height: '400px',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Typography variant="h6" gutterBottom>
              Device Status Overview
            </Typography>
            <Box sx={{ width: '100%', height: '100%', minHeight: 300 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={deviceData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {deviceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Device Details
            </Typography>
            {devices.map((device, index) => (
              <Box 
                key={index} 
                sx={{ 
                  mb: 2,
                  p: 2,
                  borderLeft: 6,
                  borderColor: device.status === 'Active' ? '#4CAF50' : '#FF5252',
                  '&:hover': {
                    bgcolor: 'rgba(0, 0, 0, 0.04)'
                  }
                }}
              >
                <Stack spacing={2}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                      {device.name}
                    </Typography>
                    <Chip 
                      label={device.status}
                      color={device.status === 'Active' ? 'success' : 'error'}
                      size="small"
                    />
                  </Box>
                  
                  <Typography variant="body2" color="textSecondary">
                    {device.type} - {device.ip}
                  </Typography>

                  <Grid container spacing={2}>
                    <Grid item xs={6} md={3}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <SpeedIcon color="primary" />
                        <Typography variant="body2">CPU: {device.cpu}</Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={6} md={3}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <MemoryIcon color="primary" />
                        <Typography variant="body2">Memory: {device.memory}</Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={6} md={3}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <StorageIcon color="primary" />
                        <Typography variant="body2">Storage: {device.storage}</Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={6} md={3}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <SignalWifiStatusbar4BarIcon color="primary" />
                        <Typography variant="body2">BW: {device.bandwidth}</Typography>
                      </Stack>
                    </Grid>
                  </Grid>

                  <Typography variant="caption" color="textSecondary">
                    Last updated: {device.lastUpdate}
                  </Typography>
                </Stack>
              </Box>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Devices;