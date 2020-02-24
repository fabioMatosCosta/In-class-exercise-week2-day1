let body = document.querySelectorAll("body")[0];


class Person {
    constructor(firsName, lastName){
        this.firsName = firsName;
        this.lastName = lastName;
    }


    sayHello(){
        // console.log(`Hello ${this.firsName} ${this.lastName}`)
        let $h1 = document.createElement("h1");
        $h1.innerHTML = `Hello ${this.firsName} ${this.lastName}`;
        body.appendChild($h1);
        
    }
}

// let person1 = new Person("Elena", "Perrone");
// let person2 = new Person("Yvana", "Wagter");

// person1.sayHello();
// person2.sayHello();

btn = body.querySelectorAll("button")[0];

btn.addEventListener("click", function(){
    let firstName = body.querySelectorAll("#firstName")[0].value;
    let lastName = body.querySelectorAll("#lastName")[0].value;
    let newperson = new Person(firstName, lastName);
    newperson.sayHello();
})


class Student extends Person{
    constructor(aFirstname, aLastname, aCourse){
        super(aFirstname, aLastname);
        this.course = aCourse;
    }
    sayCourse(){
        console.log(`Hi I am following ${this.course}`);
    }
}

let student1 = new Student("John", "Smith", "WDFT");
student1.sayCourse();

class Teacher extends Person{
    constructor(aFirstname, aLastname, aCourse){
        super(aFirstname, aLastname);
        this.course = aCourse;
    }

    sayCourse(){
        console.log(`Hi I am the ${this.course} teacher`);
    }
};

let teacher1 = new Teacher(`Jurgen`, `Something`, `WDFT`);

teacher1.sayHello();
teacher1.sayCourse();

class IronhackEmployee extends Person {
    constructor(aFirstname, aLastname, aRole){
        super(aFirstname, aLastname);
        this.role = aRole;
    }

    sayRole(){
        console.log(`Hi I am the ${this.role}`);
    }
}

let ironhackemployee1 = new IronhackEmployee("Almudena", "Something", "PM");

ironhackemployee1.sayHello();
ironhackemployee1.sayRole();