// @flow
import React from 'react';
import 'react-native-gesture-handler';
import AnimationFlutter from './src/animation-flutter/AnimationFlutter';
import RootContainerScreen from './routes';
export default class App extends React.Component {
  render() {
    return <RootContainerScreen />;
  }
}
