import React from 'react';
import { View, StyleSheet, Text, TextInput, Switch, Picker, Slider } from 'react-native';
import { RouteSettingHeader } from '../sections/Header.js';


export class AddRouteScreen extends React.Component {
    static navigationOptions = {
        title: 'Add a route'
    }

    constructor(props){
        super(props);
        this.state = {
            sport: false,
            setterName: '',
            color: 'red',
            comments: '',

        }
    }

    changeType = (value) => {
        this.setState({sport: value});
    }

    render() {

        const {navigate} = this.props.navigation;

        return(
            <View >

                {/* HEADER */}
                <RouteSettingHeader displaySetting = {true} navigate = {navigate}/>


                {/* TYPE SELECTION */}
                <View style = {styles.switchContainer} >
                    <Text style = {styles.pageText} >Boulder</Text>
                    <Switch value = {this.state.sport} onValueChange = {this.changeType} />
                    <Text style = {styles.pageText} >Sport</Text>
                </View>
                

                {/* SETTERNAME INPUT */}
                <View style = {styles.inputField} >
                    <Text style = {styles.pageText} >Setter Tag: </Text>
                    <TextInput style = {styles.pageText} placeholder = {'Name/Tag'}
                        autoCapitalize = {'words'}
                        onChangeText = {(text) => this.setState({setterName: text})}
                        value = {this.state.setterName}
                    />
                </View>


                {/* COLOR PICKER */}
                <View style = {styles.inputField} >
                    <Text style = {styles.pageText} >Color: </Text>
                    <Picker
                        style = {styles.picker}
                        selectedValue={this.state.color}
                        onValueChange={(itemValue, itemIndex) => this.setState({color: itemValue})}
                    >
                        <Picker.Item label = 'Red' value = 'Red' />
                        <Picker.Item label = 'Yellow' value = 'Yellow' />
                        <Picker.Item label = 'Blue' value = 'Blue' />
                        <Picker.Item label = 'Black' value = 'Black' />
                        <Picker.Item label = 'White' value = 'White' />
                        <Picker.Item label = 'Purple' value = 'Purple' />
                        <Picker.Item label = 'Orange' value = 'Orange' />
                        <Picker.Item label = 'Green' value = 'Green' />
                        <Picker.Item label = 'Gray' value = 'Gray' />
                    
                    </Picker>
                </View>

                {/* COMMENT ADDITION */}
                <Text style = {[styles.pageText, {paddingLeft: 50}]} >Comments: </Text>
                <TextInput 
                    style = {[styles.textInput, {padding: 5}]} multiline numberOfLines = {4} autoCapitalize = {'sentences'}
                    value = {this.state.comments} onChangeText = {(text) => this.setState({comments: text})}
                    placeholder = {'Enter any comments here (optional)'}
                />

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-evenly',
    },
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 5,
    },
    pageText: {
        fontSize: 20,
    },
    inputField: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 5,
    },
    picker: {
        width: 200,
    },
    textInput: {
        textAlignVertical: 'top',
        borderColor: '#000000',
        borderWidth: 1,
        marginHorizontal: 50,
    },
});