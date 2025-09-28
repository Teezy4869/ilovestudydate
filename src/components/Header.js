// src/components/Header.js
import React from 'react';
import { Box, Avatar, Typography, IconButton, Stack } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';

const Header = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: 80, // Chiều cao của header
        background: 'linear-gradient(to right, #6a1b9a, #4a148c)', // Gradient mới
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between', // Căn chỉnh các item
        padding: '0 24px', // Padding ngang
        color: 'white',
        boxSizing: 'border-box', // Đảm bảo padding không làm tăng kích thước
      }}
    >
      {/* Phần bên trái: Avatar và Tên */}
      <Stack direction="row" alignItems="center" spacing={2}>
        <Avatar
          alt="Salamingo"
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=500&fit=crop"
        />
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
          Salamingo
        </Typography>
      </Stack>

      {/* Phần bên phải: Các Icon */}
      <Stack direction="row" spacing={1}>
        <IconButton color="inherit">
          <ChatBubbleOutlineIcon />
        </IconButton>
        <IconButton color="inherit">
          <WidgetsOutlinedIcon />
        </IconButton>
        <IconButton color="inherit">
          <Inventory2OutlinedIcon />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default Header;