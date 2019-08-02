import React from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { Overlay } from 'react-native-elements';
import { GradeFilter } from '../sections/GradeTypeFilter.js';
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
            boulderGrades: [0, 13],
            sportGrades: [5.5, 5.13],
            overlay: false,
            posX: null,
            posY: null,
        }
    }

    static navigationOptions = {
        title: 'Browse Climbs',
        headerRight: (
            <Button
                title = {'Login'}
                onPress = {() => props.navigation.navigate('Login')}
            />
        ),
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

    render() {

        const { navigate } = this.props.navigation;

        return(
            <View style = {styles.container}>
                <Overlay isVisible = {this.state.overlay} onBackdropPress = {() => this.setState({overlay: false})} >
                    <View >
                        <GradeFilter updateBoulderGrades = {this.updateBoulderGrades} />
                        <View style = {{flexDirection: 'row', justifyContent: 'space-evenly'}} >
                            <Button title = {'Submit'} onPress = {() => this.setState({overlay: false})} />
                            <Button title = {'Cancel'} onPress = {() => this.setState({overlay: false})} />
                        </View>                        
                    </View>
                </Overlay>
                <Button title = {'Filters'} onPress  ={() => this.setState({overlay: true})} />
                <MapFilter
                    returnCoordinates = {this.getCoordinates}
                    clearFilter = {() => this.setState({posX: null, posY: null})}
                />
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
});