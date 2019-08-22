import React from 'react';
import { ScrollView, StyleSheet, View, Text, Button, Alert, FlatList, AsynchStorage } from 'react-native';
import { CommentCard } from '../sections/CommentCard';
import { Overlay, Rating } from 'react-native-elements';
import { MapFilter } from '../sections/ClickableMap';

const exampleComments = [];

for(let i = 0; i < 20; i++){
    exampleComments.push({
        username: 'strongboy69',
        rating: 'Rating: *****',
        comment: 'who sets this stupid fucking shit!'
    });
}


export class ClimbInfoScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            climbId: 'xyz-examine-your-zipper',
            climb: {
                type: 'Boulder',
                grade: 'V6',
                color: 'White',
                numberOfSends: '25',
                averageRating: '*****',
                setterDescription: 'A really high quality boulder. It has a bunch of small crimps that force you to campus it like a board. Enjoy :)',
                locX: 44.29,
                locY: 99.43,
            },
            overlay: false,
            ratingValue: null,
        }
    }

    static navigationOptions = {
        title: 'Climb Info'
    }

    render(){


        return (
            <ScrollView >
                <Overlay
                    isVisible = {this.state.overlay}
                    onBackdropPress = {() => this.setState({overlay: false})} >
                    <View style = {{justifyContent: 'space-evenly'}} >
                        <Text >Form for sending</Text>
                        <Rating
                            onFinishRating = {(value) => this.setState({ratingValue: value})}
                            showRating = {false}
                            defaultRating = {3}
                        />
                        <View style = {{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                            <Button title = {'Confirm'} onPress = {() => this.setState({overlay: false})} />
                            <Button title = {'Cancel'} onPress = {() => this.setState({overlay: false})} />                             
                        </View>
                       
                    </View>

                </Overlay>

                <Text style = {styles.title} >{this.state.climb.type}</Text>

                <View style = {styles.stats} >
                    <View >
                        <Text style = {styles.pageText} >Grade: {this.state.climb.grade}</Text>
                        <Text style = {styles.pageText} >Average Rating: {this.state.climb.averageRating}</Text>
                    </View>

                    <View >
                        <Text style = {styles.pageText} >Color: {this.state.climb.color}</Text>
                        <Text style = {styles.pageText} >Sends: {this.state.climb.numberOfSends}</Text>
                    </View>
                </View>

                <MapFilter touch = {false} locX = {this.state.climb.locX} locY = {this.state.climb.locY} />
                <View style = {{padding: 20, justifyContent: 'center'}} >
                    <Text >Setters Comments:</Text>
                    <Text style = {[styles.pageText, {paddingTop: 5}]} >{this.state.climb.setterDescription}</Text>
                </View>

                <View style = {styles.commentContainer} >
                    <Text style = {styles.pageText} >Comments:</Text>
                    <FlatList
                        nestedScrollEnabled
                        style = {styles.commentList}
                        data = {exampleComments}
                        renderItem = {({item}) => <CommentCard textStyle = {{fontSize: 18}} comment = {item} /> }
                    />
                </View>

                <View style = {styles.buttonRow} >
                    <Button title = {'I sent it!'} onPress = {() => Alert.alert(
                        'Route Completed!',
                        'Confirm your send',
                        [ {text: 'Cancel', onPress: () => console.log('yis') }, {text: 'OK', onPress: () => console.log('OK Pressed')},],
                        )}
                    />
                    <Button title = {'Add Comment'} onPress = {()=> this.setState({overlay: true})} />
                </View>

            </ScrollView>

        );
    }
};


const styles = StyleSheet.create({
    container: {
        
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 20,
    },
    commentList: {
        borderWidth: 1,
        borderColor: '#C1C1C1',
    },
    commentContainer: {
        justifyContent: 'center',
        alignSelf: 'center',
        height: 350,
        width: 350,
        margin: 10,
    },
    pageText: {
        fontSize: 20,
    },
    title: {
        marginTop: 20,
        fontSize: 25,
        alignSelf: 'center',
    },
    stats: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    }
});