import React from 'react';
import {StyleSheet, Image, View, Dimensions} from 'react-native';

import LinearGad from 'react-native-linear-gradient';
type HeaderProps = {
  section: Section,
};

const {width} = Dimensions.get('window');
const Header = (HeaderProps) => {
  const {section} = HeaderProps;
  const colors = [section.leftColor, section.rightColor];

  return (
    <View style={styles.container}>
      <Image source={section.image} style={styles.image} />
      <LinearGad
        start={[0, 0]}
        end={[1, 0]}
        style={styles.gradient}
        {...{colors}}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: null,
    height: null,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.9,
  },
});
