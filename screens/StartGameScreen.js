import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

const StartGameScreen = props => {

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game</Text>
            <View style={styles.inputContainer}>
                <Text>Select a number:</Text>
                <TextInput placeholder='Number' />
                <View style={styles.buttons}>
                    <Button title='Reset' onPress={() => {}} />
                    <Button title='Confirm' onPress={() => {}} />
                </View>
            </View>
        </View>
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
        fontSize: 20,
        marginVertical: 10
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: 'white',
        elevation: 6,
        padding: 10,
        borderRadius: 10
    },
    buttons: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    }
})

export default StartGameScreen