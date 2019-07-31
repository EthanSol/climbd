import React from 'React';
import { StyleSheet, View, Text, Button } from 'react-native';


function Leaderboard(props){
    return (
        <View style = {styles.leaderboardOrientation}>
            <Text style = {styles.buttonText}>BOULDER</Text>
            <Text style = {styles.buttonText}>SPORT</Text>
        </View>

    );
}


export class LeaderboardScreen extends React.Component{

    static navigatorOptions = {
        title: 'Leaderboards',
        headerRight: (
            <Button
                title = {'Login'}
                onPress = {() => this.props.navigation('Login')}
            />
        ),
    }

    render() {
        return(
            <>
                <Text h1>PLACEHOLDER FOR LEADERBOARD</Text>
                <Leaderboard />
            </>
        );
    }
};



const styles = StyleSheet.create({
    container: {
        flex: 6,
        backgroundColor: '#2E2E2E',
        alignItems: 'center',
    },
    leaderboardOrientation: {
        flex: 4,
        flexDirection: 'row',
        backgroundColor: '#FF8000',
        borderWidth: 20,
        borderColor: '#ffffff',
    },
    buttonText: {
        flex: 2,
        flexDirection: 'column',
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'flex-end',
        color: '#ffffff',
    },
});