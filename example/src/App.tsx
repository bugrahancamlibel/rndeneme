import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { openLoginSdk } from 'rn-login-sdk';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Open Flutter Login SDK */}
      <Pressable style={styles.button} onPress={openLoginSdk}>
        <Text style={styles.text}>{'Open Login SDK'}</Text>
      </Pressable>
    </View>
  );
}