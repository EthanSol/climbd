import React from 'react';
import { StyleSheet, TouchableOpacity, Text, TextInput, View, Button, Slider, Switch, Picker } from 'react-native';
import { Input, Overlay } from 'react-native-elements';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { MapFilter } from './ClickableMap';


export class EditRouteOverlay extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            boulder: true,
            sportGrade: 4,
            boulderGrade: 0,

            color: 'red',

            comments: '',

            posX: null,
            posY: null,
            
            //instead of having two commands or overlays for adding or editing
            //we can just store a climb ID as either 'none' or as an ID and go from there
            climbId: 'none',
        }
    }

    updateType = (value) => {
        this.setState({sport: value});
    }

    getCoordinates = (x,y) => {
        this.setState({posX: x, posY: y})
    }

    handleValueChange = (value) => 
        {this.state.boulder? this.setState({boulderGrade: value}):this.setState({sportGrade: value})}

    render() {

        let sliderValue = this.state.boulder? this.state.boulderGrade:this.state.sportGrade;

        return (
            <Overlay isVisible = {this.props.visible} onBackdropPress = {this.props.closeRouteOverlay} >
                <View >

                    {/* LOCATION INPUT */}
                    <MapFilter
                        returnCoordinates = {this.getCoordinates}
                        clearFilter = {() => this.setState({posX: null, posY: null})}
                    />

                    {/* TYPE SELECTION */}
                    <View style = {styles.switchRow} >
                        <TouchableOpacity
                            style = {{flex: 1}}
                            onPress = {() => this.setState({boulder: true})}
                            >
                            <Text
                                style = {[styles.disciplineButtons,
                                        {backgroundColor: this.state.boulder? '#17DD22': '#ffffff'}]}
                                >Boulder
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style = {{flex: 1}}
                            onPress = {() => this.setState({boulder: false})}
                            >
                            <Text
                                style = {[styles.disciplineButtons,
                                        {backgroundColor: this.state.boulder? '#ffffff':'#17DD22'}]}
                                >Sport
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <Text >Grade: {this.state.boulder? 'V':'5.'}{sliderValue}</Text>

                    <Slider
                        value = {sliderValue}
                        minimumValue = {this.state.boulder? 0:4}
                        maximumValue = {13}
                        step = {1}
                        onValueChange = {this.handleValueChange}
                    />

                    {/* COLOR PICKER */}
                    <View style = {styles.colorPicker} >

                        <Text style = {[styles.pageText, {flex: 1, alignSelf: 'center'}]} >Color:</Text>
                        <Picker
                            style = {styles.picker}
                            selectedValue = {this.state.color}
                            onValueChange = {(itemValue, itemIndex) => this.setState({color: itemValue})}
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
                    <Text style = {styles.pageText} >Comments:</Text>
                    <TextInput 
                        style = {styles.pageText} multiline numberOfLines = {4} autoCapitalize = {'sentences'}
                        value = {this.state.comments} onChangeText = {(text) => this.setState({comments: text})}
                        placeholder = {'Enter any comments here (optional)'}
                    />
                </View>
            </Overlay>
        );
    }
};



const styles = StyleSheet.create({
    container: {

    },

    colorPicker: {
        flexDirection: 'row',
    },
    pageText: {

    },
    picker: {
        flex: 4,
    },
    disciplineButtons: {
        alignSelf: 'center',
        padding: 3,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#B1B1B1'
    },
    switchRow: {
        flexDirection: "row",
        justifyContent: 'space-evenly',
        paddingBottom: 5,
    }
});