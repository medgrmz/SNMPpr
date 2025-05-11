import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Alerts = () => {
  const alertStatusData = [
    { name: 'Critical', value: 2, color: '#FF5252' },
    { name: 'Warning', value: 3, color: '#FFA726' },
    { name: 'Resolved', value: 5, color: '#4CAF50' }
  ];

  const alerts = [
    { id: 1, device: 'Firewall', type: 'Critical', message: 'High CPU Usage', timestamp: '2 minutes ago' },
    { id: 2, device: 'Switch', type: 'Warning', message: 'High Network Traffic', timestamp: '5 minutes ago' },
    { id: 3, device: 'Server', type: 'Critical', message: 'Low Memory', timestamp: '10 minutes ago' },
    { id: 4, device: 'Endpoint 1', type: 'Warning', message: 'Disk Space Low', timestamp: '15 minutes ago' },
    { id: 5, device: 'Endpoint 2', type: 'Warning', message: 'Service Down', timestamp: '20 minutes ago' }
  ];

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
        Alert Management Dashboard
      </Typography>
      
      {/* Alert Summary Cards */}
      <Paper sx={{ 
        width: '100%',
        p: 3,
        px: 4,
        flex: '0 0 auto'
      }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={4}>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 2,
              justifyContent: 'center'
            }}>
              <ErrorIcon sx={{ color: '#FF5252', fontSize: 40 }} />
              <Box>
                <Typography variant="h4" color="error">2</Typography>
                <Typography variant="subtitle1">Critical Alerts</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 2,
              justifyContent: 'center'
            }}>
              <WarningAmberIcon sx={{ color: '#FFA726', fontSize: 40 }} />
              <Box>
                <Typography variant="h4" sx={{ color: '#FFA726' }}>3</Typography>
                <Typography variant="subtitle1">Warning Alerts</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 2,
              justifyContent: 'center'
            }}>
              <CheckCircleIcon sx={{ color: '#4CAF50', fontSize: 40 }} />
              <Box>
                <Typography variant="h4" color="success.main">5</Typography>
                <Typography variant="subtitle1">Resolved Alerts</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* Main Content */}
      <Grid container sx={{ 
        flexGrow: 1, 
        height: 'calc(100% - 200px)', // Adjust based on header and summary height
        m: 0
      }}>
        {/* Chart */}
        <Grid item xs={12} md={5} sx={{ height: '100%', p: 0 }}>
          <Paper sx={{ 
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            p: 3,
            borderRadius: 0
          }}>
            <Typography variant="h6" gutterBottom>Alert Status Distribution</Typography>
            <Box sx={{ 
              flexGrow: 1,
              width: '100%',
              height: 'calc(100% - 40px)' // Adjust for title height
            }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={alertStatusData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                    label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {alertStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend 
                    verticalAlign="bottom" 
                    height={36}
                  />
                </PieChart>
              </ResponsiveContainer>
            </Box>
          </Paper>
        </Grid>

        {/* Recent Alerts */}
        <Grid item xs={12} md={7} sx={{ height: '100%', p: 0 }}>
          <Paper sx={{ 
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            p: 3,
            borderRadius: 0
          }}>
            <Typography variant="h6" gutterBottom>Recent Alerts</Typography>
            <Box sx={{ 
              flexGrow: 1,
              overflow: 'auto',
              height: 'calc(100% - 40px)' // Adjust for title height
            }}>
              {alerts.map((alert) => (
                <Box 
                  key={alert.id}
                  sx={{ 
                    p: 2, 
                    mb: 2,
                    borderLeft: 6,
                    borderColor: 
                      alert.type === 'Critical' ? '#FF5252' : 
                      alert.type === 'Warning' ? '#FFA726' : '#4CAF50',
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                    boxShadow: 1,
                    '&:hover': {
                      bgcolor: 'action.hover',
                      transform: 'translateX(6px)',
                      transition: 'all 0.3s ease'
                    }
                  }}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    {alert.device} - {alert.type}
                  </Typography>
                  <Typography variant="body1">{alert.message}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    {alert.timestamp}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Alerts;