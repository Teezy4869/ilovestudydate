import React from 'react';
import { Box, Avatar, Typography, IconButton, Stack } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import SettingsIcon from '@mui/icons-material/Settings';
import EditIcon from '@mui/icons-material/Edit';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import AppsIcon from '@mui/icons-material/Apps';

const Profile = ({ onEditProfile, onSettings }) => {
  return (
    <Box
      sx={{
        width: '360px', // Đổi từ 300px thành 360px để đồng bộ với Settings.js
        height: '100vh',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        boxShadow: '2px 0 10px rgba(0,0,0,0.1)',
      }}
    >
      {/* Header Section with Purple Gradient */}
      <Box
        sx={{
          height: '120px',
          background: 'linear-gradient(135deg, #8e24aa 0%, #5e35b1 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 20px',
          color: 'white',
        }}
      >
        <Stack direction="row" alignItems="center" spacing={2}>
          <Avatar
            alt="Salamingo"
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=500&fit=crop"
            sx={{ width: 40, height: 40 }}
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

      {/* Profile Content */}
      <Box
        sx={{
          flex: 1,
          padding: '30px 20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Back Button and Learnhub Label */}
        <Box sx={{ 
          width: '100%', 
          display: 'flex', 
          alignItems: 'center',
          justifyContent: 'center',
          mb: 3,
          position: 'relative'
        }}>
          <IconButton 
            size="small" 
            sx={{ 
              position: 'absolute',
              left: 0,
              color: '#666'
            }}
          >
            <ArrowBackIosNewIcon sx={{ fontSize: 18 }} />
          </IconButton>
          
          <Box
            sx={{
              border: '2px solid #8e24aa',
              borderRadius: '25px',
              padding: '8px 24px',
              fontSize: '16px',
              fontWeight: 'bold',
              color: '#8e24aa',
              backgroundColor: 'white',
            }}
          >
            Learnhub
          </Box>
        </Box>

        {/* Profile Avatar */}
        <Box sx={{ position: 'relative', mb: 3 }}>
          {/* Progress Circle Background */}
          <Box
            sx={{
              width: 150,
              height: 150,
              borderRadius: '50%',
              background: `conic-gradient(#8e24aa 0deg ${78 * 3.6}deg, #e8e8e8 ${78 * 3.6}deg 360deg)`,
              padding: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Avatar
              alt="Mez"
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=500&fit=crop"
              sx={{ 
                width: 130, 
                height: 130,
                border: '4px solid white',
              }}
            />
          </Box>
          
          {/* Progress Badge */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 10,
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: '#8e24aa',
              color: 'white',
              padding: '4px 12px',
              borderRadius: '15px',
              fontSize: '12px',
              fontWeight: 'bold',
            }}
          >
            78% COMPLETE
          </Box>
        </Box>

        {/* User Name */}
        <Typography 
          variant="h4" 
          sx={{ 
            fontWeight: 'bold', 
            mb: 4,
            textAlign: 'center',
            color: '#333'
          }}
        >
          Mez, 26
        </Typography>

        {/* Action Buttons */}
        <Stack direction="row" spacing={6}>
          <Stack alignItems="center" spacing={1}>
            <IconButton 
              onClick={onSettings}
              sx={{ 
                backgroundColor: '#f5f5f5',
                '&:hover': { backgroundColor: '#eeeeee' },
                width: 48,
                height: 48,
              }}
            >
              <SettingsIcon sx={{ color: '#666' }} />
            </IconButton>
            <Typography 
              variant="caption" 
              sx={{ 
                color: '#999', 
                fontSize: '10px',
                fontWeight: 'bold',
                letterSpacing: '0.5px'
              }}
            >
              SETTINGS
            </Typography>
          </Stack>
          
          <Stack alignItems="center" spacing={1}>
            <IconButton 
              onClick={onEditProfile}
              sx={{ 
                backgroundColor: '#f5f5f5',
                '&:hover': { backgroundColor: '#eeeeee' },
                width: 48,
                height: 48,
              }}
            >
              <EditIcon sx={{ color: '#666' }} />
            </IconButton>
            <Typography 
              variant="caption" 
              sx={{ 
                color: '#999', 
                fontSize: '10px',
                fontWeight: 'bold',
                letterSpacing: '0.5px'
              }}
            >
              EDIT PROFILE
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default Profile;