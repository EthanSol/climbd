import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Alert, Button } from 'react-native';
import { Overlay } from 'react-native-elements';
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
                    renderItem = {({item}) => <ClimbCard navigate = {props.navigate} route = {item} /> }
                />
            </View>
            <View style = {styles.table} >
                <Text style = {{textAlign: 'center', fontSize: 14, padding: 5,}} >Sport</Text>
                <FlatList 
                    data = {routes}
                    renderItem = {({item}) => <ClimbCard navigate = {props.navigate} route = {item} /> }
                />
            </View>
        </View>
    );
}


export class ProfileScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            overlay: false,
        }
    }
    
    static navigationOptions = {
        title: 'Profile Information',
    }


    render() {

        const { navigate } = this.props.navigation

        return (
            <View style = {styles.container} >

                <Overlay isVisible = {this.state.overlay} onBackdropPress = {()=>this.setState({overlay: false})} >
                    <FlatList 
                        data = {routes}
                        renderItem = {({item}) => <ClimbCard navigate = {navigate} route = {item} /> }
                    />
                </Overlay>

                <View >
                    <Text style = {styles.infoText} >Ethan</Text>
                    <Text style = {styles.infoText} >Boulder Pts: 33</Text>
                    <Text style = {styles.infoText} >Sport Pts: 45</Text>
                    <Text style = {[styles.infoText, {textAlign: 'center'}]} >Top Routes</Text> 
                </View>

                <TopRoutes navigate = {navigate} />

                <Button title = {"View Projects"} onPress = {() => this.setState({overlay: true})} />
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