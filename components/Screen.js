import React from 'react';
import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';

function Screen({ children, style }) {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default Screen;
