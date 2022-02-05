import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';

const ariaLabel = { 'aria-label': 'description' };

export default function Form() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <Input defaultValue="first name" inputProps={ariaLabel} />
      <Input defaultValue="second name" inputProps={ariaLabel} />
      <Input defaultValue="e-mail" error inputProps={ariaLabel} />
    </Box>
  );
}