"use strict";
var ihsan = {
    name: "Ihsan",
    education: 'Vocational High School',
    contractYear: 1
};
var hafizh = {
    name: 'Hafizh',
    education: 'Vocational High School',
    division: 'Football',
    impact: ["Football Development"]
};
function addition(param1, param2) {
    // Typeguard in If statement
    if (typeof param1 === 'number' || typeof param2 === 'number') {
        // console.log(+param1 + +param2)
    }
    if (typeof param1 === 'string' || typeof param2 === 'string') {
        // console.log(`${param1.toString()} ${param2.toString()}`)
    }
    if ((typeof param1 === 'number' && typeof param2 === 'string') || (typeof param1 === 'string' && typeof param2 === 'number')) {
        // console.log('Enter value with same data types')
    }
}
addition(1, 2);
addition('Muhammad', 'Ihsan');
addition(1, '3');
// Typeguard in Object
function employeeInfo(obj) {
    // console.log(obj.name);
    if ('education' in obj && 'division' in obj) {
        // console.log('Education: ' + obj.education);
        // console.log('Division: ' + obj.division)
    }
    if ('impact' in obj) {
        // console.log('Impact: ' + obj.impact)
    }
}
var eko = {
    name: 'Eko Kurniawan Khannedy',
    impact: ['Leading an Organization']
};
var galih = {
    name: 'Sandhika Galih',
    education: 'Postgraduate',
    division: 'Software Engineer'
};
employeeInfo(eko);
employeeInfo(galih);
// Typeguards in Class
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.info = function () {
        // console.log('She/He is a Teacher')
    };
    return Teacher;
}());
var UniversityTeacher = /** @class */ (function () {
    function UniversityTeacher() {
    }
    UniversityTeacher.prototype.info = function () {
        // console.log('She/He is a University Teacher')
    };
    UniversityTeacher.prototype.where = function () {
        // console.log('She/he is teaching at some university')
    };
    return UniversityTeacher;
}());
function isYouTeacher(param) {
    param.info();
    if (param instanceof UniversityTeacher) {
        param.where();
    }
}
var onno = new Teacher();
var danu = new UniversityTeacher();
isYouTeacher(onno);
isYouTeacher(danu);
function movingSpeed(param) {
    var speed;
    switch (param.type) {
        case 'bird':
            speed = param.flyingSpeed;
            break;
        case 'cheetah':
            speed = param.movingSpeed;
            break;
    }
    // console.log('Moving at speed: ', speed)
}
movingSpeed({ type: 'bird', flyingSpeed: 20 });
movingSpeed({ type: 'cheetah', movingSpeed: 25 });
var testIndexed = {
    id: 1,
    awkward: 'tow',
    dd: 2
};
console.log(testIndexed);
var adding = function (p1, p2) {
    if (typeof p1 === 'string' || typeof p2 === 'string') {
        return p1.toString() + p2.toString();
    }
    return p1 + p2;
};
var testAdding = adding(2, 3);
// console.log(Math.round(testAdding))
// 7. Optional chaining
var myData = {
    name: 'Ihsan',
    skills: {
        frontend: ['React JS', 'VueJs', 'Angular'],
        // backend: ['Node.js', 'Hibernate', 'Spring', 'SpringBoot', 'ExpressJS', 'PHP', 'Django', 'Flask'],
        mobile: ['Flutter', 'Dart', 'React Native', 'Kotlin', 'Java', 'Swift']
    }
};
// console.log(myData.skills?.backend)
