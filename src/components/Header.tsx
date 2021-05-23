import React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';

type HeaderProps = { isDarkMode: boolean };

export function Header({ isDarkMode }: HeaderProps) {
  return (
    <View style={[styles.header, isDarkMode && { backgroundColor: '#191932' }]}>
      <Text style={styles.headerText}>to.</Text>
      <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>
        do
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: '#273FAD',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  },
});
