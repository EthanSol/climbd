import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';

//RENDERING A SINGLE CLIMB OBJECT, WILL BE USEFUL IN FLATLIST
export function Climb (props) {

    if(!props.route.matchesFilter(props.grades)) {
        return null;
    } else {
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
}

export function ClimbSetter (props) {
    return(
        <View style = {{flexDirection: 'row'}}>
            <TouchableOpacity 
                style = {[styles.climbContainer, {flex: 5}]}
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
            <TouchableOpacity
                style = {[styles.container, {flex: 1}]}
                >
                <Image style = {{height: 30, width: 30}} source = {require('./img/delete.png')} />
            </TouchableOpacity>
        </View>

    );
}






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