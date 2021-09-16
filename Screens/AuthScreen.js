import React, {useState} from 'react';
import {Button, TextInput, View, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {login, signup} from '../redux/actions.js';

const AuthScreen = ()=>{
    const [emailInput, setEmailInput] = useState()
    const [passwordInput, setPasswordInput] = useState()

    const dispatch = useDispatch()

    const emailChangeHandler = (e)=>{
        setEmailInput(e)
    }

    const passwordChangeHandler = (e)=>{
        setPasswordInput(e)
    }

    const logInFunc = () => {
        dispatch(login(emailInput,passwordInput))
    }

    const signUpFunc = () => {
        dispatch(signup(emailInput,passwordInput))
    }

    return (
        <View style={styles.container}>
            <TextInput
            placeholder='email'
            id='email'
            label='E-mail'
            keyboardType='email-address'
            required
            email
            onChangeText={emailChangeHandler}
            value={emailInput}/>
            <TextInput
                placeholder='password'
                id='password'
                label='Password'
                keyboardType='default'
                secureTextEntry
                required
                email
                onChangeText={passwordChangeHandler}
                value={passwordInput}/>
            <Button title='Log In' onPress={logInFunc}/>
            <Button title='Sign Up' onPress={signUpFunc}/>
        </View>
    );
};

export default AuthScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 50
    }
})