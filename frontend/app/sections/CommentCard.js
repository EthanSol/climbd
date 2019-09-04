import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Rating } from 'react-native-elements';

export function CommentCard(props){
    return (
        <View style = {{paddingBottom: 10, justifyContent: 'flex-start'}} >
            <Rating
                style = {{width: 90}}
                imageSize={20}
                readonly
                startingValue={props.comment.rating}
            />
            <Text style = {props.textStyle} >User: {props.comment.poster.username}</Text>
            <Text style = {props.textStyle} >{props.comment.text}</Text>
        </View>
    );
}


const styles = StyleSheet.create({

});