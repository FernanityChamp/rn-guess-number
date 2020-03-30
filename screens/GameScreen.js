import React, { useState, useRef, useEffect } from 'react'
import { StyleSheet, View, Text, Button, Alert } from 'react-native'

import NumberContainer from '../components/NumberContainer'
import Card from '../components/Card'

import TextStyled from '../components/TextStyled'

const generateRandom = (min, max, exclude) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    const random = Math.floor(Math.random() * (max - min)) + min
    if (random === exclude) {
        return generateRandom(min, max, exclude)
    } else {
        return random
    }
}

const gameScreen = props => {
    const [curGuess, setCurGuess] = useState(generateRandom(1, 100, props.userChoice))
    const [rounds, setRounds] = useState(0)

    const { userChoice, onGameOver } = props

    const currentLow = useRef(1)
    const currentHigh = useRef(100)

    useEffect(() => {
        if (curGuess === userChoice) {
            onGameOver(rounds)
        }
    }, [curGuess, userChoice, onGameOver])

    const nextGuessNumber = direction => {
        if ((direction === 'lower' && curGuess < props.userChoice) || 
            (direction === 'greater' && curGuess > props.userChoice)) {
                Alert.alert('Don\'t lie!', 'You know that is wrong...', [{ text: 'Sorry!', style: 'cancel' }])
                return
        }
        if (direction === 'lower') {
            currentHigh.current = curGuess
        } else {
            currentLow.current = curGuess
        }
        const nextGuess = generateRandom(currentLow.current, currentHigh.current, curGuess)
        setCurGuess(nextGuess)
        setRounds(curRounds => curRounds + 1)
    }


    return (
        <View style={styles.screen}>
            <TextStyled>Computer's Guess</TextStyled>
            <NumberContainer>{curGuess}</NumberContainer>
            <Card style={styles.buttons}>
                <Button title='LOWER' onPress={nextGuessNumber.bind(this, 'lower')} />
                <Button title='GREATER' onPress={nextGuessNumber.bind(this, 'greater')} />
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10, 
        alignItems: 'center'
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
})

export default gameScreen