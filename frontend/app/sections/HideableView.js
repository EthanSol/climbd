import React from 'react';
import { View } from 'react-native';


export function HideableView (props) {
    if(props.hide){
        return null;
    } else {
        return (
            <View >
                
            </View>
        );
    }
}