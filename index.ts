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