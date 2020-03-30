import React from 'react'
import { StyleSheet, Text } from 'react-native'


const textStyled = props => (
    <Text style={{...styles.base, ...props.customStyles}}>{props.children}</Text>
)

const styles = StyleSheet.create({
    base: {
        fontSize: 20
    }
})


export default textStyled