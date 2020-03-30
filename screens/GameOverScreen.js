import React from 'react'
import { StyleSheet, View, Text, Button, Image } from 'react-native'

import TextStyled from '../components/TextStyled'

import Colors from '../constants/colors'

const GameOverScreen = props => (
    <View style={styles.screen}>
        <TextStyled>Game is Over!</TextStyled>
        <View style={styles.imageContainer}>
            <Image 
                fadeDuration={200}
                // source={require('../assets/success.png')} 
                source={{ uri: 'https://lh3.googleusercontent.com/proxy/7UcHr315cOUCjSMKQKLGjEPKOvgK2NVcPBhuDL1K0TGbrDyA2VUN2n5ZCPDchO6nAsp6ti1z8nphnTsgWWwItO6f_2gwPsPf6qhIYnHp2Xw7-HmXMOY0qeERDxp19ouL5xw1A8230W7pycFb0N9H' }}
                style={styles.image} resizeMode='cover' />
        </View>
        <View style={styles.textMsgContainer}>
            <TextStyled customStyles={styles.textMsg}>
                Computer needed <TextStyled customStyles={styles.highlight}>{props.roundsNumber}</TextStyled>, 
                and the number was <TextStyled customStyles={styles.highlight}>{props.userNumber}</TextStyled>
            </TextStyled>
        </View>
        
        <Button title='NEW GAME' onPress={props.onRestart} style={styles.button} />
    </View>
)

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderColor: 'grey',
        borderWidth: 2,
        overflow: 'hidden',
        marginVertical: 20
    },
    image: {
        width: '100%',
        height: '100%'
    },
    button: {
        paddingVertical: 30
    },
    textMsgContainer: {
        marginHorizontal: 20,
    },
    textMsg: {
        fontFamily: 'open-sans-bold',
        textAlign: 'center',
        marginVertical: 20
    },
    highlight: {
        color: Colors.accent
    }
})

export default GameOverScreen