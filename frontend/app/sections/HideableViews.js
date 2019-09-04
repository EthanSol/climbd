import React from 'react';
import { StyleSheet, View, TextInput, Button, Alert } from 'react-native';

const root = 'http://10.0.2.2:8000';

export class ForgotPassword extends React.Component{
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
                <View >
                    <View style = {styles.form}>
                        <TextInput style = {this.props.inputStyle} placeholder = {'Enter your username or Email'}
                            value = {this.state.usernameEmail}
                            onChangeText = {(text) => this.setState({usernameEmail: text})} />
                    </View>
                    <Button
                        style = {this.props.buttonStyle} title = {'Enter'}
                        onPress = {() => Alert.alert('Forgot Password', this.state.usernameEmail)}
                    />
                </View>
            );
        }
    }
};


export class NewAccount extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            username: "",
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            password_confirm: ""

        }
    }

    handleResponse(response){
        console.log(response.status);
        
    }

    register = () => {
        fetch(root + '/api/accounts/register/', {
            method: 'post',
            body: JSON.stringify(this.state),
        }).then(this.handleResponse);
    }


    render(){
        if(!this.props.display){
            return null;
        } else {
            return (
                <View >
                    <View style = {styles.form} >
                        {/* <TextInput style = {this.props.inputStyle} placeholder = {'Name'} autoCapitalize = {'words'}
                            value = {this.state.newAccountInfo.name} onChangeText = {(text) => this.setState({name: text})} /> */}
                        <TextInput style = {this.props.inputStyle} placeholder = {'Email'} autoCapitalize = {'none'}
                            value = {this.state.email} onChangeText = {(text) => this.setState({email: text})} />
                        <TextInput style = {this.props.inputStyle} placeholder = {'Username'}
                            value = {this.state.username} onChangeText = {(text) => this.setState({username: text})} />
                        <TextInput style = {this.props.inputStyle} placeholder = {'Password'} secureTextEntry
                            value = {this.state.password} onChangeText = {(text) => this.setState({password: text})} />
                        <TextInput style = {this.props.inputStyle} placeholder = {'Re-enter password'} secureTextEntry
                            value = {this.state.password_confirm} onChangeText = {(text) => this.setState({password_confirm: text})} />
                    </View>
                    <Button style = {this.props.buttonStyle} title = {'Enter'} onPress = {this.register} />
                </View>
            );
        }
    }
};



const styles = StyleSheet.create ({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
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
    form: {
        paddingBottom: 10,
    },
});