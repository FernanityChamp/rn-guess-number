import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Colors from '../constants/colors'

import TextStyled from '../components/TextStyled'

const Header = props => (
    <View style={styles.header}>
        <TextStyled customStyles={styles.headerTitle}>{props.title}</TextStyled>
    </View>
)

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: Colors.primaryText,
        fontFamily: 'open-sans-bold'
    }
})

export default Header