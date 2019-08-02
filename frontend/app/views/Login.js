import React from 'react';
import { ForgotPassword, NewAccount } from '../sections/HideableViews.js';
import { AsyncStorage, StyleSheet, KeyboardAvoidingView, View, Text, TextInput, Button } from 'react-native';
import { Input } from 'react-native-elements';


export class LoginScreen extends React.Component {
    static navigationOptions = {
        title: 'Login',
    }

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',

            displayForgotPassword: false,
            displayNewAccountForm: false,
        }
    }

    

    toggleForgotPassword = () => {
        this.setState({
            displayForgotPassword: !this.state.displayForgotPassword,
            displayNewAccountForm: false,
        });
    }

    toggleNewAccount = () => {
        this.setState({
            displayNewAccountForm: !this.state.displayNewAccountForm,
            displayForgotPassword: false,
        });
    }

    render() {
        return (
            <KeyboardAvoidingView style = {{justifyContent: 'flex-end'}} behavior = 'height' enabled>
                    <View style = {styles.container}>
                    <TextInput style = {styles.inputField}
                        onChangeText = {(text) => this.setState({username: text})}
                        value = {this.state.username} placeholder = {'Username'}
                    />

                    <TextInput style = {styles.inputField}
                        onChangeText = {(text) => this.setState({password: text})}
                        secureTextEntry
                        value = {this.state.password} placeholder = {'Password'}
                    />
                </View>


                <View style = {styles.accountOptions}>
                    <Button style = {styles.buttons} title = {'Login'} onPress = {this.sendLogin}/>
                    <Button style = {styles.buttons} title = {'Forgot password'}
                        onPress = {this.toggleForgotPassword}/>
                    <Button style = {styles.buttons} title = {'Make account'} 
                        onPress = {this.toggleNewAccount}/>
                </View>

                <View style = {styles.container}>
                    <ForgotPassword buttonStyle = {styles.buttons} inputStyle = {styles.inputField} display = {this.state.displayForgotPassword} />
                    <NewAccount buttonStyle = {styles.buttons} inputStyle = {styles.inputField} display = {this.state.displayNewAccountForm} />
                </View>
            </KeyboardAvoidingView>
        );
    }
};




const styles = StyleSheet.create ({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputField: {
        padding: 5,
        width: 350,
        fontSize: 25,
        borderBottomWidth: 1,
    },
    devDisplay: {
        // flex: 1,
        fontSize: 18,
    },
    accountOptions: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingTop: 10,
        paddingBottom: 10,
    },
    buttons: {
        flex: 1,
        padding: 20,
        marginTop: 30,
        marginBottom: 10,
    },
});