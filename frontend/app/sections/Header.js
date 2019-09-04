import React from 'react';
import { StyleSheet, Button, View, Picker, Alert } from 'react-native';


export class RouteSettingHeader extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            route: 'EditRoutes',
        }
    }

    render (){
        if (this.props.displaySetting){
            return (
                <View style = {styles.container} >
                    <Picker 
                        selectedValue={this.state.route}
                        style={{height: 50, width: 200}}
                        onValueChange={(itemValue, itemIndex) => this.setState({route: itemValue})}
                    >
                        <Picker.Item label = "Edit routes" value = 'EditRoutes' />
                        <Picker.Item label = "Manage Accounts" value = 'ManageAccounts' />
                    </Picker>
                    <Button 
                        title = 'Go'
                        style = {styles.button}
                        onPress = {() => this.props.navigate(this.state.route)}
                    />
                </View>
            );
        } else return null;
    }
};


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: 60,
        backgroundColor: '#C5C5C5'
    },
    picker: {
        flex: 1,
        height: 50,
        width: 180,
    },
    button: {
        flex: 1,
        width: 100,
        justifyContent: 'flex-end',
        alignContent: 'flex-end',
    }
});