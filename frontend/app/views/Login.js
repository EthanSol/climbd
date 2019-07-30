import React from 'react';
import { StyleSheet, KeyboardAvoidingView, View, Text, TextInput, Button, Alert } from 'react-native';

class ForgotPassword extends React.Component{
    constructor (props) {
        super (props);
        this.state = {
            usernameEmail: ''
        }
    }

    render() {
        if(!this.props.display){
            return null;
        } else {
            return (
                <View style = {styles.forgotPassword}>
                    <TextInput style = {styles.inputField} placeholder = {'Enter your username or Email'}
                        value = {this.state.usernameEmail}
                        onChangeText = {(text) => this.setState({usernameEmail: text})} />
                    <Button title = {'Enter'} onPress = {() => Alert.alert('Forgot Password', this.state.usernameEmail)} />
                </View>
            );
        }
    }
};


class NewAccount extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            username: '',
            password: '',
        }
    }

    returnInfo = () => {
        var info = `${this.state.email}\n${this.state.username}\n${this.state.password}`;
        Alert.alert(this.state.name, info);
    }


    render(){
        if(!this.props.display){
            return null;
        } else {
            return (
                <View style = {styles.forgotPassword} >
                    <TextInput style = {styles.inputField} placeholder = {'Name'}
                        value = {this.state.name} onChangeText = {(text) => this.setState({name: text})} />
                    <TextInput style = {styles.inputField} placeholder = {'Email'}
                        value = {this.state.email} onChangeText = {(text) => this.setState({email: text})} />
                    <TextInput style = {styles.inputField} placeholder = {'Username'}
                        value = {this.state.username} onChangeText = {(text) => this.setState({username: text})} />
                    <TextInput style = {styles.inputField} placeholder = {'Password'} secureTextEntry
                        value = {this.state.Password} onChangeText = {(text) => this.setState({password: text})} />
                    <TextInput style = {styles.inputField} placeholder = {'Re-enter password'} secureTextEntry />
                    <Button title = {'Enter'} onPress = {this.returnInfo} />
                </View>
            );
        }
    }
};


export class LoginScreen extends React.Component {
    static navigationOptions = {
        title: 'Login',
    }

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            tempUsername: '',
            password: '',
            tempPassword: '',

            displayForgotPassword: false,
            displayNewAccountForm: false,
        }
    }

    sendLogin = () => {
        this.setState({tempUsername: this.state.username});
        this.setState({tempPassword: this.state.password});
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

                <Text style = {styles.devDisplay} >{this.state.tempUsername}</Text>
                <Text style = {styles.devDisplay} >{this.state.tempPassword}</Text>

                <View style = {styles.accountOptions}>
                    <Button style = {styles.buttons} title = {'Login'} onPress = {this.sendLogin}/>
                    <Button style = {styles.buttons} title = {'Forgot password'}
                        onPress = {() => this.setState({displayForgotPassword: !this.state.displayForgotPassword})}/>
                    <Button style = {styles.buttons} title = {'Make account'} 
                        onPress = {() => this.setState({displayNewAccountForm: !this.state.displayNewAccountForm})}/>
                </View>

                <View style = {styles.container}>
                    <ForgotPassword display = {this.state.displayForgotPassword} />
                    <NewAccount display = {this.state.displayNewAccountForm} />
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
    },
    devDisplay: {
        // flex: 1,
        fontSize: 18,
    },
    accountOptions: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttons: {
        flex: 1,
        padding: 20,
    },
    forgotPassword: {

    },
    newAccount: {

    },
});