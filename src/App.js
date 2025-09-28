import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Profile from './components/Profile';
import EditProfile from './components/EditProfile';
import Settings from './components/Settings';
import Interests from './components/Interests';
import GenderSelection from './components/GenderSelection';
import ShowMeGender from './components/ShowMeGender';

function App() {
  const [currentView, setCurrentView] = useState('profile');
  const [previousView, setPreviousView] = useState(null);
  const [userGender, setUserGender] = useState('Nữ');
  const [showMeGender, setShowMeGender] = useState('Women');

  const changeView = (newView) => {
    setPreviousView(currentView);
    setCurrentView(newView);
  };

  const handleEditProfile = () => {
    changeView('editProfile');
  };

  const handleSettings = () => {
    changeView('settings');
  };

  const handleInterests = () => {
    changeView('interests');
  };

  const handleGenderSelection = () => {
    changeView('genderSelection');
  };

  const handleShowMeGenderSelection = () => {
    changeView('showMeGenderSelection');
  };

  const handleBack = () => {
    setCurrentView(previousView || 'profile');
  };

  const handleBackToProfile = () => {
    setCurrentView('profile');
  };

  const handleGenderSave = (selectedGender) => {
    setUserGender(selectedGender);
    console.log('Gender updated to:', selectedGender);
  };

  const handleShowMeGenderSave = (selectedShowMeGender) => {
    setShowMeGender(selectedShowMeGender);
    console.log('Show Me Gender updated to:', selectedShowMeGender);
  };

  // Render ShowMeGenderSelection view
  if (currentView === 'showMeGenderSelection') {
    return (
      <ShowMeGender 
        onBack={handleBack}
        initialShowMeGender={showMeGender}
        onShowMeGenderSave={handleShowMeGenderSave}
      />
    );
  }

  // Render GenderSelection view
  if (currentView === 'genderSelection') {
    return (
      <GenderSelection 
        onBack={handleBack}
        initialGender={userGender}
        onGenderSave={handleGenderSave}
      />
    );
  }

  // Render Interests view
  if (currentView === 'interests') {
    return <Interests onBack={handleBack} />;
  }

  // Render Settings view
  if (currentView === 'settings') {
    return (
      <Settings 
        onBack={handleBackToProfile} 
        onInterests={handleInterests}
        onShowMeGenderSelection={handleShowMeGenderSelection}
        showMeGender={showMeGender}
      />
    );
  }

  // Render EditProfile view
  if (currentView === 'editProfile') {
    return (
      <EditProfile 
        onBack={handleBackToProfile}
        onInterests={handleInterests}
        onGenderSelection={handleGenderSelection}
        currentGender={userGender}
      />
    );
  }

  // Render default Profile view
  return (
    <Box sx={{ 
      display: 'flex', 
      height: '100vh', 
      backgroundColor: '#e8e8e8'
    }}>
      {/* Sidebar Profile */}
      <Profile 
        onEditProfile={handleEditProfile}
        onSettings={handleSettings}
      />
      
      {/* Main Content Area */}
      <Box sx={{ 
        flexGrow: 1, 
        backgroundColor: '#f5f5f5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Box sx={{
          textAlign: 'center',
          padding: '40px'
        }}>
          <Typography variant="h4" sx={{ 
            color: '#666',
            fontWeight: 'bold',
            mb: 2
          }}>
            Welcome to Salamingo
          </Typography>
          <Typography variant="body1" sx={{ 
            color: '#999',
            maxWidth: '400px',
            lineHeight: 1.6
          }}>
            Select a section from the profile sidebar to get started. 
            You can edit your profile, adjust settings, and manage your interests.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default App;