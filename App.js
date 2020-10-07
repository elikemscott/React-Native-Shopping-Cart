import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CheckOutScreen from './components/CheckOutScreen';
import ShoppinScreen from './components/ShoppinScreen';
import ShopScreen from './components/ShopScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ShoppinScreen/>
      <ShopScreen/> */}

      <CheckOutScreen/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   backgroundColor: 'whitesmoke'
  },
});
