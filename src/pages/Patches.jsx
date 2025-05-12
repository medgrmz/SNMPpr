import React from "react";
import { Grid, Paper, Typography, Box, Chip, Stack } from "@mui/material";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import SecurityUpdateIcon from "@mui/icons-material/SecurityUpdate";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Patches = () => {
  const patchStats = {
    total: 15,
    installed: 10,
    pending: 5,
  };

  const patchStatusData = [
    { name: "Installed", value: patchStats.installed, color: "#4CAF50" },
    { name: "Pending", value: patchStats.pending, color: "#FFA726" },
  ];

  const recentPatches = [
    {
      id: 1,
      name: "Security Update KB123456",
      type: "Security",
      status: "Installed",
      device: "Windows Server",
      installDate: "2024-01-15",
      description: "Critical security update for Windows Server",
    },
    {
      id: 2,
      name: "System Update KB789012",
      type: "System",
      status: "Pending",
      device: "Endpoint 1",
      installDate: "Pending",
      description: "System performance and stability improvements",
    },
    {
      id: 3,
      name: "Feature Update KB345678",
      type: "Feature",
      status: "Installed",
      device: "Endpoint 2",
      installDate: "2024-01-14",
      description: "New features and functionality updates",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 3,
        p: 3,
        px: 6,
        top: 64,
        left: 240,
        right: 0,
        bottom: 0,
        backgroundColor: "#f5f5f5",
      }}>
      <Typography variant='h4' sx={{ textAlign: "center" }}>
        Patch Management Dashboard
      </Typography>

      {/* Patch Summary */}
      <Paper
        sx={{
          width: "100%",
          p: 3,
          px: 4,
          flex: "0 0 auto",
        }}>
        <Grid container spacing={3} alignItems='center'>
          <Grid item size={{ xs: 12, md: 4 }}>
            <Stack
              direction='row'
              spacing={2}
              alignItems='center'
              justifyContent='center'>
              <SecurityUpdateIcon
                sx={{ fontSize: 40, color: "primary.main" }}
              />
              <Box>
                <Typography variant='h4' color='primary'>
                  {patchStats.total}
                </Typography>
                <Typography variant='subtitle1'>Total Patches</Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid item size={{ xs: 12, md: 4 }}>
            <Stack
              direction='row'
              spacing={2}
              alignItems='center'
              justifyContent='center'>
              <CheckCircleIcon sx={{ fontSize: 40, color: "success.main" }} />
              <Box>
                <Typography variant='h4' color='success.main'>
                  {patchStats.installed}
                </Typography>
                <Typography variant='subtitle1'>Installed</Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid item size={{ xs: 12, md: 4 }}>
            <Stack
              direction='row'
              spacing={2}
              alignItems='center'
              justifyContent='center'>
              <SystemUpdateAltIcon sx={{ fontSize: 40, color: "#FFA726" }} />
              <Box>
                <Typography variant='h4' sx={{ color: "#FFA726" }}>
                  {patchStats.pending}
                </Typography>
                <Typography variant='subtitle1'>Pending</Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Paper>

      <Grid container spacing={3}>
        {/* Patch Status Chart */}
        <Grid item size={{ xs: 12, md: 6 }}>
          <Paper sx={{ p: 3, height: "400px" }}>
            <Typography variant='h6' gutterBottom>
              Patch Status Distribution
            </Typography>
            <Box sx={{ width: "100%", height: "100%" }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={patchStatusData}
                    cx='50%'
                    cy='50%'
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey='value'
                    label={({ name, percent }) =>
                      `${name} ${(percent * 100).toFixed(0)}%`
                    }>
                    {patchStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend verticalAlign='bottom' height={36} />
                </PieChart>
              </ResponsiveContainer>
            </Box>
          </Paper>
        </Grid>

        {/* Recent Patches List */}
        <Grid item size={{ xs: 12, md: 6 }}>
          <Paper sx={{ p: 3 }}>
            <Typography variant='h6' gutterBottom>
              Recent Patches
            </Typography>
            <Stack spacing={2}>
              {recentPatches.map((patch) => (
                <Box
                  key={patch.id}
                  sx={{
                    p: 2,
                    borderLeft: 6,
                    borderColor:
                      patch.status === "Installed" ? "#4CAF50" : "#FFA726",
                    bgcolor: "background.paper",
                    borderRadius: 1,
                    boxShadow: 1,
                    "&:hover": {
                      bgcolor: "action.hover",
                      transform: "translateY(-2px)",
                      transition: "all 0.3s ease",
                    },
                  }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 1,
                    }}>
                    <Typography variant='subtitle1' sx={{ fontWeight: "bold" }}>
                      {patch.name}
                    </Typography>
                    <Chip
                      label={patch.status}
                      color={
                        patch.status === "Installed" ? "success" : "warning"
                      }
                      size='small'
                    />
                  </Box>
                  <Typography
                    variant='body2'
                    color='text.secondary'
                    gutterBottom>
                    {patch.description}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}>
                    <Typography variant='caption' color='text.secondary'>
                      Device: {patch.device}
                    </Typography>
                    <Typography variant='caption' color='text.secondary'>
                      {patch.status === "Installed"
                        ? `Installed: ${patch.installDate}`
                        : "Installation Pending"}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Patches;
