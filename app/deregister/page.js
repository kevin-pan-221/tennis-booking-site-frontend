"use client";

import { Box, TextField, Typography, Button } from '@mui/material';
import { useState } from 'react';

export default function Deregister() {
  const [phoneNumber, setPhoneNumber] = useState("");

  async function onSubmit(event) {
    const deregisterBody = {
      phoneNumber,
    };

    const res = await fetch("http://localhost:8080/remove_guest", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(deregisterBody),
    });
  }

  return (
    <Box sx={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <Typography variant="h4" gutterBottom>
        Deregister a Guest
      </Typography>

      <Box component="form" noValidate autoComplete="off" onSubmit={onSubmit}>
        <TextField
          required
          label="Phone Number"
          type="tel"
          variant="outlined"
          fullWidth
          margin="normal"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
        <Button variant="contained" type="submit" fullWidth sx={{ mt: 2 }}>
          Deregister
        </Button>
      </Box>
    </Box>
  );
}