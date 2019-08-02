import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Alert, Button } from 'react-native';
import { route as route } from '../sections/Route.js';
import { ClimbCard } from '../sections/ClimbCard';


//building a list of routes
var routes = [];

for (let i = 0; i < 13; i++){
    routes.push( new route('Boulder', i, 'red', 'Ethan'));
    routes.push( new route('Boulder', i , 'blue', 'Tudor'));
}






function TopRoutes(props){

    return(
        <View style = {styles.routeContainer} >
            <View style = {styles.table} >
                <Text style = {{textAlign: 'center', fontSize: 14, padding: 5,}} >Boulder</Text>
                <FlatList 
                    data = {routes}
                    renderItem = {({item}) => <ClimbCard route = {item} /> }
                />
            </View>
            <View style = {styles.table} >
                <Text style = {{textAlign: 'center', fontSize: 14, padding: 5,}} >Sport</Text>
                <FlatList 
                    data = {routes}
                    renderItem = {({item}) => <ClimbCard route = {item} /> }
                />
            </View>
        </View>
    );
}

export class ProfileScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentRank: 'none',
            highestRank: 'none',
        }
    }
    
    static navigationOptions = {
        title: 'Profile Information',
    }


    render() {
        return (
            <View style = {styles.container} >
                <View >
                    <Text style = {styles.infoText} >Ethan</Text>
                    <Text style = {styles.infoText} >Boulder Pts: 33</Text>
                    <Text style = {styles.infoText} >Sport Pts: 45</Text>
                    <Text style = {[styles.infoText, {textAlign: 'center'}]} >Top Routes</Text> 
                </View>

                <TopRoutes />

                <View >
                    <Text style = {styles.infoText} >Current Rank: {this.state.currentRank}</Text>
                    <Text style = {styles.infoText} >Highest Rank: {this.state.highestRank}</Text>
                </View>

            </View>
        );

    }
};



const styles = StyleSheet.create({
    container: {

    },
    infoText: {
        padding: 5,
        fontSize: 25,
        alignSelf: 'center',
    },
    table: {
        flex: 1,

    },
    climbText: {
        flex: 1,
        fontSize: 15,
        color: '#FF8000',
        textAlign: 'center',
    },
    routeContainer: {
        flexDirection: 'row',
        height: 400,
    }
});