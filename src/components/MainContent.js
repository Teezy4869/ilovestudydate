// src/components/MainContent.js
import React from 'react';
import { Box } from '@mui/material';

const MainContent = () => {
  return (
    <Box
      sx={{
        flexGrow: 1, // Chiếm hết không gian còn lại
        height: '100vh',
        backgroundColor: '#f5f5f7', // Màu nền xám nhạt
      }}
    >
      {/* Nội dung chính của bạn sẽ ở đây */}
    </Box>
  );
};

export default MainContent;