import React from 'react';
import { AsyncStorage, TouchableOpacity, Text, View, StyleSheet, Alert } from 'react-native';
import { RouteSettingHeader } from '../sections/Header.js';
import ActionButton, { ActionButtonItem } from 'react-native-action-button';
import { Icon, Overlay } from 'react-native-elements';
import { ClimbCardSetter } from '../sections/ClimbCard.js';
import { AddRoute } from '../sections/AddRoute.js';


const exampleRoutes = [];

for (let i = 0; i < 40; i++){
    exampleRoutes.push ({
        type: 'Boulder',
        grade: 'V6',
        setterName: 'Ethan',
        color: 'Red',
    });
}


//USE REFRESSCONTROL FOR BROWSING TO ALLOW SETTER TO SEE IF CHANGE CAME THROUGH
export class EditClimbsScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            overlay: false,
        }
    }

    static navigationOptions = {
        title: 'Edit Climbs',
    }


    render() {

        const {navigate} = this.props.navigation;

        return(
                <View style={{flex:1, backgroundColor: '#f3f3f3'}}>
                    <Overlay
                        isVisible = {this.state.overlay}
                        onBackdropPress = {() => this.setState({overlay: false})}
                    >
                        <AddRoute />
                    </Overlay>
                    <RouteSettingHeader displaySetting = {true} navigate = {navigate} />
                    <TouchableOpacity style = {styles.iconWrap} >
                        <Icon name="add-circle"
                            onPress = {() => this.setState({overlay: true})}
                            iconStyle = {styles.actionButtonIcon}
                            color = 'red'
                            fontSize = {40}
                            borderRadius = {20}
                        />                         
                    </TouchableOpacity>
                   
                </View>

        );
    }
};


const styles = StyleSheet.create({
    actionButtonIcon: {
        fontSize: 20,
        color: 'red',
    },
    iconWrap: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        borderRadius: 30,
        color: 'black',
    }
});