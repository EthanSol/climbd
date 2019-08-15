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
            search: '',
        }
    }

    static navigationOptions = {
        title: 'Edit Climbs',
    }

    render() {

        const {navigate} = this.props.navigation;

        return(
                <View style={{flex:1, backgroundColor: '#f3f3f3'}}>
                    <RouteFilterOverlay
                        overlay = {this.state.filterOverlay}
                        updateOverlay = {(state) => this.setState({filterOverlay: state})}
                    />

                    <EditRouteOverlay
                        visible = {this.state.addRouteOverlay}
                        closeRouteOverlay = {() => this.setState({addRouteOverlay: false})}
                    />


                    <RouteSettingHeader displaySetting = {true} navigate = {navigate} />

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
});