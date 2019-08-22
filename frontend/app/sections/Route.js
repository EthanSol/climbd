import React from 'react';

//ROUTE OBJECT - WILL LIKELY BE USED FOR CREATING ROUTES AFTER PULLING DATA FROM API
export class route {
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


// //building a list of routes
// var routes = [];

// for (let i = 0; i < 13; i++){
//     routes.push( new route('Boulder', i, 'red', 'Ethan'));
//     routes.push( new route('Boulder', i , 'blue', 'Tudor'));
// }


