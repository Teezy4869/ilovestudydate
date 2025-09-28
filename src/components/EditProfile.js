// src/components/EditProfile.js
import React, { useState } from 'react';
import { 
  Box, 
  Avatar, 
  Typography, 
  IconButton, 
  Stack, 
  Button,
  TextField,
  List,
  ListItem,
  ListItemText,
  Divider,
  Grid
} from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import AppsIcon from '@mui/icons-material/Apps';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const EditProfile = ({ onBack, onInterests, onGenderSelection, currentGender = 'Woman' }) => {
  const [photos, setPhotos] = useState([
    'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop',
    'https://images.unsplash.com/photo-1494790108755-2616b332c265?w=200&h=200&fit=crop',
    'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200&h=200&fit=crop'
  ]);

  const addPhoto = () => {
    console.log('Add new photo');
  };

  const removePhoto = (index) => {
    const newPhotos = photos.filter((_, i) => i !== index);
    setPhotos(newPhotos);
  };

  const profileSections = [
    { 
      label: 'EDUCATION', 
      value: 'University', 
      hasArrow: true 
    },
    { 
      label: 'ABOUT ME', 
      value: '', 
      hasArrow: false, 
      isTextarea: true, 
      placeholder: 'Nếu ngày mai tôi bị bỏy phô cần thi b có tiếc vì đã lướt qua ko', 
      maxLength: 450 
    },
    { 
      label: 'INTERESTS', 
      value: 'Gym, Thể thao, The Liems, So ti', 
      hasArrow: true,
      onClick: onInterests 
    },
    { 
      label: 'GENDER', 
      value: currentGender, 
      hasArrow: true,
      onClick: onGenderSelection
    },
    { 
      label: 'LANGUAGE', 
      value: 'Tiếng Việt, Tiếng Anh', 
      hasArrow: true 
    },
    { 
      label: 'Ngành học', 
      value: 'Quản trị kinh doanh', 
      hasArrow: true 
    }
  ];

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

        {/* Edit Profile Header */}
        <Box sx={{ 
          padding: '24px', 
          textAlign: 'center', 
          backgroundColor: 'white',
          flexShrink: 0 
        }}>
          {/* Navigation Tabs */}
          <Stack direction="row" justifyContent="center" spacing={6} sx={{ mb: 2 }}>
            <Typography 
              variant="h6" 
              sx={{ 
                color: '#e91e63', 
                fontWeight: 'bold', 
                fontSize: '16px',
                cursor: 'pointer'
              }}
            >
              Edit
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 'bold', 
                fontSize: '16px', 
                color: '#333'
              }}
            >
              Edit Info
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                color: '#e91e63', 
                fontWeight: 'bold', 
                fontSize: '16px',
                cursor: 'pointer',
                '&:hover': {
                  color: '#d81b60'
                }
              }}
              onClick={onBack}
            >
              Done
            </Typography>
          </Stack>
          
          <Typography variant="body2" sx={{ color: '#999', mb: 3 }}>
            Preview
          </Typography>

          {/* Photo Grid - 3x3 Layout */}
          <Grid container spacing={1.5} sx={{ maxWidth: '350px', margin: '0 auto' }}>
            {/* Row 1 - Existing Photos */}
            {photos.map((photo, index) => (
              <Grid item xs={4} key={`photo-${index}`}>
                <Box sx={{ position: 'relative' }}>
                  <Box
                    sx={{
                      width: '100%',
                      paddingTop: '130%',
                      backgroundImage: `url(${photo})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      borderRadius: '12px',
                      position: 'relative'
                    }}
                  />
                  <IconButton
                    size="small"
                    onClick={() => removePhoto(index)}
                    sx={{
                      position: 'absolute',
                      top: 6,
                      right: 6,
                      backgroundColor: 'rgba(255,255,255,0.9)',
                      color: '#666',
                      width: 20,
                      height: 20,
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                      '&:hover': { backgroundColor: 'white' }
                    }}
                  >
                    <CloseIcon sx={{ fontSize: 12 }} />
                  </IconButton>
                </Box>
              </Grid>
            ))}

            {/* Empty Slots for Adding Photos */}
            {Array.from({ length: 6 }).map((_, index) => (
              <Grid item xs={4} key={`empty-${index}`}>
                <Box
                  onClick={addPhoto}
                  sx={{
                    width: '100%',
                    paddingTop: '130%',
                    border: '2px dashed #ddd',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    position: 'relative',
                    backgroundColor: '#fafafa',
                    transition: 'all 0.2s ease',
                    '&:hover': { 
                      borderColor: '#8e24aa',
                      backgroundColor: '#f8f8f8'
                    }
                  }}
                >
                  <IconButton
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      backgroundColor: '#8e24aa',
                      color: 'white',
                      width: 28,
                      height: 28,
                      '&:hover': { backgroundColor: '#7b1fa2' }
                    }}
                  >
                    <AddIcon sx={{ fontSize: 16 }} />
                  </IconButton>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Profile Sections */}
        <Box sx={{ flex: 1, overflowY: 'auto' }}>
          <List sx={{ padding: 0 }}>
            {profileSections.map((section, index) => (
              <React.Fragment key={index}>
                <ListItem sx={{ 
                  padding: '16px 20px', 
                  flexDirection: 'column', 
                  alignItems: 'flex-start',
                  cursor: section.hasArrow ? 'pointer' : 'default',
                  transition: 'background-color 0.2s ease',
                  '&:hover': section.hasArrow ? { 
                    backgroundColor: '#f8f8f8' 
                  } : {}
                }}
                onClick={section.onClick ? section.onClick : undefined}
                >
                  <Typography variant="caption" sx={{ 
                    color: '#999', 
                    fontWeight: 'bold', 
                    mb: 1, 
                    fontSize: '11px', 
                    letterSpacing: '0.5px' 
                  }}>
                    {section.label}
                  </Typography>
                  
                  {section.isTextarea ? (
                    <Box sx={{ width: '100%', position: 'relative' }}>
                      <TextField
                        multiline
                        rows={3}
                        placeholder={section.placeholder}
                        variant="outlined"
                        size="small"
                        sx={{ 
                          width: '100%',
                          '& .MuiOutlinedInput-root': {
                            fontSize: '14px',
                            lineHeight: 1.4,
                            borderRadius: '8px'
                          },
                          '& .MuiOutlinedInput-input': {
                            padding: '12px'
                          }
                        }}
                      />
                      <Typography 
                        variant="caption" 
                        sx={{ 
                          position: 'absolute', 
                          bottom: -18, 
                          right: 0, 
                          color: '#999',
                          fontSize: '10px'
                        }}
                      >
                        {section.maxLength}
                      </Typography>
                    </Box>
                  ) : (
                    <Box sx={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center', 
                      width: '100%',
                      minHeight: '32px'
                    }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flex: 1 }}>
                        <Typography variant="body2" sx={{ 
                          color: '#333', 
                          fontSize: '14px',
                          fontWeight: '500'
                        }}>
                          {section.value}
                        </Typography>
                      </Box>
                      {section.hasArrow && (
                        <ArrowForwardIosIcon sx={{ 
                          fontSize: 12, 
                          color: '#ccc',
                          transition: 'color 0.2s ease'
                        }} />
                      )}
                    </Box>
                  )}
                </ListItem>
                {index < profileSections.length - 1 && (
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
              ✏️
            </Typography>
          </Box>
          
          <Typography variant="h5" sx={{ 
            color: '#333',
            fontWeight: 'bold',
            mb: 2
          }}>
            Edit Your Profile
          </Typography>
          
          <Typography variant="body1" sx={{ 
            color: '#666',
            lineHeight: 1.6,
            mb: 3
          }}>
            Customize your profile to showcase your personality. Add photos, update your interests, 
            and share what makes you unique. Your profile helps others get to know the real you.
          </Typography>
          
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
            flexWrap: 'wrap'
          }}>
            <Box sx={{
              padding: '8px 16px',
              backgroundColor: '#ffebee',
              borderRadius: '20px',
              color: '#e91e63',
              fontSize: '12px',
              fontWeight: 'bold'
            }}>
              Add Photos
            </Box>
            <Box sx={{
              padding: '8px 16px',
              backgroundColor: '#f3e5f5',
              borderRadius: '20px',
              color: '#8e24aa',
              fontSize: '12px',
              fontWeight: 'bold'
            }}>
              Update Interests
            </Box>
            <Box sx={{
              padding: '8px 16px',
              backgroundColor: '#e8f5e8',
              borderRadius: '20px',
              color: '#4caf50',
              fontSize: '12px',
              fontWeight: 'bold'
            }}>
              Express Yourself
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EditProfile;