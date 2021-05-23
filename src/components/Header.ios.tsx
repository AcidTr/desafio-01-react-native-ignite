import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

type HeaderProps = { isDarkMode: boolean };

export function Header({ isDarkMode }: HeaderProps) {
  return (
    <SafeAreaView
      style={[
        styles.container,
        isDarkMode && {
          backgroundColor: '#191932',
        },
      ]}
    >
      <View
        style={[styles.header, isDarkMode && { backgroundColor: '#191932' }]}
      >
        <Text style={styles.headerText}>to.</Text>
        <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>
          do
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#273FAD',
  },
  header: {
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
