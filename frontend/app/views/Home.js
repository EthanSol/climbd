import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Menu } from '../sections/Menu.js';


export class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
    }



    render () {

        const { navigate } = this.props.navigation;

        return(
            <View
                style = {styles.container}>
                <Menu navigate = {navigate} />
            </View>
        );
    }
};




const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});