"use client";

import { Box, TextField, Typography, Button } from '@mui/material';
import { useState } from 'react';

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  //need to add functionality for courts
  const courts = [
    { id: 1, name: "Court 1", image: './tennis_court_1.png' },
    { id: 2, name: "Court 2", image: './tennis_court_1.png' },
    { id: 3, name: "Court 3", image: './tennis_court_1.png' }
  ];

  async function onSubmit(event) {
    const guestBody = {
      name,
      email,
      phoneNumber,
    };

    const res = await fetch("http://localhost:8080/guest", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(guestBody),
    });
  }

  return (
    <Box sx={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <Typography variant="h4" gutterBottom>
        Register Guest
      </Typography>

      <Box component="form" noValidate autoComplete="off" onSubmit={onSubmit} sx={{ mb: 4 }}>
        <TextField
          required
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <TextField
          required
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
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
        <Button variant="contained" color="primary" type="submit" fullWidth sx={{ mt: 2 }}>
          Register
        </Button>
      </Box>
      
      <Box sx={{ display: 'flex', justifyContent: 'space-around', mb: 4 }}>
        {courts.map((court) => (
          <Box>
            <img src={court.image} alt={`Tennis Court ${court.id}`} width={100} />
            <Typography>{court.name}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}