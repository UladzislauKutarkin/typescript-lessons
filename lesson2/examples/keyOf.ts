type Staff = {
    name: string;
    salary: number;
}
type staffKeys = keyof Staff; // "name" | "salary"

type Point = {
    x: number;
    y: number,
    z: number,
};

type P = keyof Point; // "x" | "y" | "z"


//
// const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => obj[key];
//
// const developer: Staff = {
//     name: 'Tobias',
//     salary: 100,
// };
//
// const nameType = getProperty(developer, 'name'); // string
// // Compiler error
// const salaryType getProperty(developer, 'pay'); //Cannot find name 'pay'.(2304)
