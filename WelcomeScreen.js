import * as React from 'react';
import { View, StyleSheet, Text, Image, Pressable } from 'react-native';

const WelcomeScreen = ({ navigation }) => {

  return (
    <View style={welcomeStyles.container}>
        <Image 
            style={welcomeStyles.logo}
            source={require('../assets/LittleLemonTitle.png')}
            accessibilityLabel='Little Lemon Logo Image'
            resizeMode='contain'
            accessible={true}
        />
        <Text style={welcomeStyles.text}>
            Little Lemon, your favorite local brewery
        </Text>
        <Pressable onPress={() => navigation.navigate('subscribe')}>
            <View style={welcomeStyles.buttonContainer}>
                <Text style={welcomeStyles.buttonText}>Newsletter</Text>
            </View>
        </Pressable>
    </View>
  )
};

export default WelcomeScreen;

const welcomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        marginVertical: 7, // moves text down
        height: 200,
        width: 150,
    },
    text: {
        fontSize: 23,
        padding: 20,
        paddingTop: 60,
        paddingLeft: 30,
        paddingRight: 30,
        textAlign: 'center',
        fontWeight:'bold',
        color: '#4B5320'
    },
    buttonContainer : {
        height: 40,
        width: 310,
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderColor: '#4B5320',
        backgroundColor: '#4B5320',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    buttonText:{
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    }
}) 