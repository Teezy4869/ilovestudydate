// src/components/GenderSelection.js
import React, { useState } from 'react';
import { 
  Box, 
  Avatar, 
  Typography, 
  IconButton, 
  Stack,
  List,
  ListItem,
  Radio,
  RadioGroup,
  FormControlLabel
} from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import AppsIcon from '@mui/icons-material/Apps';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const GenderSelection = ({ onBack, initialGender = 'Nữ', onGenderSave }) => {
  const [selectedGender, setSelectedGender] = useState(initialGender);

  const genderOptions = [
    { value: 'Nam', label: 'Nam' },
    { value: 'Nữ', label: 'Nữ' },
    { value: 'Khác', label: 'Khác' }
  ];

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };

  const handleSave = () => {
    if (onGenderSave) {
      onGenderSave(selectedGender);
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

        {/* Gender Selection Header */}
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
                Giới Tính
              </Typography>
            </Stack>

            <Typography 
              variant="body2" 
              sx={{ 
                color: '#e91e63', 
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
              onClick={handleSave}
            >
              Xong
            </Typography>
          </Stack>

          <Typography 
            variant="body2" 
            sx={{ 
              color: '#666',
              lineHeight: 1.5,
              mb: 3
            }}
          >
            Chọn giới tính của bạn. Thông tin này sẽ được hiển thị trong hồ sơ của bạn.
          </Typography>
        </Box>

        {/* Gender Options */}
        <Box sx={{ 
          flex: 1, 
          overflowY: 'auto',
          padding: '0 20px'
        }}>
          <RadioGroup
            value={selectedGender}
            onChange={handleGenderChange}
            name="gender-selection"
          >
            <List sx={{ padding: 0 }}>
              {genderOptions.map((option, index) => (
                <ListItem 
                  key={option.value}
                  sx={{ 
                    padding: '16px 0',
                    cursor: 'pointer',
                    borderRadius: '8px',
                    transition: 'background-color 0.2s ease',
                    '&:hover': { 
                      backgroundColor: '#f8f8f8' 
                    },
                    ...(selectedGender === option.value && {
                      backgroundColor: '#f3e5f5'
                    })
                  }}
                  onClick={() => setSelectedGender(option.value)}
                >
                  <FormControlLabel
                    value={option.value}
                    control={
                      <Radio
                        sx={{
                          color: '#ddd',
                          '&.Mui-checked': {
                            color: '#e91e63',
                          },
                          '& .MuiSvgIcon-root': {
                            fontSize: 20,
                          }
                        }}
                      />
                    }
                    label={
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          color: '#333',
                          fontWeight: selectedGender === option.value ? '600' : '400',
                          fontSize: '16px'
                        }}
                      >
                        {option.label}
                      </Typography>
                    }
                    sx={{ 
                      margin: 0,
                      width: '100%',
                      '& .MuiFormControlLabel-label': {
                        flex: 1
                      }
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </RadioGroup>
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
              ⚧️
            </Typography>
          </Box>
          
          <Typography variant="h5" sx={{ 
            color: '#333',
            fontWeight: 'bold',
            mb: 2
          }}>
            Chọn Giới Tính
          </Typography>
          
          <Typography variant="body1" sx={{ 
            color: '#666',
            lineHeight: 1.6,
            mb: 3
          }}>
            Thông tin giới tính giúp chúng tôi cá nhân hóa trải nghiệm của bạn và 
            kết nối bạn với những người phù hợp. Bạn có thể thay đổi thông tin này bất cứ lúc nào.
          </Typography>
          
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
            flexWrap: 'wrap'
          }}>
            <Box sx={{
              padding: '8px 16px',
              backgroundColor: '#e3f2fd',
              borderRadius: '20px',
              color: '#1976d2',
              fontSize: '12px',
              fontWeight: 'bold'
            }}>
              Cá Nhân Hóa
            </Box>
            <Box sx={{
              padding: '8px 16px',
              backgroundColor: '#f3e5f5',
              borderRadius: '20px',
              color: '#8e24aa',
              fontSize: '12px',
              fontWeight: 'bold'
            }}>
              Riêng Tư
            </Box>
            <Box sx={{
              padding: '8px 16px',
              backgroundColor: '#e8f5e8',
              borderRadius: '20px',
              color: '#4caf50',
              fontSize: '12px',
              fontWeight: 'bold'
            }}>
              Linh Hoạt
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default GenderSelection;