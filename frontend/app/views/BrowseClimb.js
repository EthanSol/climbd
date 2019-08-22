import React from 'react';
import { StyleSheet, View, FlatList, Text, Button } from 'react-native';
import { Overlay } from 'react-native-elements';
import { RouteFilterOverlay } from '../sections/RouteFilterOverlay.js';
import { route as route } from '../sections/Route.js';
import { ClimbCard } from '../sections/ClimbCard.js';
import { MapFilter } from '../sections/ClickableMap.js';



//building a list of routes
var routes = [];

for (let i = 0; i < 13; i++){
    routes.push( new route('Boulder', i, 'red', 'Ethan'));
    routes.push( new route('Boulder', i , 'blue', 'Tudor'));
}



export class BrowseClimbsScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            overlay: false,
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
        title: 'Browse Climbs',
    }

    updateBoulderGrades = values => {
        this.setState({boulderGrades: values});
    }

    updateSportGrades = values => {
        this.setState({sportValues: values});
    }

    getCoordinates = (x,y) => {
        this.setState({posX: x, posY: y})
    }

    updateFilters = (filters) => {
        this.setState({filters: filters});
        //MAKE API CALL
    }

    render() {

        const { navigate } = this.props.navigation;

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
            <View style = {styles.container}>
                <RouteFilterOverlay
                    returnFilters = {this.updateFilters}
                    overlay = {this.state.overlay}
                    updateOverlay = {(state) => this.setState({overlay: state})}
                />

                <View style = {{padding: 10}}>
                    <Text style = {styles.filterText} >{locationFilter}</Text>
                    <Text style = {styles.filterText} >{boulderFilter}</Text>
                    <Text style = {styles.filterText} >{sportFilter}</Text>
                </View>

                <Button title = {'Filters'} onPress  ={() => this.setState({overlay: true})} />

                <FlatList
                    style = {styles.climbContainer}
                    data = { routes }
                    renderItem = {({item}) => <ClimbCard navigate = {navigate} route = {item} />}
               />
            </View>

        );
    }
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    gradeFilter: {
        flex: 1,
        flexDirection: 'row',
    },

    climbContainer: {
        flex: 2,
    },
    climbText: {
        flex: 1,
        fontSize: 15,
        color: '#FF8000',
        textAlign: 'center',
    },
    filterText: {
        padding: 2,
        fontSize: 14,
    }
});