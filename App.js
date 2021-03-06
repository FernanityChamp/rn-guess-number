import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Header from './components/Header'
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen'

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })
}


export default function App() {
  const [userNumber, setUserNumber] = useState()
  const [rounds, setRounds] = useState(0)
  const [assetsLoaded, setAssetsLoaded] = useState(false)

  if (!assetsLoaded) {
    return (
      <AppLoading 
        startAsync={fetchFonts} 
        onFinish={() => setAssetsLoaded(true)} 
        onError={err => console.log(err)} 
      />
    )
  }

  const configureNewGameHandler = () => {
    setRounds(0)
    setUserNumber(null)
  }

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber)
  }

  const gameOverHandler = numOfRounds => {
    setRounds(numOfRounds)
  }


  let content = <StartGameScreen onStartGame={startGameHandler} />

  if (userNumber && rounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
  } else if (rounds > 0) {
    content = <GameOverScreen roundsNumber={rounds} userNumber={userNumber} onRestart={configureNewGameHandler} />
  }

  return (
    <View style={styles.screen}>
      <Header title='Guess a Number' />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
