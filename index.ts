// 1. Intersection
// a. Intersection with Type
type Internship = {
    name: string,
    education: string,
}

type Contract = {
    name: string,
    contractYear: number
}

type InternWithContract = Internship & Contract;

const ihsan: InternWithContract = {
    name: "Ihsan",
    education: 'Vocational High School',
    contractYear: 1
}

// b. Intersection with Interface
interface Employee {
    name: string,
    education: string,
    division: string
}

interface Volunteer {
    name: string,
    impact: string[]
}

interface volunteeringEmployee extends Employee, Volunteer {}

const hafizh: volunteeringEmployee = {
    name: 'Hafizh',
    education: 'Vocational High School',
    division: 'Football',
    impact: ["Football Development"]
}

// 2. Type Guards
type numberOrString = number | string;
type unknownEmployee = Volunteer | Employee

function addition(param1: numberOrString, param2: numberOrString): void {
    // Typeguard in If statement
    if (typeof param1 === 'number' || typeof param2 === 'number') {
        console.log(+param1 + +param2)
    }
    if (typeof param1 === 'string' || typeof param2 === 'string') {
        console.log(`${param1.toString()} ${param2.toString()}`)
    }
    if ((typeof param1 === 'number' && typeof param2 === 'string') || (typeof param1 === 'string' && typeof param2 === 'number')) {
        console.log('Enter value with same data types')
    }
}

addition(1,2);
addition('Muhammad', 'Ihsan');
addition(1,'3');

// Typeguard in Object
function employeeInfo(obj: unknownEmployee) {
    console.log(obj.name);
    if ('education' in obj && 'division' in obj) {
        console.log('Education: ' + obj.education);
        console.log('Division: ' + obj.division)
    }
    if ('impact' in obj) {
        console.log('Impact: ' + obj.impact)
    }
}

const eko: unknownEmployee = {
    name: 'Eko Kurniawan Khannedy',
    impact: ['Leading an Organization']
}

const galih: unknownEmployee = {
    name: 'Sandhika Galih',
    education: 'Postgraduate',
    division: 'Software Engineer'
}

employeeInfo(eko);
employeeInfo(galih)

// Typeguards in Class
class Teacher {
    info() {
        console.log('She/He is a Teacher')
    }
}

class UniversityTeacher {
    info() {
        console.log('She/He is a University Teacher')
    }

    where() {
        console.log('She/he is teaching at some university')
    }
}

type unknownTeacher = Teacher | UniversityTeacher

function isYouTeacher(param: unknownTeacher) {
    param.info()
    if (param instanceof UniversityTeacher) {
        param.where()
    }
}

const onno = new Teacher();
const danu = new UniversityTeacher();

isYouTeacher(onno);
isYouTeacher(danu);

// 3. Discriminated Unions
interface Bird {
    // Add equality type here
    type: 'bird',
    flyingSpeed: number
}

interface Cheetah {
    type: 'cheetah',
    movingSpeed: number
}

type animal = Bird | Cheetah;

function movingSpeed(param: animal) {
    let speed: number;
    switch (param.type) {
        case 'bird':
            speed = param.flyingSpeed
            break;
        case 'cheetah':
            speed = param.movingSpeed;
            break;
    }
    console.log('Moving at speed: ', speed)
}

movingSpeed({type: 'bird', flyingSpeed: 20});
movingSpeed({type: 'cheetah', movingSpeed: 25});

// 4. Type Casting
const userData = document.getElementById('getinput')! as HTMLInputElement;
console.log(userData.value)