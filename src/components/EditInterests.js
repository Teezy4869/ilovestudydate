// src/components/EditInterests.js
import React, { useState } from 'react';
import { 
  Box, 
  Avatar, 
  Typography, 
  IconButton, 
  Stack,
  Chip,
  Button
} from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import AppsIcon from '@mui/icons-material/Apps';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const EditInterests = ({ onBack, onSave, initialInterests = ['Spotify'] }) => {
  const [selectedInterests, setSelectedInterests] = useState(initialInterests);

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
    'Suối nước nóng', 'Đi đạo', 'Chạy bộ',
    'Gym', 'Thể thao', 'The Liems', 'So ti',
    'Du lịch', 'Đọc sách', 'Nấu ăn', 'Nhiếp ảnh',
    'Học ngoại ngữ', 'Yoga', 'Đàn piano', 'Vẽ tranh'
  ];

  const handleInterestToggle = (interest) => {
    setSelectedInterests(prev => {
      if (prev.includes(interest)) {
        return prev.filter(item => item !== interest);
      } else {
        // Giới hạn tối đa 10 sở thích
        if (prev.length >= 10) {
          return prev;
        }
        return [...prev, interest];
      }
    });
  };

  const handleSave = () => {
    if (onSave) {
      onSave(selectedInterests);
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
          width: '400px',
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

        {/* Edit Interests Header */}
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
                Edit Interests
              </Typography>
            </Stack>

            <Button
              onClick={handleSave}
              sx={{
                color: '#e91e63',
                fontWeight: 'bold',
                fontSize: '14px',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: 'rgba(233, 30, 99, 0.1)'
                }
              }}
            >
              Save
            </Button>
          </Stack>

          {/* Selected count and info */}
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#333', 
              fontWeight: 'bold', 
              mb: 1
            }}
          >
            Your Interests
          </Typography>
          
          <Typography 
            variant="body2" 
            sx={{ 
              color: '#666',
              mb: 2
            }}
          >
            Selected: {selectedInterests.length}/10
          </Typography>

          <Typography 
            variant="body2" 
            sx={{ 
              color: '#666',
              lineHeight: 1.5,
              mb: 2
            }}
          >
            Choose interests that represent who you are. This helps others connect with you.
          </Typography>

          {/* Currently Selected Interests Preview */}
          {selectedInterests.length > 0 && (
            <Box sx={{ mb: 2 }}>
              <Typography 
                variant="caption" 
                sx={{ 
                  color: '#999', 
                  fontWeight: 'bold',
                  display: 'block',
                  mb: 1
                }}
              >
                CURRENTLY SELECTED
              </Typography>
              <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 0.5,
              }}>
                {selectedInterests.map((interest, index) => (
                  <Chip
                    key={`selected-${index}`}
                    label={interest}
                    size="small"
                    sx={{
                      backgroundColor: '#e91e63',
                      color: 'white',
                      fontSize: '12px',
                      height: '24px'
                    }}
                  />
                ))}
              </Box>
            </Box>
          )}
        </Box>

        {/* Interests Grid */}
        <Box sx={{ 
          flex: 1, 
          overflowY: 'auto',
          padding: '0 20px 20px 20px'
        }}>
          <Typography 
            variant="caption" 
            sx={{ 
              color: '#999', 
              fontWeight: 'bold',
              display: 'block',
              mb: 2,
              letterSpacing: '0.5px'
            }}
          >
            ALL INTERESTS
          </Typography>
          
          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 1.5,
          }}>
            {interests.map((interest, index) => {
              const isSelected = selectedInterests.includes(interest);
              const isMaxReached = selectedInterests.length >= 10 && !isSelected;
              
              return (
                <Chip
                  key={index}
                  label={interest}
                  onClick={() => !isMaxReached && handleInterestToggle(interest)}
                  variant={isSelected ? "filled" : "outlined"}
                  disabled={isMaxReached}
                  sx={{
                    fontSize: '14px',
                    padding: '8px 12px',
                    height: 'auto',
                    borderRadius: '20px',
                    cursor: isMaxReached ? 'not-allowed' : 'pointer',
                    border: isSelected 
                      ? '2px solid #e91e63' 
                      : '1px solid #ddd',
                    backgroundColor: isSelected 
                      ? '#e91e63' 
                      : isMaxReached 
                        ? '#f5f5f5' 
                        : 'transparent',
                    color: isSelected 
                      ? 'white' 
                      : isMaxReached 
                        ? '#ccc' 
                        : '#333',
                    opacity: isMaxReached ? 0.5 : 1,
                    transition: 'all 0.2s ease',
                    '&:hover': !isMaxReached ? {
                      backgroundColor: isSelected 
                        ? '#d81b60' 
                        : '#f8f8f8',
                      borderColor: '#e91e63',
                      transform: 'translateY(-1px)',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                    } : {},
                    '&.Mui-disabled': {
                      opacity: 0.5
                    },
                    '& .MuiChip-label': {
                      padding: '4px 8px',
                      fontWeight: isSelected ? 'bold' : 'normal'
                    }
                  }}
                />
              );
            })}
          </Box>

          {/* Max limit warning */}
          {selectedInterests.length >= 10 && (
            <Box sx={{
              mt: 3,
              p: 2,
              backgroundColor: '#fff3cd',
              borderRadius: '8px',
              border: '1px solid #ffeaa7'
            }}>
              <Typography variant="body2" sx={{ 
                color: '#856404',
                textAlign: 'center',
                fontWeight: '500'
              }}>
                You've reached the maximum of 10 interests. Remove some to add new ones.
              </Typography>
            </Box>
          )}
        </Box>

        {/* Bottom Save Button */}
        <Box sx={{ p: 3, backgroundColor: 'white', borderTop: '1px solid #eee' }}>
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
            Save Interests ({selectedInterests.length})
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
        <Box sx={{
          textAlign: 'center',
          padding: '40px',
          maxWidth: '500px'
        }}>
          <Box sx={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #e91e63 0%, #8e24aa 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 24px auto'
          }}>
            <Typography variant="h3" sx={{ color: 'white' }}>
              ♥
            </Typography>
          </Box>
          
          <Typography variant="h5" sx={{ 
            color: '#333',
            fontWeight: 'bold',
            mb: 2
          }}>
            Edit Your Interests
          </Typography>
          
          <Typography variant="body1" sx={{ 
            color: '#666',
            lineHeight: 1.6,
            mb: 3
          }}>
            Select interests that best represent your personality and hobbies. 
            These help others understand what you're passionate about and can be great conversation starters.
          </Typography>
          
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
            flexWrap: 'wrap'
          }}>
            <Box sx={{
              padding: '6px 12px',
              backgroundColor: '#ffebee',
              borderRadius: '16px',
              color: '#e91e63',
              fontSize: '12px',
              fontWeight: 'bold'
            }}>
              Max 10 interests
            </Box>
            <Box sx={{
              padding: '6px 12px',
              backgroundColor: '#f3e5f5',
              borderRadius: '16px',
              color: '#8e24aa',
              fontSize: '12px',
              fontWeight: 'bold'
            }}>
              Show your personality
            </Box>
            <Box sx={{
              padding: '6px 12px',
              backgroundColor: '#e8f5e8',
              borderRadius: '16px',
              color: '#4caf50',
              fontSize: '12px',
              fontWeight: 'bold'
            }}>
              Connect with others
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EditInterests;