"use strict";

class Human {
    constructor(name, surname, birthday){
        this.name = name;
        this.surname = surname;
        this.birthday = birthday;
    }

    get age(){
        let now = new Date().getFullYear();
        let birthYear = new Date(this.birthday).getFullYear();
        return  now - birthYear;
    }

    dataGonder(){
        let output = `${this.name} ${this.surname} ${this.age}`;
        return output;
    }
}

let h1 = new Human("Misir", "Esgerov", "1994-02-24");
console.log(h1);

class Student extends Human {
    constructor(name, surname, birthday, email, group){
        super(name, surname, birthday);

        this.email = email;
        this.group = group;
    }

    sattar(){
        return `${this.dataGonder()} - email: ${this.email}, group: ${this.group}`;
    }
}


let s1 = new Student("Fuad", "Tagiyev", "1998-04-12","fuad@code.edu.az", "P112");
console.log(s1.sattar());

class Teacher extends Human {
    constructor(name, surname, bday){
        super(name, surname, bday);
    }
}

let t1 = new Teacher("Afiq", "Mehdizade", "1994-06-17");
console.log(t1.dataGonder());
console.log(t1.age);
console.log(t1.birthday);
