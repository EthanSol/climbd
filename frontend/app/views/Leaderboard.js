import React from 'React';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import { ProfileCard } from '../sections/ProfileCard.js';

const exampleProfiles = [];

for (let i = 0; i < 20; i++){
    exampleProfiles.push ({
        name: 'Ethan',
        pts: (i*7)%10,
        rank: i + 1,
    });
}

function Leaderboard(props){
    return (
        <View style = {styles.leaderboardContainer}>
            <View style = {{alignItems: 'center'}} >
                <Text style = {styles.pageText} >BOULDER</Text>
                <FlatList 
                    style = {styles.leaderboard}
                    data = {exampleProfiles}
                    renderItem = {({item}) => <ProfileCard profile = {item} /> }
                />
            </View>     
            <View style = {{alignItems: 'center', paddingTop: 50,}} >
                <Text style = {styles.pageText} >SPORT</Text>
                <FlatList 
                    style = {styles.leaderboard}
                    data = {exampleProfiles}
                    renderItem = {({item}) => <ProfileCard profile = {item} /> }
                />
            </View>
        </View>

    );
}


export class LeaderboardScreen extends React.Component{

    static navigationOptions = {
        title: 'Leaderboards',
    }

    render() {
        return(
            <>
                <Text style = {[styles.title, styles.pageText]} >Leaderboard</Text>
                <Leaderboard />
            </>
        );
    }
};



const styles = StyleSheet.create({
    title: {
        alignSelf: 'center',
        paddingTop: 10,
        paddingBottom: 30,
    },
    pageText: {
        fontSize: 24,

    },
    leaderboardContainer: {
        justifyContent: 'space-evenly',

    },
    leaderboard: {
        height: 200,
        width: 300,
    }
});