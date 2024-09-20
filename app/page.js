"use client";

import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';

export default function Home() {
  return (
    <Box
      sx={{
        bgcolor: 'white',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h2" color="black" align="center" gutterBottom>
        Welcome to Hope High Tennis Court Booking
      </Typography>
      
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Link href="/register" passHref>
          <Button variant="contained" size="large">
            Register
          </Button>
        </Link>
        <Link href="/deregister" passHref>
          <Button variant="contained" size="large">
            Deregister
          </Button>
        </Link>
        <Link href="/guest-count" passHref>
          <Button variant="contained" size="large">
            Total Guests
          </Button>
        </Link>
      </Box>
    </Box>
  );
}