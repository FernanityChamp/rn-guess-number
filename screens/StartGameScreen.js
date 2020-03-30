import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback, Button, Keyboard, Alert } from 'react-native'

import Card from '../components/Card'
import Input from '../components/Input'
import NumberContainer from '../components/NumberContainer'

import TextStyled from '../components/TextStyled'

import Colors from '../constants/colors'


const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('')
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState()

    const numerInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    }

    const resetInputHandler = () => {
        setEnteredValue('')
        setConfirmed(false)
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue)
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid number', 'Number has to be a number between 1 to 99', [{ text: 'OK', style: 'destructive', onPress: resetInputHandler }])
            return
        }
        setConfirmed(true)
        setSelectedNumber(parseInt(enteredValue))
        setEnteredValue('')
        Keyboard.dismiss()
    }


    let confirmedOutput
    if (confirmed) {
        confirmedOutput = (
            <Card style={styles.summary}>
                <Text>You selected</Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <Button title='START GAME' onPress={() => props.onStartGame(selectedNumber)} />
            </Card>
        )
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}>
            <View style={styles.screen}>
                <TextStyled customStyles={styles.title}>Start a New Game</TextStyled>
                <Card style={styles.inputContainer}>
                    <TextStyled customStyles={styles.subtitle}>Select a number:</TextStyled>
                    <Input 
                        style={styles.input} 
                        placeholder='Number'
                        blurOnSubmit 
                        autoCapitalize='none' 
                        autoCorrect={false} 
                        keyboardType='numeric' 
                        maxLength={2}
                        onChangeText={numerInputHandler}
                        value={enteredValue} />
                    <View style={styles.buttons}>
                        <View style={styles.btn}>
                            <Button 
                                color={Colors.accent} 
                                title='Reset' onPress={resetInputHandler} />
                        </View>
                        <View style={styles.btn}>
                            <Button 
                                color={Colors.primary} 
                                title='Confirm' onPress={confirmInputHandler} />
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1, // toma todo el espacio disponible
        padding: 10,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    title: {
        marginVertical: 10,
        fontFamily: 'open-sans-bold'
    },
    subtitle: {
        fontSize: 16,
        fontFamily: 'open-sans'
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    input: {
        width: '40%',
        textAlign: 'center',
        fontFamily: 'open-sans'
    },
    buttons: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    btn: {
        width: '40%'
    },
    summary: {
        alignItems: 'center',
        marginTop: 30
    }
})

export default StartGameScreen