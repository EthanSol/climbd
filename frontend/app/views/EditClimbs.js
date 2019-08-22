import React from 'react';
import { AsyncStorage, Image, FlatList, TouchableOpacity, Text, View, StyleSheet, Alert } from 'react-native';
import { RouteSettingHeader } from '../sections/Header.js';
import { Icon, Overlay, Button } from 'react-native-elements';
import { ClimbCardSetter } from '../sections/ClimbCard.js';
import { EditRouteOverlay } from '../sections/EditRouteOverlay.js';
import { RouteFilterOverlay } from '../sections/RouteFilterOverlay.js';


const exampleRoutes = [];

for (let i = 0; i < 40; i++){
    exampleRoutes.push ({
        type: 'Boulder',
        grade: 6,
        setter: 'Ethan',
        color: 'Red',
    });
}


//USE REFRESSCONTROL FOR BROWSING TO ALLOW SETTER TO SEE IF CHANGE CAME THROUGH
export class EditClimbsScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            filterOverlay: false,
            addRouteOverlay: false,
            filters: {
                seeBoulders: true,
                boulderValues: [0, 13],
        
                seeSport: true,
                sportValues: [4, 13],
    
                posX: null,
                posY: null,
            }
        }
    }

    static navigationOptions = {
        title: 'Edit Climbs',
    }

    updateFilters = (filters) => {
        this.setState({filters: filters});
        //MAKE API CALL
    }

    render() {

        const {navigate} = this.props.navigation;

        let locationFilter;
        let boulderFilter;
        let sportFilter;

        if (this.state.filters.posX && this.state.filters.posY){
            locationFilter = 'Location (applied)';
        } else {
            locationFilter = 'Location (none)';
        }

        if(this.state.filters.seeBoulders){
            boulderFilter = `Boulders: V${this.state.filters.boulderValues[0]} - V${this.state.filters.boulderValues[1]}`;
        } else {
            boulderFilter = 'Boulders: (N/A)'
        }

        if(this.state.filters.seeSport){
            sportFilter = `Sport: 5.${this.state.filters.sportValues[0]} - 5.${this.state.filters.sportValues[1]}`;
        } else {
            sportFilter = 'Sport: (N/A)'
        }


        return(
                <View style={{flex:1, backgroundColor: '#f3f3f3'}}>
                    <RouteFilterOverlay
                        overlay = {this.state.filterOverlay}
                        updateOverlay = {(state) => this.setState({filterOverlay: state})}
                        returnFilters = {this.updateFilters}
                    />

                    <EditRouteOverlay
                        visible = {this.state.addRouteOverlay}
                        closeRouteOverlay = {() => this.setState({addRouteOverlay: false})}
                    />


                    <RouteSettingHeader displaySetting = {true} navigate = {navigate} />

                    <View style = {{padding: 10}}>
                        <Text style = {styles.filterText} >{locationFilter}</Text>
                        <Text style = {styles.filterText} >{boulderFilter}</Text>
                        <Text style = {styles.filterText} >{sportFilter}</Text>
                    </View>

                    <Button title = {"Filters"} onPress = {() => this.setState({filterOverlay: true})} />

                    <View >
                        <FlatList
                            data = { exampleRoutes }
                            renderItem = {({item}) => <ClimbCardSetter route = {item} />}
                        />                        
                    </View>


                    <TouchableOpacity
                        style = {styles.plusWrap}
                        onPress = {() => this.setState({addRouteOverlay: true})}
                    >
                        <Image
                            style = {styles.plus}
                            source = {require('../sections/img/plus.png')}
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
    plusWrap: {
        position: 'absolute',
        bottom: 20,
        right: 0,
        borderRadius: 30,
        color: 'black',
    },
    plus: {
        height: 60,
        resizeMode: 'contain',
    },
    filterText: {
        padding: 2,
        fontSize: 14,
    }
});