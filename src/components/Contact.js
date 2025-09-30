import React, { useState } from 'react';
import { 
  Box, 
  Avatar, 
  Typography, 
  IconButton, 
  Stack, 
  TextField, 
  Button
} from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import AppsIcon from '@mui/icons-material/Apps';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Contact = ({ onBack, initialPhoneNumber, initialEmail, onContactSave }) => {
  const [phoneNumber, setPhoneNumber] = useState(initialPhoneNumber || '0962853963');
  const [email, setEmail] = useState(initialEmail || 'loremipsum@gmail.com');

  const handleSave = () => {
    const phoneRegex = /^\d{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!phoneRegex.test(phoneNumber)) {
      alert('Vui lòng nhập số điện thoại hợp lệ (10 chữ số).');
      return;
    }
    if (!emailRegex.test(email)) {
      alert('Vui lòng nhập email hợp lệ.');
      return;
    }

    if (onContactSave) {
      onContactSave({ phoneNumber, email });
    }
    onBack();
  };

  return (
    <Box sx={{ 
      display: 'flex', 
      height: '100vh', 
      backgroundColor: '#e8e8e8'
    }}>
      {/* Left Sidebar */}
      <Box
        sx={{
          width: '360px',
          height: '100vh',
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '2px 0 10px rgba(0,0,0,0.1)',
          overflowY: 'auto'
        }}
      >
        {/* Header Section with Purple Gradient */}
        <Box
          sx={{
            height: '120px', // Đồng bộ với Profile.js
            background: 'linear-gradient(135deg, #8e24aa 0%, #5e35b1 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 20px',
            color: 'white',
            flexShrink: 0
          }}
        >
          <Stack direction="row" alignItems="center" spacing={2}>
            <Avatar
              alt="Salamingo"
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=500&fit=crop"
              sx={{ width: 40, height: 40 }} // Đồng bộ với Profile.js
            />
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Salamingo
            </Typography>
          </Stack>
          
          <Stack direction="row" spacing={1}>
            <IconButton size="small" sx={{ color: 'white' }}>
              <ChatBubbleOutlineIcon sx={{ fontSize: 20 }} />
            </IconButton>
            <IconButton size="small" sx={{ 
              color: 'white',
              backgroundColor: 'rgba(255,255,255,0.2)',
              borderRadius: '8px',
              width: 32,
              height: 32,
            }}>
              <AppsIcon sx={{ fontSize: 18 }} />
            </IconButton>
            <IconButton size="small" sx={{ color: 'white' }}>
              <ViewInArIcon sx={{ fontSize: 20 }} />
            </IconButton>
          </Stack>
        </Box>

        {/* Contact Header */}
        <Box sx={{ padding: '20px', backgroundColor: 'white', flexShrink: 0 }}>
          {/* Back Button and Title */}
          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 3 }}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <IconButton 
                onClick={onBack}
                size="small" 
                sx={{ 
                  color: '#e91e63',
                  p: 0
                }}
              >
                <ArrowBackIosNewIcon sx={{ fontSize: 18 }} />
              </IconButton>
              
              <Typography 
                variant="h6" 
                sx={{ 
                  color: '#e91e63', 
                  fontWeight: 'bold', 
                  fontSize: '18px'
                }}
              >
                Thông tin liên hệ
              </Typography>
            </Stack>
          </Stack>

          {/* Input Fields */}
          <Typography 
            variant="caption" 
            sx={{ 
              color: '#999', 
              fontWeight: 'bold', 
              mb: 2, 
              display: 'block' 
            }}
          >
            THÔNG TIN LIÊN HỆ
          </Typography>

          <TextField
            fullWidth
            label="Số điện thoại"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Nhập số điện thoại"
            sx={{
              mb: 2,
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px',
                backgroundColor: '#f8f8f8',
                '& fieldset': {
                  borderColor: '#ddd'
                },
                '&:hover fieldset': {
                  borderColor: '#e91e63'
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#e91e63'
                }
              },
              '& .MuiInputBase-input': {
                fontSize: '14px',
                color: '#333',
                padding: '12px'
              }
            }}
          />

          <TextField
            fullWidth
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Nhập email"
            sx={{
              mb: 3,
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px',
                backgroundColor: '#f8f8f8',
                '& fieldset': {
                  borderColor: '#ddd'
                },
                '&:hover fieldset': {
                  borderColor: '#e91e63'
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#e91e63'
                }
              },
              '& .MuiInputBase-input': {
                fontSize: '14px',
                color: '#333',
                padding: '12px'
              }
            }}
          />

          <Button
            fullWidth
            onClick={handleSave}
            variant="contained"
            sx={{
              backgroundColor: '#e91e63',
              color: 'white',
              fontWeight: 'bold',
              textTransform: 'none',
              borderRadius: '25px',
              padding: '12px 0',
              fontSize: '16px',
              '&:hover': {
                backgroundColor: '#d81b60'
              }
            }}
          >
            Lưu
          </Button>
        </Box>
      </Box>

      {/* Right Content Area */}
      <Box sx={{ 
        flexGrow: 1, 
        backgroundColor: '#f5f5f5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Typography variant="h6" sx={{ color: '#333' }}>
          Thông tin liên hệ Content Area
        </Typography>
      </Box>
    </Box>
  );
};

export default Contact;