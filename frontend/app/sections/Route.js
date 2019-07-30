import { TouchableOpacity, Text, View } from 'react-native';

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