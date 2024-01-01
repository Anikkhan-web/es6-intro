class Instructor{
    name;
    designation = 'web course Instructor'
    team = "web team"
    location;
    constructor(name,location){
        this.name = name;
        this.location = location

    }
    startSupportSession(time){
        console.log(`start the support session at ${time}`);
    }
    crateQuiz(module){
        console.log(`please create quiz for module${module}`);
    }
provideFeedback(){
    console.log(`${this.name} thank you for your feedback`);
}
}

class Developer{
    name;
    designation = 'web course Instructor'
    team = "web team"
    location;
    tech;
    constructor(name,location,tech){
        this.name = name;
        this.location = location
        this.tech = tech

    }
    developFeature(feature){
        console.log(`start the support session at ${feature}`);
    }
    release(version){
        console.log(`please create quiz for module${version}`);
    }
provideFeedback(){
    console.log(`${this.name} thank you for your feedback`);
}
}