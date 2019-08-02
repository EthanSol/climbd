import React from 'react';
import { View, Alert } from 'react-native';
import { RouteSettingHeader } from '../sections/Header.js';
import { MapFilter } from '../sections/ClickableMap.js';


export class ClearSectionScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            display: false,
        }
    }

    static navigationOptions = {
        title: 'Clear a section'
    }

    render() {

        const {navigate} = this.props.navigation;
        
        return(
            <View >
                <RouteSettingHeader displaySetting = {true} navigate = {navigate} />
                <MapFilter returnCoordinates = {() => this.setState({display: false})} />
            </View>


        );
    }
}