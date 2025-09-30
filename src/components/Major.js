import React, { useState } from 'react';
import { 
  Box, 
  Avatar, 
  Typography, 
  IconButton, 
  Stack, 
  List,
  ListItem,
  Divider
} from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import AppsIcon from '@mui/icons-material/Apps';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Major = ({ onBack, initialMajor, onMajorSave }) => {
  const [selectedMajor, setSelectedMajor] = useState(initialMajor || 'Công nghệ thông tin');

  // Danh sách các ngành học phổ biến
  const majors = [
    { name: 'Công nghệ thông tin' },
    { name: 'Kinh tế' },
    { name: 'Y học' },
    { name: 'Kỹ thuật cơ khí' },
    { name: 'Kiến trúc' },
    { name: 'Luật' },
    { name: 'Sư phạm' },
    { name: 'Marketing' },
    { name: 'Khoa học môi trường' },
    { name: 'Ngôn ngữ học' }
  ];

  const handleMajorSelect = (major) => {
    setSelectedMajor(major.name);
    if (onMajorSave) {
      onMajorSave(major.name);
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

        {/* Major Header */}
        <Box sx={{ padding: '20px', backgroundColor: 'white', flexShrink: 0 }}>
          {/* Back Button and Title */}
          <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
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
              Ngành học
            </Typography>
          </Stack>
        </Box>

        {/* Current Major Section */}
        <Box sx={{ padding: '0 20px' }}>
          <Typography 
            variant="caption" 
            sx={{ 
              color: '#999', 
              fontWeight: 'bold', 
              mb: 2, 
              display: 'block' 
            }}
          >
            NGÀNH HỌC HIỆN TẠI
          </Typography>
          
          <Typography 
            variant="body2" 
            sx={{ 
              color: '#333', 
              fontWeight: '500', 
              mb: 3 
            }}
          >
            {selectedMajor}
          </Typography>
        </Box>

        {/* Add New Button */}
        <Box sx={{ padding: '0 20px' }}>
          <Typography 
            variant="body2" 
            sx={{ 
              color: '#e91e63', 
              fontWeight: 'bold', 
              mb: 2,
              cursor: 'pointer'
            }}
          >
            THÊM NGÀNH HỌC
          </Typography>
        </Box>

        {/* Major List */}
        <Box sx={{ flex: 1, overflowY: 'auto', padding: '0 20px 20px 20px' }}>
          <List sx={{ padding: 0 }}>
            {majors.map((major, index) => (
              <React.Fragment key={index}>
                <ListItem 
                  sx={{ 
                    padding: '12px 0', 
                    cursor: 'pointer',
                    '&:hover': { backgroundColor: '#f8f8f8' }
                  }}
                  onClick={() => handleMajorSelect(major)}
                >
                  <Box sx={{ width: '100%' }}>
                    <Typography variant="body2" sx={{ color: '#333', fontWeight: '500' }}>
                      {major.name}
                    </Typography>
                  </Box>
                </ListItem>
                {index < majors.length - 1 && (
                  <Divider sx={{ margin: '0 20px' }} />
                )}
              </React.Fragment>
            ))}
          </List>
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
          Ngành học Content Area
        </Typography>
      </Box>
    </Box>
  );
};

export default Major;