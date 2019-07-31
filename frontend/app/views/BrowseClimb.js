import React from 'react';
import { StyleSheet, View, Text, FlatList, Button } from 'react-native';
import { GradeFilter } from '../sections/GradeTypeFilter.js';
import { route as route } from '../sections/RouteObj.js';
import { Climb } from '../sections/Route.js';



//building a list of routes
var routes = [];

for (let i = 0; i < 13; i++){
    routes.push( new route('Boulder', i, 'red', 'Ethan'));
    routes.push( new route('Boulder', i , 'blue', 'Tudor'));
}



export class BrowseClimbsScreen extends React.Component {

    static navigationOptions = {
        title: 'Browse Climbs',
        headerRight: (
            <Button
                title = {'Login'}
                onPress = {() => props.navigation.navigate('Login')}
            />
        ),
    }

    state = {
        boulderGrades: [0, 13],
        sportGrades: [5.5, 5.13],
    }

    updateBoulderGrades = values => {
        this.setState({boulderGrades: values});
    }

    updateSportGrades = values => {
        this.setState({sportValues: values});
    }

    render() {


        return(
            <View style = {styles.container}>
                <Text style = {{flex: 1, justifyContent: 'center', fontSize: 26}}>Browse Climbs</Text>
                <Text style = {{flex: 1}}>Location filter will be here</Text>
                <GradeFilter updateBoulderGrades = {this.updateBoulderGrades} />
                <FlatList
                    style = {styles.climbContainer}
                    data = { routes }
                    renderItem = {({item}) => <Climb type = { 'Boulder' } grades = {this.state.boulderGrades} route = {item} />}
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
        borderWidth: 1,
        backgroundColor: '#2E2E2E',
    },
    climbText: {
        flex: 1,
        fontSize: 15,
        color: '#FF8000',
        textAlign: 'center',
    },
});