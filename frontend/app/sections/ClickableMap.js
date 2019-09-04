import React from 'react';
import { StyleSheet, View, Button, Image, TouchableWithoutFeedback, Alert } from 'react-native';

export class MapFilter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            markerX: this.props.locX,
            markerY: this.props.locY,
            markerShow: this.props.touch? 'none': 'flex',
            position: this.props.touch? 'relative': 'absolute',
        }
    }


    updateMarker = (evt) => {
        this.setState({markerX: evt.nativeEvent.locationX});
        this.setState({markerY: evt.nativeEvent.locationY});
        this.setState({markerShow: 'flex', position: 'absolute'});
    }

    touchRespond = (evt) => {
        if(this.props.touch){
            this.updateMarker(evt);
            this.props.returnCoordinates(evt.nativeEvent.locationX, evt.nativeEvent.locationY);            
        }
    }

    clearFilter = () => {
        this.setState({markerShow: 'none', position: 'relative'});
        this.props.clearFilter();
    }

    render () {
        return(
            <View style = {{margin: 10}} >
                <View style = {{marginBottom: 5}}>{this.props.touch ? 
                    <Button
                        title = {'Clear Location Filter'}
                        onPress = {this.clearFilter}
                        style = {styles.button}
                    /> : null}
                </View>

                <View style = {{alignSelf: 'center'}} >
                    <TouchableWithoutFeedback onPress = {this.touchRespond} >
                        <Image style = {styles.image} source = {require('./img/map.png')} />
                    </TouchableWithoutFeedback>
                    <View
                        style =
                        {[styles.marker, {
                            top: this.state.markerY,
                            left: this.state.markerX,
                            display: this.state.markerShow,
                            position: this.state.position,
                        }
                    ]} />
                </View>

            </View >
        );
    }

};

MapFilter.defaultProps = {
    touch: true,
    locX: null,
    locY: null,
}


const styles = StyleSheet.create({
    container: {

    },
    image: {
        width: 280,
        height: 300,
        resizeMode: 'stretch',
        //alignSelf: 'center',
    },
    marker: {
        top: 100,
        left : 100,
        height: 10,
        width: 10,
        borderRadius: 10/2,
        backgroundColor: '#FF0000',
    },
    button: {
        marginBottom: 10,
    },
});