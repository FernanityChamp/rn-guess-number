import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import TextStyled from '../components/TextStyled'

import Colors from '../constants/colors'

const NumberContainer = props => (
    <View style={styles.container}>
        <TextStyled customStyles={styles.number}>{props.children}</TextStyled>
    </View>
)


const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: Colors.accent,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    number: {
        color: Colors.accent,
        fontSize: 22
    }
})

export default NumberContainer