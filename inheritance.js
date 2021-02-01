// parent/supar/base class:
class Parent{
    constructor(){
        this.fatherName = 'nazrul islam'
    }
}
// child/sub/derived class:
class Child extends Parent{                 /** extends + (parent class name) */
    constructor(id, name){
        super();                            /**call supar function */
        this.id = id;
        this.name = name;  
    }
    getFullName(){                                  /**keywordless function */
        return this.name + ' ' +this.fatherName             
    }
}

const baby1 = new Child(1, 'nahid');
const baby2 = new Child(2, 'urmi');
const baby3 = new Child(3, 'sabbir')
console.log(baby1, baby2.getFullName());






class Teacher{
    constructor(){
        this.teachersName = 'jhankar mahbub';
        this.course = 'web development';
    }
}


class Student extends Teacher{
    constructor(id, name, address){
        super();
        this.id = id;
        this.name = name;
        this.address = address;
    }
}
const student1 = new Student(1, 'nazma', 'dhaka');
const student2 = new Student(1, 'akter', 'shavar');
const student3 = new Student(1, 'urmi', 'bangladesh');
console.log(student3);