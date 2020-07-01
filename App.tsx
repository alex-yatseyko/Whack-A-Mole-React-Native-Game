import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { Svg, SvgXml } from 'react-native-svg';

import { Dirt } from './components/Dirt'
import { Mole } from './components/Mole'
// import Mole from './assets/dirt.svg';

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
      <View style={styles.gameTitleWrapper}>
        <Text style={styles.gameTitle}>Whack-a-mole!</Text>
        <View style={styles.scoreWrapper}>
          <Text style={styles.gameTitle}>0</Text>
        </View>
      </View>
      <View style={styles.dirtsWrapper}>
        <Dirt />
        <Dirt />
        <Dirt />
        <Dirt />
        <Dirt />
        <Dirt />
      </View>
      {/* <Mole /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#ffc600',
  },
  gameTitle: {
    textAlign: 'center',
    fontSize: 50,
    // lineHeight: 1
    // margin-bottom: 0;
  },
  dirt: {
    width: 150,
    backgroundColor: 'red',
    height: 150,
  },
  scoreWrapper: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  gameTitleWrapper: {
    // flexDirection: 'row',
  },
  dirtsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    alignContent: 'space-around',
  },
});
