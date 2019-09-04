import React from 'react';
import { Overlay } from 'react-native-elements';
import { TextInput, View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { ForgotPassword, NewAccount } from '../sections/HideableViews.js';



export class Login extends React.Component{
    constructor (props) {
      super(props);
      this.state = {
        overlay: false,

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

    render () {
      return (
        <View >
          <Overlay height = {400} isVisible = {this.state.overlay} onBackdropPress = {() => this.setState({overlay: false})} >
          <View >
                <View style = {styles.inputContainer}>
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
                    <Button style = {styles.buttons} title = {'New account'} 
                        onPress = {this.toggleNewAccount}/>
                </View>

                <View style = {styles.inputContainer}>
                    <ForgotPassword buttonStyle = {styles.buttons} inputStyle = {styles.inputField} display = {this.state.displayForgotPassword} />
                    <NewAccount buttonStyle = {styles.buttons} inputStyle = {styles.inputField} display = {this.state.displayNewAccountForm} />
                </View>
            </View>
          </Overlay>
          <TouchableOpacity
            style = {styles.loginButton} onPress = {() => this.setState({overlay: true})} >
            <Text numberOfLines = {1} style = {{fontSize: 18}} >Login</Text>
          </TouchableOpacity>
        </View>
      );
    }
};


const styles = StyleSheet.create({
    buttonText: {
        color: '#FF8000',
        width: 100,
    },
    loginButton: {
        width: 110,
        marginRight: 10,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    inputContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputField: {
        padding: 5,
        width: 300,
        fontSize: 20,
        borderBottomWidth: 1,
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