import React from 'react';
import {
  View,
  Animated,
  StyleSheet,
  Easing,
  TouchableNativeFeedback,
  Dimensions,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
const {width} = Dimensions.get('window');
const BottomTab = (props) => {
  const bump = React.useRef(new Animated.Value((width * 1) / 4 - 82)).current;

  const tabs = {
    0: {
      paddingBottom: React.useRef(new Animated.Value(-15)).current,
      scaleIcon: React.useRef(new Animated.Value(1.4)).current,
    },
    1: {
      paddingBottom: React.useRef(new Animated.Value(0)).current,
      scaleIcon: React.useRef(new Animated.Value(1)).current,
    },
    2: {
      paddingBottom: React.useRef(new Animated.Value(0)).current,
      scaleIcon: React.useRef(new Animated.Value(1)).current,
    },
    3: {
      paddingBottom: React.useRef(new Animated.Value(0)).current,
      scaleIcon: React.useRef(new Animated.Value(1)).current,
    },
  };

  const animat = (value, tab) => {
    const filterArr = Object.keys(tabs).filter((ele) => ele !== `${tab}`);
    Animated.parallel([
      Animated.timing(bump, {
        toValue: value,
        duration: 500,
        easing: Easing.bounce,
        useNativeDriver: true,
      }),
      Animated.timing(tabs[tab].paddingBottom, {
        toValue: -15,
        duration: 500,
        easing: Easing.bounce,
        useNativeDriver: true,
      }),
      Animated.timing(tabs[tab].scaleIcon, {
        toValue: 1.4,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(tabs[filterArr[0]].paddingBottom, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(tabs[filterArr[0]].scaleIcon, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(tabs[filterArr[1]].paddingBottom, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(tabs[filterArr[1]].scaleIcon, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(tabs[filterArr[2]].paddingBottom, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(tabs[filterArr[2]].scaleIcon, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleTab = (value, tab, tabName) => {
    animat(value, tab);
    props.navigation.navigate(tabName);
  };

  return (
    <>
      <View style={styles.outContainer}>
        <Animated.View
          style={{
            position: 'relative',
            top: 1,
            transform: [{translateX: bump, translateY: 0}],
          }}>
          <Image
            resizeMode="stretch"
            resizeMethod="scale"
            style={{width: 62, height: 18}}
            source={require('./assets/test1.png')}
          />
        </Animated.View>
        <View style={styles.container}>
          <TouchableNativeFeedback
            style={{borderRadius: 20}}
            background={TouchableNativeFeedback.Ripple('#fff', true)}
            onPress={() => handleTab((width * 1) / 4 - 82, 0, 'Home')}>
            <Animated.View
              style={{
                ...styles.iconStyle,
                transform: [
                  {translateY: tabs[0].paddingBottom},
                  {scale: tabs[0].scaleIcon},
                ],
              }}>
              <Icon name="chevron-down" color="white" size={24} />
            </Animated.View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            style={{borderRadius: 20}}
            background={TouchableNativeFeedback.Ripple('#fff', true)}
            onPress={() => handleTab((width * 2) / 4 - 82, 1, 'Community')}>
            <Animated.View
              style={{
                ...styles.iconStyle,
                transform: [
                  {translateY: tabs[1].paddingBottom},
                  {scale: tabs[1].scaleIcon},
                ],
              }}>
              <Icon name="chevron-down" color="white" size={24} />
            </Animated.View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            style={{borderRadius: 20}}
            background={TouchableNativeFeedback.Ripple('#fff', true)}
            onPress={() => handleTab((width * 3) / 4 - 82, 2, 'Trending')}>
            <Animated.View
              style={{
                ...styles.iconStyle,
                transform: [
                  {translateY: tabs[2].paddingBottom},
                  {scale: tabs[2].scaleIcon},
                ],
              }}>
              <Icon name="chevron-down" color="white" size={24} />
            </Animated.View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            style={{borderRadius: 20}}
            background={TouchableNativeFeedback.Ripple('#fff', true)}
            onPress={() => handleTab(width - 82, 3, 'Profile')}>
            <Animated.View
              style={{
                ...styles.iconStyle,
                transform: [
                  {translateY: tabs[3].paddingBottom},
                  {scale: tabs[3].scaleIcon},
                ],
              }}>
              <Icon name="chevron-down" color="white" size={24} />
            </Animated.View>
          </TouchableNativeFeedback>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  outContainer: {
    justifyContent: 'flex-end',
    backgroundColor: 'white',
  },
  container: {
    position: 'relative',
    bottom: 0,
    width: '100%',
    height: 70,
    backgroundColor: '#22BAA8',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  iconStyle: {
    width: 40,
    height: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BottomTab;
