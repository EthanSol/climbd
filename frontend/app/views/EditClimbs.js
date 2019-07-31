import React from 'react';
import { View, Text } from 'react-native';
import { RouteSettingHeader } from '../sections/Header.js';

//USE REFRESSCONTROL FOR BROWSING TO ALLOW SETTER TO SEE IF CHANGE CAME THROUGH
export class EditClimbsScreen extends React.Component {
    static navigationOptions = {
        title: 'Edit Climbs'
    }


    render() {

        const {navigate} = this.props.navigation;

        return(
            <RouteSettingHeader displaySetting = {true} navigate = {navigate} />
        );
    }
}