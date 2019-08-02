import React from 'react';
import { StyleSheet, View, Text, Button, Alert, FlatList, AsynchStorage } from 'react-native';
import { CommentCard } from '../sections/CommentCard';
import { Overlay } from 'react-native-elements';

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

            },
            overlay: false,
        }
    }

    static navigationOptions = {
        title: 'Climb Info'
    }

    render(){


        return (
            <View >
                <Overlay
                    isVisible = {this.state.overlay}
                    onBackdropPress = {() => this.setState({overlay: false})} >
                    <View >
                        <Text >Form for sending</Text>
                        <View style = {{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                            <Button title = {'Submit'} onPress = {() => this.setState({overlay: false})} />
                            <Button title = {'Cancel'} onPress = {() => this.setState({overlay: false})} />                             
                        </View>
                       
                    </View>

                </Overlay>

                <View style = {styles.top} >
                    <Text style = {styles.title} >{this.state.climb.type}</Text>
                    <Button title = {'I sent it!'} onPress = {() => this.setState({overlay: true})} />
                </View>

                <View style = {styles.commentContainer} >
                    <Text style = {styles.pageText} >Comments:</Text>
                    <FlatList
                        style = {styles.commentList}
                        data = {exampleComments}
                        renderItem = {({item}) => <CommentCard textStyle = {styles.pageText} comment = {item} /> }
                    />
                </View>

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

                <Text style = {{alignSelf: 'center', margin: 20}} >Location will go here when it exists</Text>
                <View style = {{padding: 20, justifyContent: 'center'}} >
                    <Text >Setters Comments:</Text>
                    <Text style = {[styles.pageText, {paddingTop: 5}]} >{this.state.climb.setterDescription}</Text>
                </View>
                

            </View>

        );
    }
};


const styles = StyleSheet.create({
    container: {
        
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20,
    },
    commentList: {
        borderWidth: 1,
        borderColor: '#C1C1C1',
    },
    commentContainer: {
        justifyContent: 'center',
        alignSelf: 'center',
        height: 250,
        width: 350,
        margin: 10,
    },
    pageText: {
        fontSize: 18,
    },
    title: {
        fontSize: 25,
    },
    stats: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    }
});