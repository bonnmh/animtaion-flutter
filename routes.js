import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  useHeaderHeight,
  Header,
} from '@react-navigation/stack';
import {navigationRef} from './rootNavigation';
import IDs from './IDs';
import AnimationFlutter from './src/animation-flutter/AnimationFlutter';
import AnimationTest from './src/test';
import LinearGradient from 'react-native-linear-gradient';
const Stack = createStackNavigator();
const GradientHeader = (props) => {
  console.log('Header,', Header);
  return (
    <View style={{backgroundColor: '#eee'}}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={{height: 100, width: '100%'}}
        colors={['#BEBEBE', '#4c669f', '#3b5998']}
      />
    </View>
  );
};
const RootContainerScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <NavigationContainer
        // onStateChange={(state) => console.log('New state is', state)}
        ref={navigationRef}>
        <Stack.Navigator
          initialRouteName={IDs.AnimationTest}
          //   headerMode={'none'}
        >
          <Stack.Screen
            options={{
              title: 'My home',
              headerStyle: {
                backgroundColor: 'rgb(157, 84, 55)',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
            name={IDs.AnimationTest}
            component={AnimationTest}
          />
          <Stack.Screen
            options={{
              cardStyle: {backgroundColor: 'transparent'},
              headerShown: false,
            }}
            name={IDs.AnimationFlutter}
            component={AnimationFlutter}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};
export default RootContainerScreen;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'rgb(245, 89, 81)',
  },
});
