import React, { useState } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

import NumberContainer from '../components/NumberContainer'
import Card from '../components/Card'

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
    

    return (
        <View style={styles.screen}>
            <Text>Computer's Guess</Text>
            <NumberContainer>{curGuess}</NumberContainer>
            <Card style={styles.buttons}>
                <Button title='LOWER' onPress={() => {}} />
                <Button title='LOWER' onPress={() => {}} />
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