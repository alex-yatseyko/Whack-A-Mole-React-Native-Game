import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <MainGameScreen/>
    </View>
  );
}

const MainGameScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.gameTitle}>Whack-a-mole!</Text>
      <Image 
        source={require('./assets/dirt.svg')}
        style={styles.dirt}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffc600',
  },
  gameTitle: {
    textAlign: 'center',
    fontSize: 60,
    // lineHeight: 1
    // margin-bottom: 0;
  },
  dirt: {
    width: '50%',
    height: 50,
  }
});
