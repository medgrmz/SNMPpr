import React from "react";
import { Grid, Paper, Typography, Box, Stack } from "@mui/material";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import DevicesIcon from "@mui/icons-material/Devices";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import ComputerIcon from "@mui/icons-material/Computer";
import StorageIcon from "@mui/icons-material/Storage";
import RouterIcon from "@mui/icons-material/Router";
import SecurityIcon from "@mui/icons-material/Security";

const Dashboard = () => {
  const deviceStats = {
    total: 5,
    active: 5,
    inactive: 0,
  };

  const networkDevices = [
    {
      name: "Firewall",
      type: "Security",
      cpu: "45%",
      memory: "60%",
      bandwidth: "75 Mbps",
    },
    {
      name: "Switch",
      type: "Network",
      cpu: "30%",
      memory: "45%",
      bandwidth: "120 Mbps",
    },
  ];

  const endpoints = [
    {
      name: "Endpoint 1",
      cpu: "25%",
      memory: "50%",
      storage: "65%",
    },
    {
      name: "Endpoint 2",
      cpu: "35%",
      memory: "55%",
      storage: "70%",
    },
  ];

  const metrics = [
    { name: "Overall System CPU Usage", value: 45, color: "#FF5252" }, // Changed color from #2196F3
    { name: "Overall System Memory Usage", value: 60, color: "#4CAF50" }, // Changed color from #FF9800
  ];

  const renderDonutChart = (data) => (
    <Box sx={{ width: "100%", height: 200 }}>
      <Typography variant='h6' align='center' gutterBottom>
        {data.name}
      </Typography>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={[
              { name: data.name, value: data.value },
              { name: "Available", value: 100 - data.value },
            ]}
            cx='50%'
            cy='50%'
            innerRadius={40}
            outerRadius={50}
            dataKey='value'>
            <Cell fill={data.color} />
            <Cell fill='#424242' />
          </Pie>
          <Tooltip formatter={(value, name) => [`${value}%`, name]} />
          <Legend
            verticalAlign='bottom'
            height={48}
            formatter={(value) => (
              <span
                style={{
                  fontSize: "16px",
                  padding: "8px",
                  color: "#333",
                }}>
                {value === "Available" ? "Available" : data.name}
              </span>
            )}
          />
          <text x='50%' y='50%' textAnchor='middle' dominantBaseline='middle'>
            {`${data.value}%`}
          </text>
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );

  return (
    <Box
      sx={{
        width: "calc(100% )",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        p: 2,
        pl: 0,
        backgroundColor: "#f5f5f5",
        overflow: "hidden", // Changed from overflowY: 'auto'
        "& > .MuiPaper-root": {
          minWidth: "100%",
          width: "100%",
          maxWidth: "100%",
        },
      }}>
      <Typography variant='h4' sx={{ textAlign: "center", mb: 1, px: 2 }}>
        Network Infrastructure Monitoring Dashboard
      </Typography>

      {/* Device Status Summary */}
      <Paper
        sx={{
          p: 2,
          borderRadius: "4px",
          marginRight: 2,
        }}>
        <Typography variant='h6' gutterBottom sx={{ textAlign: "center" }}>
          Overall Device Status
        </Typography>
        <Grid container spacing={3} alignItems='center'>
          <Grid item xs={12} md={4}>
            <Stack
              direction='row'
              spacing={2}
              alignItems='center'
              justifyContent='center'>
              <DevicesIcon sx={{ fontSize: 40, color: "primary.main" }} />
              <Box>
                <Typography variant='h4' color='primary'>
                  {deviceStats.total}
                </Typography>
                <Typography variant='subtitle1'>Total Devices</Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack
              direction='row'
              spacing={2}
              alignItems='center'
              justifyContent='center'>
              <CheckCircleIcon sx={{ fontSize: 40, color: "success.main" }} />
              <Box>
                <Typography variant='h4' color='success.main'>
                  {deviceStats.active}
                </Typography>
                <Typography variant='subtitle1'>Active Devices</Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack
              direction='row'
              spacing={2}
              alignItems='center'
              justifyContent='center'>
              <ErrorIcon sx={{ fontSize: 40, color: "error.main" }} />
              <Box>
                <Typography variant='h4' color='error.main'>
                  {deviceStats.inactive}
                </Typography>
                <Typography variant='subtitle1'>Inactive Devices</Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Paper>

      {/* Network Devices Status */}
      <Paper
        sx={{
          p: 2,
          borderRadius: "4px",
          marginRight: 2,
        }}>
        <Typography variant='h6' gutterBottom sx={{ textAlign: "center" }}>
          Network Infrastructure Devices
        </Typography>
        <Grid container spacing={3}>
          {networkDevices.map((device, index) => (
            <Grid item xs={12} key={index}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Stack spacing={2}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    {device.type === "Security" ? (
                      <SecurityIcon color='primary' />
                    ) : (
                      <RouterIcon color='primary' />
                    )}
                    <Typography variant='h6'>{device.name}</Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography>CPU:</Typography>
                    <Typography>{device.cpu}</Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography>Memory:</Typography>
                    <Typography>{device.memory}</Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography>Bandwidth:</Typography>
                    <Typography>{device.bandwidth}</Typography>
                  </Box>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* Server and Endpoints Status */}
      <Paper
        sx={{
          p: 2,
          borderRadius: "4px",
          marginRight: 2,
        }}>
        <Typography variant='h6' gutterBottom sx={{ textAlign: "center" }}>
          Server & Endpoint Devices
        </Typography>
        <Grid container spacing={3}>
          {/* Windows Server */}
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Stack spacing={2}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <StorageIcon color='primary' />
                  <Typography variant='h6'>Windows Server</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography>CPU:</Typography>
                  <Typography>45%</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography>Memory:</Typography>
                  <Typography>60%</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography>Storage:</Typography>
                  <Typography>75%</Typography>
                </Box>
              </Stack>
            </Paper>
          </Grid>

          {/* Endpoints */}
          {endpoints.map((endpoint, index) => (
            <Grid item xs={12} key={index}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Stack spacing={2}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <ComputerIcon color='primary' />
                    <Typography variant='h6'>{endpoint.name}</Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography>CPU:</Typography>
                    <Typography>{endpoint.cpu}</Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography>Memory:</Typography>
                    <Typography>{endpoint.memory}</Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography>Storage:</Typography>
                    <Typography>{endpoint.storage}</Typography>
                  </Box>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* System Performance Metrics */}
      <Paper
        sx={{
          p: 2,
          borderRadius: "4px",
          marginRight: 2,
        }}>
        <Typography variant='h6' gutterBottom sx={{ textAlign: "center" }}>
          System Performance Metrics
        </Typography>
        <Grid container spacing={3}>
          {metrics.map((metric, index) => (
            <Grid item xs={12} key={index}>
              {renderDonutChart(metric)}
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
};

export default Dashboard;
