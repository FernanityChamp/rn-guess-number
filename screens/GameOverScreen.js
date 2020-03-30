import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

import TextStyled from '../components/TextStyled'

const GameOverScreen = props => (
    <View style={styles.screen}>
        <TextStyled>Game is Over!</TextStyled>
        <TextStyled>Numbers of rounds: {props.roundsNumber}</TextStyled>
        <TextStyled>Number was: {props.userNumber}</TextStyled>
        <Button title='NEW GAME' onPress={props.onRestart} />
    </View>
)

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default GameOverScreen