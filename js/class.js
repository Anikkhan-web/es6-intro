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
}

const amir =  new Instructor('amir','dhaka')
amir.startSupportSession('9.00')
amir.crateQuiz(60)
console.log(amir);