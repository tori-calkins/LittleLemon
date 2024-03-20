import * as React from 'react';
import { View, Text, StyleSheet, Image, TextInput, Pressable,KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { useState } from 'react';
import { validateEmail } from '../utils';

const SubscribeScreen = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [isValidEmail, setIsValidEmail] = useState(true);

    const handleSubscribe = () => {
        if (!validateEmail(email)) {
            setIsValidEmail(false)
            return 
        }
        setIsValidEmail(true)
        // Alert.alert('Thanks for subscribing, stay tuned!');
        Alert.alert(
            'Thanks for subscribing, stay tuned!',
            '',
            [
                {
                    text: 'OK',
                    onPress: () => {
                        navigation.navigate('SubscribeScreen');
                    },
                },
            ],
            { cancelable: false }
        );
    }

    return (
        <View>
            <Image 
                style={SubscribeStyles.logo}
                source={require('../assets/LittleLemonLogo.png')}
                accessibilityLabel='Little Lemon Logo Image'
                resizeMode='contain'
                accessible={true}
            />
            <Text style={SubscribeStyles.text}>
                Subscribe to our newsletter to recieve updates on the weekly events
            </Text>
            <TextInput
                style={SubscribeStyles.input}
                value={email}
                onChangeText={setEmail}
                placeholder='Enter Email Here'
                keyboardType='email-address' 
            />
            <Pressable onPress={handleSubscribe}>
                <View style={SubscribeStyles.buttonContainer}>
                    <Text style={SubscribeStyles.buttonText}>Subscribe</Text>
                </View>
            </Pressable>
        </View>
    )
};

export default SubscribeScreen;

const SubscribeStyles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        height: 100,
        width: 150,
        marginVertical: 40,
        alignSelf: 'center', 
    },
    text: {
        fontSize: 23,
        textAlign: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
    },
    input:{
        height: 40,
        width: 310,
        margin: 10,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'white',
        borderRadius: 50,
        padding: 10,
        fontSize: 16,
        overflow: 'hidden',
        alignSelf: 'center',
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
        alignSelf: 'center', 
    },
    buttonText:{
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    }
})

