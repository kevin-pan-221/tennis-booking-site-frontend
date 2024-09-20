"use client";

import { useEffect, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
//import TotalGuestCount from '../components/TotalGuestCount.jsx';

export default function GuestCount() {
  const [totalGuestCount, setTotalGuestCount] = useState(0);

  async function getTotalGuestCount() {
      const res = await fetch("http://localhost:8080/guest", {
        method: "GET",
      });

      const resJSON = await res.json();
      setTotalGuestCount(JSON.stringify(resJSON)); 
  }

  useEffect(() => {
    getTotalGuestCount();
  });  

  return (
    <Box sx={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <Typography variant="h4" gutterBottom>
        Total Guests Registered
      </Typography>
      
      <Typography variant="h6" color="primary">
        {totalGuestCount} guests so far!
      </Typography>

      <Button 
        variant="contained" 
        color="primary" 
        fullWidth 
        sx={{ mt: 2 }} 
        onClick={getTotalGuestCount}
      >
        Reload Guest Count
      </Button>
    </Box>
  );
}