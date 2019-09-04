import React from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';


export function ProfileCard (props){
    return (
        <TouchableOpacity 
            style = {styles.card}
            onPress = {() => Alert.alert('User Info', props.profile.name)}
        >
            <Text style = {{alignSelf: 'flex-start', fontSize: 18}} >{props.profile.rank}.</Text>
            <Text style = {{alignSelf: 'center', fontSize: 18}} >{props.profile.name}</Text>
            <Text style = {{alignSelf: 'flex-end', fontSize: 18}} >{props.profile.pts} pts</Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create ({
    card: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 5,
    },
    text: {
        fontSize: 15,

    }
});