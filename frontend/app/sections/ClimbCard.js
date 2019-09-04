import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Alert } from 'react-native';
import { Icon, Rating } from 'react-native-elements';

//RENDERING A SINGLE CLIMB OBJECT, WILL BE USEFUL IN FLATLIST
export class ClimbCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            ratingValue: 2,
        }
    }

    render () {

        let gradeText;

        if(this.props.route.discipline == 'Boulder'){
            gradeText = <Text style = {styles.climbText}>V{this.props.route.grade}</Text>
        } else {
            gradeText = <Text style = {styles.climbText}>5.{this.props.route.grade}</Text>
        }

        return(
            <TouchableOpacity 
                style = {styles.climbContainer}
                onPress = {() => this.props.navigate('ClimbInfo', {routeID: this.props.route.id})}
            >
                <View style = {{flexDirection: 'row'}}>
                    <Text style = {styles.climbText}>{this.props.route.discipline}</Text>
                    {gradeText}
                </View>
                <View style = {{flexDirection: 'row'}}>
                    <Text style = {styles.climbText}>{this.props.route.color}</Text>
                    <Text style = {styles.climbText}>{this.props.route.setter.username}</Text>
                </View>
            </TouchableOpacity>
        );        
    }

}



export function ClimbCardSetter (props) {
    return(
        <View style = {{flexDirection: 'row', alignSelf: 'center', width: 350}}>
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
            <View style = {{alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-evenly'}} >
                <Icon name = 'delete'
                    onPress = {() => Alert.alert('Deleting a route', 'Are you sure?')}
                    fontSize = {40}
                    style = {{marginLeft: 10, marginRight: 10}}
                    borderRadius = {20}
                />
                <Icon name = 'edit'
                    onPress = {() => Alert.alert('Edit a route', 'Here\'s the overlay')}
                    fontSize = {40}
                    borderRadius = {20}
                />                         
            </View>
        </View>

    );
}






const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gradeFilter: {
        flex: 1,
        flexDirection: 'row',
    },

    climbContainer: {
        flex: 1,
        borderWidth: 1,
    },
    climbText: {
        flex: 1,
        padding: 5,
        fontSize: 18,
        textAlign: 'center',
    },
});