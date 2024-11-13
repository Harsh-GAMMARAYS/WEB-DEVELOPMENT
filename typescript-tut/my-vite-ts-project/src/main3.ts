// interfaces or objects 

interface Person {
    name: string;
    age: number;
    height?: number;
    hello?: () => void;
}

// interface Employee extends Person {
//     employeeId: number;
// }

// const worker: Employee = {
//     name: "harshit",
//     age: 23,
//     height: 164,
//     employeeId: 3
// }

function getPerson(p: Person): Person {
    return {
        name: 'Harshit',
        age: 21
    }
}