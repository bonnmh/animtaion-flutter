import React from 'react';
import { SafeAreaView, StyleSheet, Dimensions, Text, StatusBar } from 'react-native';

import Album from "./components/Album";
import BottomTab from "./components/BottomTabs";
const backgroundColor = 'rgb(253, 220, 119)'
const { width, height } = Dimensions.get('window');
const SpotifyPlayer = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar barStyle="light-content" />
      <Album />
      <BottomTab />
    </SafeAreaView>
  );
};

export default SpotifyPlayer;

const styles = StyleSheet.create({
  mainContainer: { height, width, backgroundColor },
});
