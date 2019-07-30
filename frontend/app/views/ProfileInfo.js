import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';

//ROUTE OBJECT - WILL LIKELY BE USED FOR CREATING ROUTES AFTER PULLING DATA FROM API
class route {
    constructor(type, grade, color, setter){
        this.type = type;
        this.grade = grade;
        this.color = color;
        this.setter = setter;
    }

    matchesFilter(grades){
        return ((this.grade >= grades[0]) && (this.grade <= grades[1]));
    }
};


//building a list of routes
var routes = [];

for (let i = 0; i < 13; i++){
    routes.push( new route('Boulder', i, 'red', 'Ethan'));
    routes.push( new route('Boulder', i , 'blue', 'Tudor'));
}



//RENDERING A SINGLE CLIMB OBJECT, WILL BE USEFUL IN FLAT LIST
function Climb (props) {

        return(
            <TouchableOpacity 
            style = {styles.climbContainer}
            onPress = {() => Alert.alert('You clicked a climb!', 'Congrats!')}>
                <View style = {{flexDirection: 'row'}}>
                    <Text style = {styles.climbText}>{props.route.type}</Text>
                    <Text style = {styles.climbText}>V{props.route.grade}</Text>
                </View>
                <View style = {{flexDirection: 'row'}}>
                    <Text style = {styles.climbText}>{props.route.color}</Text>
                    <Text style = {styles.climbText}>{props.route.setter}</Text>
                </View>
            </TouchableOpacity>
        );

}






function TopRoutes(props){

    return(
        <View style = {{flexDirection: 'row'}} >
            <View style = {styles.table} >
                <Text style = {{textAlign: 'center'}} >Boulder</Text>
                <FlatList 
                    data = {routes}
                    renderItem = {({item}) => <Climb route = {item} /> }
                />
            </View>
            <View style = {styles.table} >
                <Text style = {{textAlign: 'center'}} >Sport</Text>
                <FlatList 
                    data = {routes}
                    renderItem = {({item}) => <Climb route = {item} /> }
                />
            </View>
        </View>
    );
}

export class ProfileScreen extends React.Component {
    constructor(props){
        super(props);
    }


    render() {
        return (
            <View style = {styles.container} >
                <Text style = {styles.infoText} >Ethan</Text>
                <Text style = {styles.infoText} >Boulder Pts: 33</Text>
                <Text style = {styles.infoText} >Sport Pts: 45</Text>
                <Text style = {[styles.infoText, {textAlign: 'center'}]} >Top Routes</Text>
                <TopRoutes />
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
    },
    table: {
        flex: 1,

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