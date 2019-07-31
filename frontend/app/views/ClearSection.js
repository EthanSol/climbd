import React from 'react';
import { View, Text } from 'react-native';
import { RouteSettingHeader } from '../sections/Header.js';


export class ClearSectionScreen extends React.Component {
    static navigationOptions = {
        title: 'Clear a section'
    }

    render() {

        const {navigate} = this.props.navigation;
        
        return(
            <RouteSettingHeader displaySetting = {true} navigate = {navigate} />
        );
    }
}