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