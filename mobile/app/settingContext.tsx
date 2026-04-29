import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type SettingsType = {
  displayProfilePicture: boolean;
  showBranch: boolean;
  showBatch: boolean;
  showCurrentLocation: boolean;
  showCurrentWorkplace: boolean;
  showProfessionalExperience: boolean;
  onlineNotification: boolean;
  connectRequests: boolean;
  protectionForInformation: boolean;
};

const defaultSettings: SettingsType = {
  displayProfilePicture: true,
  showBranch: true,
  showBatch: true,
  showCurrentLocation: false,
  showCurrentWorkplace: false,
  showProfessionalExperience: false,
  onlineNotification: true,
  connectRequests: true,
  protectionForInformation: false,
};

type SettingsContextType = {
  settings: SettingsType;
  updateSettings: (newSettings: Partial<SettingsType>) => void;
  saveSettings: () => Promise<void>;
  loadSettings: () => Promise<void>;
};

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<SettingsType>(defaultSettings);

  const loadSettings = async () => {
    try {
      const stored = await AsyncStorage.getItem('appSettings');
      if (stored) {
        setSettings(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Failed to load settings', error);
    }
  };

  const updateSettings = (newSettings: Partial<SettingsType>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  const saveSettings = async () => {
    try {
      await AsyncStorage.setItem('appSettings', JSON.stringify(settings));
    } catch (error) {
      console.error('Failed to save settings', error);
    }
  };

  useEffect(() => {
    loadSettings();
  }, []);

  return (
    <SettingsContext.Provider value={{ settings, updateSettings, saveSettings, loadSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) throw new Error('useSettings must be used within SettingsProvider');
  return context;
};