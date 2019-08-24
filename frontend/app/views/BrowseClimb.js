import React from 'react';
import { StyleSheet, View, FlatList, Text, Button } from 'react-native';
import { RouteFilterOverlay } from '../sections/RouteFilterOverlay.js';
import { route as route } from '../sections/Route.js';
import { ClimbCard } from '../sections/ClimbCard.js';

const root = `http://10.0.2.2:8000`;



export class BrowseClimbsScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            routeData: [],
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

    getRoutesFromAPI() {
        fetch(root + '/api/routes').
            then(response => response.json()).
            then(responseJson => this.setState({routeData: responseJson}));
    }

    componentDidMount() {
        this.getRoutesFromAPI();
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

        let routeList;
        if(this.state.routeData.length){
            routeList = 
                <FlatList
                    style = {styles.climbContainer}
                    data = { this.state.routeData }
                    renderItem = {({item}) => <ClimbCard navigate = {navigate} route = {item} />}
                />
        } else {
            routeList = 
                <Text style = {{alignSelf: 'center', fontSize: 30}} >No routes found</Text>
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
                {routeList}
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