import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Profile from './components/Profile';
import EditProfile from './components/EditProfile';
import Settings from './components/Settings';
import Interests from './components/Interests';
import GenderSelection from './components/GenderSelection';
import Major from './components/Major';
import Nationality from './components/Nationality';
import Location from './components/Location';
import Contact from './components/Contact';

function App() {
  const [currentView, setCurrentView] = useState('profile');
  const [previousView, setPreviousView] = useState(null);
  const [userGender, setUserGender] = useState('Nữ');
  const [major, setMajor] = useState('Công nghệ thông tin');
  const [nationality, setNationality] = useState('Việt Nam');
  const [location, setLocation] = useState('Hà Nội');
  const [phoneNumber, setPhoneNumber] = useState('0962853963');
  const [email, setEmail] = useState('loremipsum@gmail.com');

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

  const handleMajorSelection = () => {
    changeView('majorSelection');
  };

  const handleNationalitySelection = () => {
    changeView('nationalitySelection');
  };

  const handleLocationSelection = () => {
    changeView('locationSelection');
  };

  const handleContactSelection = () => {
    changeView('contact');
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

  const handleMajorSave = (selectedMajor) => {
    setMajor(selectedMajor);
    console.log('Major updated to:', selectedMajor);
  };

  const handleNationalitySave = (selectedNationality) => {
    setNationality(selectedNationality);
    console.log('Nationality updated to:', selectedNationality);
  };

  const handleLocationSave = (selectedLocation) => {
    setLocation(selectedLocation);
    console.log('Location updated to:', selectedLocation);
  };

  const handleContactSave = ({ phoneNumber, email }) => {
    setPhoneNumber(phoneNumber);
    setEmail(email);
    console.log('Contact updated:', { phoneNumber, email });
  };

  // Render Contact view
  if (currentView === 'contact') {
    return (
      <Contact 
        onBack={handleBack}
        initialPhoneNumber={phoneNumber}
        initialEmail={email}
        onContactSave={handleContactSave}
      />
    );
  }

  // Render MajorSelection view
  if (currentView === 'majorSelection') {
    return (
      <Major 
        onBack={handleBack}
        initialMajor={major}
        onMajorSave={handleMajorSave}
      />
    );
  }

  // Render NationalitySelection view
  if (currentView === 'nationalitySelection') {
    return (
      <Nationality 
        onBack={handleBack}
        initialNationality={nationality}
        onNationalitySave={handleNationalitySave}
      />
    );
  }

  // Render LocationSelection view
  if (currentView === 'locationSelection') {
    return (
      <Location 
        onBack={handleBack}
        initialLocation={location}
        onLocationSave={handleLocationSave}
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
        onMajorSelection={handleMajorSelection}
        onNationalitySelection={handleNationalitySelection}
        onLocationSelection={handleLocationSelection}
        onContactSelection={handleContactSelection}
        currentMajor={major}
        currentNationality={nationality}
        currentLocation={location}
        currentPhoneNumber={phoneNumber}
        currentEmail={email}
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
        onMajorSelection={handleMajorSelection}
        onNationalitySelection={handleNationalitySelection}
        onLocationSelection={handleLocationSelection}
        currentMajor={major}
        currentNationality={nationality}
        currentLocation={location}
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