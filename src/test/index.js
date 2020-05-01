import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  SafeAreaView,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {navigation} from '../../rootNavigation';
import IDs from '../../IDs';
import {useHeaderHeight} from '@react-navigation/stack';

const PADDING = 1;
const {width, height} = Dimensions.get('window');
const AnimationTest = () => {
  const goToFlutter = () => {
    navigation.navigate(IDs.AnimationFlutter);
  };
  console.log(useHeaderHeight());
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.wrap}>
          <TouchableOpacity
            onPress={goToFlutter}
            activeOpacity={0.5}
            style={styles.btn}>
            <Text style={styles.txt}>Flutter</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AnimationTest;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  wrap: {
    flex: 2,
    flexWrap: 'wrap',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
  },
  btn: {
    width: width / 6,
    height: width / 6,
    backgroundColor: 'rgb(184, 107, 73)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgb(184, 189, 238)',
    borderRadius: 45,
  },
  txt: {
    color: 'white',
    fontWeight: '700',
    fontSize: 13,
  },
});
