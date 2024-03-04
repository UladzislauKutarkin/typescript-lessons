const reverseArray = <T>(arr: T[]): T[] => {
  return arr.reverse();
};

console.log('arr', reverseArray(['a', 'b', 'c']));

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const myObject = new Person('Bob', 44);
const myObject2 = {};
console.log('instance', myObject instanceof Person);
console.log('instance', myObject2 instanceof Person);

interface ICar {
  brand: string;
  model: string;
  year: number;
}

type C = keyof ICar;

type IPerson = {
  name: string;
  surname: string;
  age: number;
};

type PartialPerson = Partial<IPerson>;

const num: number = 123;
const str: string = 'abc';
const arr: number[] = [1, 2, 3, 4];
type IObj = {
  name: string;
  age: number;
};
const obj: IObj = {
  name: 'Bob',
  age: 55,
};

console.log('type', typeof num);
console.log('type', typeof str);
console.log('type', typeof arr);
console.log('type', typeof obj);

type Color = 'Red' | 'Green' | 'Blue' | number;

type Nullable<T> = {
  [P in keyof T]?: T[P];
};

type ICondition<T> = T extends string ? number : string;

const getFirstElement = <T extends any[]>(
  array: T
): T extends (infer P)[] ? P : never => {
  return array[0];
};

console.log('infer', getFirstElement([1, 2, 3, 4]));

type IReadOnly2<T> = {
  readonly [P in keyof T]: T[P];
};
