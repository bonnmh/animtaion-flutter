import React from 'react';
import {View, Text} from 'react-native';
import RNMorphingText from 'react-native-morphing-text';
const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          position: 'absolute',
          bottom: 0,
        }}>
        Home Screen
      </Text>
    </View>
  );
};

export default Home;
