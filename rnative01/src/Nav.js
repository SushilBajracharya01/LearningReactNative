import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Nav = props => {
  return (
    <View style={styles.nav}>
      <Text> {props.nameOfApp} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    backgroundColor: 'red',
    alignItems: 'center',
    padding: 10,
  },
});

export default Nav;
