import React from 'react';
import { 
  Box, 
  Avatar, 
  Typography, 
  IconButton, 
  Stack, 
  List,
  ListItem,
  ListItemText,
  Divider,
  Slider
} from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import AppsIcon from '@mui/icons-material/Apps';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Settings = ({ onBack, onInterests, onShowMeGenderSelection, showMeGender = 'Women' }) => {
  const settingsItems = [
    {
      category: 'ACCOUNT SETTINGS',
      items: [
        { 
          label: 'Phone Number', 
          value: '0962853963', 
          hasArrow: true 
        },
        { 
          label: 'Email', 
          value: 'loremipsum@gmail.com', 
          hasArrow: true 
        },
        { 
          label: 'DISCOVERY', 
          description: 'A verified Phone Number and Email help secure your account.',
          hasArrow: true,
          isCategory: true 
        }
      ]
    },
    {
      category: 'PREFERENCES',
      items: [
        { 
          label: 'Location', 
          value: 'My Current Location',
          subtitle: 'Santa Ana, CA',
          hasArrow: true 
        },
        { 
          label: 'Show me', 
          value: showMeGender === 'Women' ? 'Phụ nữ' : showMeGender === 'Men' ? 'Nam giới' : 'Tất cả mọi người', 
          hasArrow: true,
          onClick: onShowMeGenderSelection
        },
        { 
          label: 'Age Preference', 
          value: '18-23',
          hasSlider: true,
          sliderValue: [18, 23],
          hasArrow: false 
        },
        { 
          label: 'Ethnicity', 
          value: 'Asian', 
          hasArrow: true 
        },
        { 
          label: 'Interests', 
          value: 'Spotify, Heavy Metal, Sushi...', 
          hasArrow: true,
          onClick: onInterests 
        }
      ]
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

        {/* Settings Header */}
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
                color: '#333', 
                fontWeight: 'bold', 
                fontSize: '16px',
                cursor: 'pointer'
              }}
            >
              Settings
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
          
          {/* Learnhub Badge */}
          <Box
            sx={{
              border: '2px solid #8e24aa',
              borderRadius: '25px',
              padding: '8px 24px',
              fontSize: '16px',
              fontWeight: 'bold',
              color: '#8e24aa',
              backgroundColor: 'white',
              display: 'inline-block',
              mb: 2,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              '&:hover': {
                backgroundColor: '#f3e5f5',
                transform: 'translateY(-1px)'
              }
            }}
          >
            Learnhub
          </Box>
        </Box>

        {/* Settings List */}
        <Box sx={{ flex: 1, overflowY: 'auto' }}>
          {settingsItems.map((section, sectionIndex) => (
            <Box key={sectionIndex}>
              {section.category && (
                <Typography 
                  variant="caption" 
                  sx={{ 
                    color: '#999', 
                    fontWeight: 'bold',
                    padding: '16px 20px 8px 20px',
                    display: 'block',
                    letterSpacing: '0.5px'
                  }}
                >
                  {section.category}
                </Typography>
              )}
              
              <List sx={{ padding: 0 }}>
                {section.items.map((item, itemIndex) => (
                  <React.Fragment key={itemIndex}>
                    <ListItem 
                      sx={{ 
                        padding: '12px 20px', 
                        cursor: item.hasArrow ? 'pointer' : 'default',
                        transition: 'background-color 0.2s ease',
                        '&:hover': item.hasArrow ? { 
                          backgroundColor: '#f8f8f8' 
                        } : {}
                      }}
                      onClick={item.onClick ? item.onClick : undefined}
                    >
                      <Box sx={{ width: '100%' }}>
                        {item.isCategory ? (
                          <Box>
                            <Typography variant="body2" sx={{ 
                              color: '#333', 
                              fontWeight: 'bold',
                              mb: 0.5
                            }}>
                              {item.label}
                            </Typography>
                            <Typography variant="caption" sx={{ 
                              color: '#999',
                              lineHeight: 1.4
                            }}>
                              {item.description}
                            </Typography>
                          </Box>
                        ) : (
                          <Box sx={{ 
                            display: 'flex', 
                            justifyContent: 'space-between', 
                            alignItems: 'center',
                            width: '100%'
                          }}>
                            <Box sx={{ flex: 1 }}>
                              <Typography variant="body2" sx={{ 
                                color: '#333',
                                fontWeight: '500'
                              }}>
                                {item.label}
                              </Typography>
                              {item.subtitle && (
                                <Typography variant="caption" sx={{ 
                                  color: '#999',
                                  display: 'block',
                                  mt: 0.5
                                }}>
                                  {item.subtitle}
                                </Typography>
                              )}
                              {item.hasSlider && (
                                <Box sx={{ mt: 2, mb: 1, pr: 4 }}>
                                  <Slider
                                    value={item.sliderValue}
                                    min={18}
                                    max={35}
                                    valueLabelDisplay="auto"
                                    sx={{
                                      color: '#e91e63',
                                      '& .MuiSlider-thumb': {
                                        backgroundColor: '#e91e63',
                                        width: 20,
                                        height: 20,
                                        '&:hover': {
                                          boxShadow: '0px 0px 0px 8px rgba(233, 30, 99, 0.16)'
                                        }
                                      },
                                      '& .MuiSlider-track': {
                                        backgroundColor: '#e91e63',
                                        height: 4
                                      },
                                      '& .MuiSlider-rail': {
                                        backgroundColor: '#ddd',
                                        height: 4
                                      },
                                      '& .MuiSlider-valueLabel': {
                                        backgroundColor: '#e91e63'
                                      }
                                    }}
                                  />
                                </Box>
                              )}
                            </Box>
                            
                            <Box sx={{ 
                              display: 'flex', 
                              alignItems: 'center',
                              ml: 2
                            }}>
                              {!item.hasSlider && item.value && (
                                <Typography variant="body2" sx={{ 
                                  color: '#999',
                                  mr: item.hasArrow ? 1 : 0,
                                  fontSize: '13px'
                                }}>
                                  {item.value}
                                </Typography>
                              )}
                              {item.hasSlider && (
                                <Typography variant="body2" sx={{ 
                                  color: '#999',
                                  mr: item.hasArrow ? 1 : 0,
                                  fontSize: '13px'
                                }}>
                                  {item.value}
                                </Typography>
                              )}
                              {item.hasArrow && (
                                <ArrowForwardIosIcon sx={{ 
                                  fontSize: 14, 
                                  color: '#ccc',
                                  transition: 'color 0.2s ease'
                                }} />
                              )}
                            </Box>
                          </Box>
                        )}
                      </Box>
                    </ListItem>
                    {itemIndex < section.items.length - 1 && (
                      <Divider sx={{ margin: '0 20px' }} />
                    )}
                  </React.Fragment>
                ))}
              </List>
              
              {sectionIndex < settingsItems.length - 1 && (
                <Box sx={{ height: '20px' }} />
              )}
            </Box>
          ))}
          
          {/* Bottom Actions */}
          <Box sx={{ padding: '20px', textAlign: 'center' }}>
            <Typography 
              variant="body2" 
              sx={{ 
                color: '#333', 
                mb: 2,
                cursor: 'pointer',
                fontWeight: '500',
                transition: 'color 0.2s ease',
                '&:hover': { 
                  color: '#e91e63' 
                }
              }}
            >
              Log out
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                color: '#f44336', 
                mb: 3,
                cursor: 'pointer',
                fontWeight: '500',
                transition: 'color 0.2s ease',
                '&:hover': { 
                  color: '#d32f2f' 
                }
              }}
            >
              Delete account
            </Typography>
            
            {/* Bottom Learnhub Badge */}
            <Box
              sx={{
                border: '2px solid #8e24aa',
                borderRadius: '25px',
                padding: '8px 24px',
                fontSize: '14px',
                fontWeight: 'bold',
                color: '#8e24aa',
                backgroundColor: 'white',
                display: 'inline-block',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                '&:hover': {
                  backgroundColor: '#f3e5f5',
                  transform: 'translateY(-1px)',
                  boxShadow: '0 2px 8px rgba(142, 36, 170, 0.2)'
                }
              }}
            >
              Learnhub
            </Box>
            
            {/* Version info */}
            <Typography 
              variant="caption" 
              sx={{ 
                color: '#ccc',
                display: 'block',
                mt: 3,
                fontSize: '11px'
              }}
            >
              Version 2.1.0
            </Typography>
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
        <Box sx={{
          textAlign: 'center',
          padding: '40px',
          maxWidth: '500px'
        }}>
          <Box sx={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #8e24aa 0%, #5e35b1 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 24px auto'
          }}>
            <AppsIcon sx={{ fontSize: 40, color: 'white' }} />
          </Box>
          
          <Typography variant="h5" sx={{ 
            color: '#333',
            fontWeight: 'bold',
            mb: 2
          }}>
            Settings Panel
          </Typography>
          
          <Typography variant="body1" sx={{ 
            color: '#666',
            lineHeight: 1.6,
            mb: 3
          }}>
            Configure your account preferences, privacy settings, and notification options from the sidebar menu. 
            All changes are saved automatically.
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
              Account Security
            </Box>
            <Box sx={{
              padding: '8px 16px',
              backgroundColor: '#f3e5f5',
              borderRadius: '20px',
              color: '#8e24aa',
              fontSize: '12px',
              fontWeight: 'bold'
            }}>
              Privacy Controls
            </Box>
            <Box sx={{
              padding: '8px 16px',
              backgroundColor: '#fff3e0',
              borderRadius: '20px',
              color: '#f57c00',
              fontSize: '12px',
              fontWeight: 'bold'
            }}>
              Notifications
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Settings;