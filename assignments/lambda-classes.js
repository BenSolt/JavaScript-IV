// CODE here for your Lambda Classes




// BASE CLASS PERSON

class Person {
    constructor(attr) {
        this.name = attr.name,
            this.age = attr.age,
            this.location = attr.location
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location} and am ${this.age} years old`);
    }

}


// INSTRUCTOR CLASS

class Instructor extends Person {
    constructor(attr) {
        super(attr)

        this.specialty = attr.specialty,
            this.favLanguage = attr.favLanguage,
            this.catchPhrase = attr.catchPhrase
    }


    demo(subject) {
        console.log(`Today we are learning about ${subject}`);

    }



    //
    //receives a student object and a subject string as arguments and logs out
    //'{student.name} receives a perfect score on {subject}'
    //
    //

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }

}


// STUDENT CLASS



class Student extends Person {

    constructor(attr) {

        super(attr);


        this.previousBackground = attr.previousBackground,
            this.className = attr.className,
            this.favSubjects = attr.favSubjects
    }



    //
    //a method that logs out all of the student's favoriteSubjects one by one.
    //
    // []
    //

    listsSubjects() {
        for (let i = 0; i < this.favSubjects.length; i++)
            console.log(`${this.favSubjects[i]}`);
    }


    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }


    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }

}


// PROJECT MANAGER - extension of instructor

class ProjectManager extends Instructor {
    constructor(attr) {
        super(attr);
        this.gradClassName = attr.gradClassName,
            this.favInstructor = attr.favInstructor
    }

    standUp(channel) { // a slack channel and logs
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student}'s code on ${subject}`);
    }

}


// Instructor setup

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});




// Student steup


const Ben = new Student({
    name: 'Benjamin',
    location: 'Philadelphia area',
    age: 35,
    favSubjects: ['math', 'Science', 'history']
});


//P Manager setup

const Jon = new ProjectManager({
    name: 'Jon',
    location: 'Alaska',
    age: 30,
    favLanguage: 'Java',
    specialty: 'Back-End',
    catchPhrase: `Don't forget the homies`
});






//SPEAK

Ben.speak();
fred.speak();
Jon.speak();



//Student

Ben.PRAssignment('java');

Ben.sprintChallenge('Javascript');

Ben.listsSubjects();



//Instructor

fred.grade(Ben, 'java');



//Ben.grade('java');

// Instructor

fred.speak();

fred.demo('math');




// Project Manager

Jon.debugsCode('alex', 'Javascript')

Jon.standUp('Web22')