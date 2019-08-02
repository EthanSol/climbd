import React from 'react';
import { StyleSheet, Button, View } from 'react-native';
import { Menu } from '../sections/Menu.js';
import { RouteSettingHeader } from '../sections/Header.js';


export class HomeScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            usernameDisplay: 'Login',
            displaySetting: true,
        }
    }

    static navigationOptions = {
        title: 'Home',
    }

    updateUsername = (name) => {
        this.setState({usernameDisplay: name});
    }

    render () {

        const { navigate } = this.props.navigation;

        return(
            <View style = {styles.container}>
                <RouteSettingHeader displaySetting = {this.state.displaySetting} navigate = {navigate} />
                <Menu navigate = {navigate} />
            </View>
        );
    }
};




const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
});