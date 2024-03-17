import React from 'react';
import { View, Button } from 'react-native';
import { supabase } from '../config/supabaseconfig';// Import Supabase client

const Logout = ({ navigation }) => {
  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      // Redirect to the login screen or perform any other action after logout
      navigation.navigate('Login'); // Assuming you have a 'Login' screen
    } catch (error) {
      console.error('Error logging out:', error.message);
    }
  };

  return (
    <View>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default Logout;
