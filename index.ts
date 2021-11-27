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