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

const Location = ({ onBack, initialLocation, onLocationSave }) => {
  const [selectedLocation, setSelectedLocation] = useState(initialLocation || 'Hà Nội');

  // Danh sách các vị trí phổ biến
  const locations = [
    { name: 'Hà Nội', country: 'Việt Nam' },
    { name: 'TP. Hồ Chí Minh', country: 'Việt Nam' },
    { name: 'Đà Nẵng', country: 'Việt Nam' },
    { name: 'Hải Phòng', country: 'Việt Nam' },
    { name: 'Cần Thơ', country: 'Việt Nam' },
    { name: 'Bangkok', country: 'Thái Lan' },
    { name: 'Singapore', country: 'Singapore' },
    { name: 'Tokyo', country: 'Nhật Bản' },
    { name: 'New York', country: 'Hoa Kỳ' },
    { name: 'London', country: 'Vương quốc Anh' }
  ];

  const handleLocationSelect = (location) => {
    setSelectedLocation(location.name);
    if (onLocationSave) {
      onLocationSave(location.name);
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

        {/* Location Header */}
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
              Vị trí
            </Typography>
          </Stack>
        </Box>

        {/* Current Location Section */}
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
            VỊ TRÍ HIỆN TẠI
          </Typography>
          
          <Typography 
            variant="body2" 
            sx={{ 
              color: '#333', 
              fontWeight: '500', 
              mb: 3 
            }}
          >
            {selectedLocation}
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
            THÊM VỊ TRÍ
          </Typography>
        </Box>

        {/* Location List */}
        <Box sx={{ flex: 1, overflowY: 'auto', padding: '0 20px 20px 20px' }}>
          <List sx={{ padding: 0 }}>
            {locations.map((location, index) => (
              <React.Fragment key={index}>
                <ListItem 
                  sx={{ 
                    padding: '12px 0', 
                    cursor: 'pointer',
                    '&:hover': { backgroundColor: '#f8f8f8' }
                  }}
                  onClick={() => handleLocationSelect(location)}
                >
                  <Box sx={{ width: '100%' }}>
                    <Typography variant="body2" sx={{ color: '#333', fontWeight: '500' }}>
                      {location.name}
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#999', display: 'block', mt: 0.5 }}>
                      {location.country}
                    </Typography>
                  </Box>
                </ListItem>
                {index < locations.length - 1 && (
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
          Vị trí Content Area
        </Typography>
      </Box>
    </Box>
  );
};

export default Location;