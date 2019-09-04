import React from 'react';
import { View, TouchableOpacity, TextInput, Button, Alert, FlatList, Text } from 'react-native';
import { RouteSettingHeader } from '../sections/Header.js';
import { Overlay } from 'react-native-elements';

const exampleData = [];

for (let i = 0; i < 40; i++){
    exampleData.push({
        name: 'Ethan',
        account: 'Route Setter'
    });
}


function AccountCard (props){
    return (
        <TouchableOpacity
            onPress = {() => Alert.alert('Clicked on User')}
        >
            <Text style = {{fontSize: 20, alignSelf: 'center', padding: 10}} >{props.name} => {props.account}</Text>
        </TouchableOpacity>
    );
}


export class ManageAccountsScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            display: false,
            search: '',
            overlay: false,
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

                <TextInput
                    style = {{fontSize: 25, alignSelf: 'center', width: 250}}
                    value = {this.state.search}
                    onChangeText = {(text) => this.setState({search: text})}
                    placeholder = {'Search Here...'}
                />

                <FlatList
                    data = { exampleData }
                    renderItem = {({item}) => <AccountCard name = {item.name} account = {item.account} />}
                />
            </View>


        );
    }
}