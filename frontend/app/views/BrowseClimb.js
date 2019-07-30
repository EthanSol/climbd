import React from 'react';
//import Climb from '../sections/Route.js';
import { StyleSheet, Switch, View, Text, TouchableOpacity, ScrollView, FlatList, Alert } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
// import { route } from '../sections/Routes.js';


//ROUTE OBJECT - WILL LIKELY BE USED FOR CREATING ROUTES AFTER PULLING DATA FROM API
class route {
    constructor(type, grade, color, setter){
        this.type = type;
        this.grade = grade;
        this.color = color;
        this.setter = setter;
    }

    matchesFilter(grades){
        return ((this.grade >= grades[0]) && (this.grade <= grades[1]));
    }
};


//building a list of routes
var routes = [];

for (let i = 0; i < 13; i++){
    routes.push( new route('Boulder', i, 'red', 'Ethan'));
    routes.push( new route('Boulder', i , 'blue', 'Tudor'));
}



//RENDERING A SINGLE CLIMB OBJECT, WILL BE USEFUL IN FLAT LIST
function Climb (props) {

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

//EXAMPLE CLIMB LIST FOR DEV PURPOSES
function ClimbList (props) {
    return(
        <View >
            <Climb type = {'Boulder'} grades = {props.boulderGrades} route = {routes[0]} />
            <Climb type = {'Boulder'} grades = {props.boulderGrades} route = {routes[1]} />
            <Climb type = {'Boulder'} grades = {props.boulderGrades} route = {routes[2]} />
            <Climb type = {'Boulder'} grades = {props.boulderGrades} route = {routes[3]} />
            <Climb type = {'Boulder'} grades = {props.boulderGrades} route = {routes[4]} />
            <Climb type = {'Boulder'} grades = {props.boulderGrades} route = {routes[5]} />
            <Climb type = {'Boulder'} grades = {props.boulderGrades} route = {routes[6]} />
            <Climb type = {'Boulder'} grades = {props.boulderGrades} route = {routes[7]} />
            <Climb type = {'Boulder'} grades = {props.boulderGrades} route = {routes[8]} />
            <Climb type = {'Boulder'} grades = {props.boulderGrades} route = {routes[9]} />
            <Climb type = {'Boulder'} grades = {props.boulderGrades} route = {routes[10]} />
            <Climb type = {'Boulder'} grades = {props.boulderGrades} route = {routes[11]} />
            <Climb type = {'Boulder'} grades = {props.boulderGrades} route = {routes[12]} />
            <Climb type = {'Boulder'} grades = {props.boulderGrades} route = {routes[13]} />
            <Climb type = {'Boulder'} grades = {props.boulderGrades} route = {routes[14]} />
            <Climb type = {'Boulder'} grades = {props.boulderGrades} route = {routes[15]} />
            <Climb type = {'Boulder'} grades = {props.boulderGrades} route = {routes[16]} />
            <Climb type = {'Boulder'} grades = {props.boulderGrades} route = {routes[17]} />
            <Climb type = {'Boulder'} grades = {props.boulderGrades} route = {routes[18]} />
            <Climb type = {'Boulder'} grades = {props.boulderGrades} route = {routes[19]} />
            <Climb type = {'Boulder'} grades = {props.boulderGrades} route = {routes[20]} />
            
        </View>
    );
}

//FILTER FOR GRADES AND FOR ROUTE TYPE
class GradeFilter extends React.Component {

    state = {
        seeBoulders: true,
        boulderValues: [0, 13],

        seeSport: true,
        sportValues: [5, 13],
    }

    boulderSliderValuesChange = values =>  {
        this.setState({boulderValues: values});
    }

    boulderSwitchUpdate = value => {
        this.setState({seeBoulders: value});
    }

    sportSliderValuesChange = values => {
        this.setState({sportValues: values});
    }

    sportSwitchUpdate = value => {
        this.setState({seeSport: value});
    }


    render () {
        return (
            <View style = {styles.gradeFilter}>
                <View style = {{flex: 1, alignItems: 'center'}}>
                    <View style = {{flexDirection: 'row', padding: 5}} >
                        <Text style = {{flex: 1,}}>See boulders?</Text>
                        <Switch style = {{flex: 1}}
                            value = {this.state.seeBoulders} onValueChange = {this.boulderSwitchUpdate}
                        />
                    </View>
                    <Text >Grade Range: V{this.state.boulderValues[0]} - V{this.state.boulderValues[1]}</Text>
                    <MultiSlider
                        values = {this.state.boulderValues} sliderLength = {120} min = {0} max = {13}
                        step = {1} snapped
                        onValuesChange = {this.boulderSliderValuesChange}
                        onValuesChangeFinish = {this.props.updateBoulderGrades}
                    />
                </View>
                <View style = {{flex: 1, alignItems: 'center'}}>
                    <View style = {{flexDirection: 'row', padding: 5}} >
                        <Text style = {{flex: 3}}>See sport climbs?</Text>
                        <Switch style = {{flex: 1}} 
                            value = {this.state.seeSport} onValueChange = {this.sportSwitchUpdate}
                        />
                    </View>
                    <Text >Grade Range: 5.{this.state.sportValues[0]} - 5.{this.state.sportValues[1]}</Text>
                    <MultiSlider
                        values = {this.state.sportValues} sliderLength = {120} min = {5} max = {13}
                        step = {1} snapped onValuesChange = {this.sportSliderValuesChange}
                    />
                </View>
            </View>

        );
    }
};


export class BrowseClimbsScreen extends React.Component {

    static navigationOptions = {
        title: 'Browse Climbs',
    }

    state = {
        boulderGrades: [0, 13],
        sportGrades: [5.5, 5.13],
    }

    updateBoulderGrades = values => {
        this.setState({boulderGrades: values});
    }

    updateSportGrades = values => {
        this.setState({sportValues: values});
    }

    render() {


        return(
            <View style = {styles.container}>
                <Text style = {{flex: 1, justifyContent: 'center', fontSize: 26}}>Browse Climbs</Text>
                <Text style = {{flex: 1}}>Location filter will be here</Text>
                <GradeFilter updateBoulderGrades = {this.updateBoulderGrades} />
                <ScrollView style = {{flex: 1}} >
                    <ClimbList boulderGrades = {this.state.boulderGrades} />
                </ScrollView>
            </View>

        );
    }
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    gradeFilter: {
        flex: 1,
        flexDirection: 'row',
    },

    climbContainer: {
        flex: 2,
        borderWidth: 1,
        backgroundColor: '#2E2E2E',
    },
    climbText: {
        flex: 1,
        fontSize: 15,
        color: '#FF8000',
        textAlign: 'center',
    },
});