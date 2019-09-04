import React from 'react';
import { StyleSheet, Button, TouchableOpacity, Switch, View, Text } from 'react-native';
import { Overlay } from 'react-native-elements';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { MapFilter } from './ClickableMap';



//FILTER FOR GRADES AND FOR ROUTE TYPE
export class RouteFilterOverlay extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            seeBoulders: true,
            boulderValues: [0, 13],
    
            seeSport: true,
            sportValues: [4, 13],

            posX: null,
            posY: null,
        }
    }

    boulderSliderValuesChange = values =>  {
        this.setState({boulderValues: values});
    }


    sportSliderValuesChange = values => {
        this.setState({sportValues: values});
    }


    getCoordinates = (x,y) => {
        this.setState({posX: x, posY: y})
    }

    handleSubmit = () => {
        this.props.returnFilters(this.state);
        this.props.updateOverlay(false);
    }

    render () {


        let boulderGrades = null;
        if(this.state.seeBoulders){
            boulderGrades = 
            <View style = {styles.disciplineContainer} >
                <Text style = {styles.pageText} >
                        Grades: V{this.state.boulderValues[0]} - V{this.state.boulderValues[1]}
                </Text>
                <MultiSlider
                    style = {{alignSelf: 'center'}}
                    values = {this.state.boulderValues}
                    min = {0} max = {13} snapped step = {1} sliderLength = {270}
                    onValuesChange = {this.boulderSliderValuesChange}
                />
            </View>
        }

        
        let sportGrades = null;
        if(this.state.seeSport){
            sportGrades = 
                <View style = {styles.disciplineContainer} >
                    <Text style = {styles.pageText} >
                        Grades: 5.{this.state.sportValues[0]} - 5.{this.state.sportValues[1]}
                    </Text>
                    <MultiSlider
                        style = {{alignSelf: 'center'}}
                        values = {this.state.sportValues}
                        min = {4} max = {13} snapped step = {1} sliderLength = {270}
                        onValuesChange = {this.sportSliderValuesChange}
                    />
                </View>
        } 


        return (
            <Overlay isVisible = {this.props.overlay} onBackdropPress = {() => this.props.updateOverlay(false)} >
                <View style = {{flex: 1}} >
                  
                    <View >
                        <MapFilter
                            returnCoordinates = {this.getCoordinates}
                            clearFilter = {() => this.setState({posX: null, posY: null})}
                        />
                    </View>

                    <View style = {styles.switchRow} >
                        <TouchableOpacity
                            style = {{flex: 1}}
                            onPress = {() => this.setState({seeBoulders: !this.state.seeBoulders})}
                            >
                            <Text
                                style = {[styles.disciplineButtons,
                                        {backgroundColor: this.state.seeBoulders? '#17DD22': '#ffffff'}]}
                                >Boulders
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style = {{flex: 1}}
                            onPress = {() => this.setState({seeSport: !this.state.seeSport})}
                            >
                            <Text
                                style = {[styles.disciplineButtons,
                                        {backgroundColor: this.state.seeSport? '#17DD22': '#ffffff'}]}
                                >Sport
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {boulderGrades}
                    {sportGrades}
                    
                    <View style = {styles.submissionButtons} >
                        <Button title = {'Submit'} onPress = {this.handleSubmit} />
                        <Button title = {'Cancel'} onPress = {() => this.props.updateOverlay(false)} />
                    </View>
                </View>
            </Overlay>

        );
    }
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
    },
    pageText: {
        fontSize: 20,
    },
    disciplineContainer: {
        marginLeft: 20,
    },
    submissionButtons: {
        width: 350,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
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