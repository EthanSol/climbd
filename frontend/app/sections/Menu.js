import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';


function MenuRow(props){
    return(
        <View
            style = {styles.buttonRow}>
            <TouchableOpacity
                style = {[styles.buttonStyles, {borderRightWidth: 0.5}]}
                onPress = {() => navigateRoute(props.routeLeft)}>
                <Text style = {styles.buttonText}>{props.msgLeft}</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style = {[styles.buttonStyles, {borderLeftWidth: 0.5}]}
                onPress = {() => navigateRoute(props.routeRight)}>
                <Text style = {styles.buttonText}>{props.msgRight}</Text>
            </TouchableOpacity>

        </View>
    );
}


export function Menu (props){

    navigateRoute = (route) => {
        props.navigate(route);
    }


    return(
        <View style = {styles.container}>
            <Image 
                style = {styles.mainImage}
                source = {require('./img/bouldering.png')}
            />
            <MenuRow
                msgLeft = 'Browse Climbs' routeLeft = 'BrowseClimbs'
                msgRight = 'Leaderboards' routeRight = 'Leaderboard'
            />
            
            <MenuRow
                msgLeft = 'My Stats' routeLeft = 'Profile'
                msgRight = 'Login' routeRight = 'Login'
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 6,
        backgroundColor: '#2E2E2E',
    },

    buttonRow: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ffffff',
        borderBottomWidth: 1,
    },

    buttonStyles: {
        backgroundColor: '#2E2E2E',
        width: '50%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ffffff',
    },

    buttonText: {
        color: '#FF8000',
        fontSize: 18,
    },
    mainImage: {
        width: undefined,
        height: undefined,
        flex: 8,
    }
});