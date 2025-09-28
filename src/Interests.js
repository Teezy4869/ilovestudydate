// src/components/Interests.js
import React, { useState } from 'react';
import { 
  Box, 
  Avatar, 
  Typography, 
  IconButton, 
  Stack,
  Chip
} from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import AppsIcon from '@mui/icons-material/Apps';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Interests = ({ onBack }) => {
  const [selectedInterests, setSelectedInterests] = useState(['Spotify']);

  // Danh sách các sở thích
  const interests = [
    'Thể Hệ 9x', 'Harry Potter', 'SoundCloud',
    'Spa', 'Chăm sóc bản thân',
    'Heavy Metal', 'Tiếc gia đình',
    'Thể dục dụng cụ', 'Phim tài liệu',
    'Phim chính kịch', 'Thiền', 'Âm thực',
    'Sushi', 'Spotify', 'Hockey', 'Bóng rổ',
    'Phim viễn tưởng', 'Tập luyện tại nhà',
    'Nhà hát', 'Trải nghiệm các quán cà phê',
    'Thúy cung', 'Giày Sneaker', 'Instagram',
    'Suối nước nóng', 'Đi đạo', 'Chạy bộ'
  ];

  const handleInterestToggle = (interest) => {
    setSelectedInterests(prev => {
      if (prev.includes(interest)) {
        return prev.filter(item => item !== interest);
      } else {
        return [...prev, interest];
      }
    });
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
            height: '80px',
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
              sx={{ width: 32, height: 32 }}
            />
            <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: '14px' }}>
              Salamingo
            </Typography>
          </Stack>
          
          <Stack direction="row" spacing={1}>
            <IconButton size="small" sx={{ color: 'white' }}>
              <ChatBubbleOutlineIcon sx={{ fontSize: 16 }} />
            </IconButton>
            <IconButton size="small" sx={{ 
              color: 'white',
              backgroundColor: 'rgba(255,255,255,0.2)',
              borderRadius: '6px',
              width: 24,
              height: 24,
            }}>
              <AppsIcon sx={{ fontSize: 14 }} />
            </IconButton>
            <IconButton size="small" sx={{ color: 'white' }}>
              <ViewInArIcon sx={{ fontSize: 16 }} />
            </IconButton>
          </Stack>
        </Box>

        {/* Interests Header */}
        <Box sx={{ 
          padding: '20px', 
          backgroundColor: 'white',
          flexShrink: 0 
        }}>
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
                Sở Thích
              </Typography>
            </Stack>

            <Typography 
              variant="body2" 
              sx={{ 
                color: '#e91e63', 
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Xong
            </Typography>
          </Stack>

          {/* Selected count */}
          <Typography 
            variant="h5" 
            sx={{ 
              color: '#333', 
              fontWeight: 'bold', 
              mb: 1
            }}
          >
            Số Thích
          </Typography>
          
          <Typography 
            variant="body2" 
            sx={{ 
              color: '#666',
              mb: 2
            }}
          >
            ({selectedInterests.length}/5)
          </Typography>

          <Typography 
            variant="body2" 
            sx={{ 
              color: '#666',
              lineHeight: 1.5
            }}
          >
            Chọn các sở thích của những người bạn tìm kiếm. Chọn tối thiểu 3.
          </Typography>
        </Box>

        {/* Interests Grid */}
        <Box sx={{ 
          flex: 1, 
          overflowY: 'auto',
          padding: '0 20px 20px 20px'
        }}>
          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 1.5,
          }}>
            {interests.map((interest, index) => (
              <Chip
                key={index}
                label={interest}
                onClick={() => handleInterestToggle(interest)}
                variant={selectedInterests.includes(interest) ? "filled" : "outlined"}
                sx={{
                  fontSize: '14px',
                  padding: '8px 12px',
                  height: 'auto',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  border: selectedInterests.includes(interest) 
                    ? '2px solid #e91e63' 
                    : '1px solid #ddd',
                  backgroundColor: selectedInterests.includes(interest) 
                    ? '#e91e63' 
                    : 'transparent',
                  color: selectedInterests.includes(interest) 
                    ? 'white' 
                    : '#333',
                  '&:hover': {
                    backgroundColor: selectedInterests.includes(interest) 
                      ? '#d81b60' 
                      : '#f5f5f5',
                    borderColor: '#e91e63'
                  },
                  '& .MuiChip-label': {
                    padding: '4px 8px'
                  }
                }}
              />
            ))}
          </Box>
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
        <Typography variant="h6" sx={{ color: '#999' }}>
          Interests Content Area
        </Typography>
      </Box>
    </Box>
  );
};

export default Interests;