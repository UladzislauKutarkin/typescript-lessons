// Generics:
// Создайте обобщенную функцию reverseArray, которая принимает массив любого типа и возвращает массив в обратном порядке.


function reverseArray<T>(value: T[]): T[] {
    const arr = value.reverse()
    return arr
}

console.log("1")
console.log(reverseArray([1, 2, 3]))
console.log(reverseArray(["a", "b", "c"]))
console.log("*******")


// Instance of:
// Напишите условие с использованием instanceof, чтобы проверить, является ли переменная myObject экземпляром класса Person.


class Person {
    name: string;
    age: number;
    country: string;
    profession: string;
    constructor(name: string, age: number, country: string, profession: string) {
        this.name = name;
        this.age = age;
        this.country = country;
        this.profession = profession;
    }
}

let myObject = new Person('Nadezhda', 33, "Russia", "engineer")
// myObject.name = 'Nadezhda';
// myObject.age = 33;
// myObject.country = "Russia";
// myObject.profession = "engineer";


console.log("2")
console.log(myObject instanceof Person)
console.log("*******")

// Keys of:
// Создайте интерфейс Car с полями brand, model и year. Затем используйте keyof для получения массива строк, содержащего все ключи интерфейса Car.

interface ICar {
    brand: string
    model: string
    year: number
}

type keysOfCar = keyof ICar

let key: keysOfCar
key = "brand"
key = "model"
key = "year"
//key = "color"

console.log("3")
console.log("*******")


// Utility Types:
// Используя Partial, создайте новый тип данных PartialPerson, который описывает тип данных Person, но с возможностью указать только некоторые поля.

interface IPerson {
    name: string;
    age: number;
    country: string;
    profession: string;
}

type PartialPerson = Partial<IPerson>

const user: PartialPerson = {
    name: "Peter",
    age: 22
}

console.log("4")
console.log("*******")

// Types Of:
// Создайте несколько переменных разных типов (число, строка, массив и объект) и используйте оператор typeof, чтобы вывести тип каждой переменной.
const number: number = 15
const string: string = 'строка'
const boolean: boolean = true

console.log("5")
console.log(typeof number)
console.log(typeof string)
console.log(typeof boolean)
console.log("*******")


// Генерация комбинированных типов:
// Создайте объединенный тип данных Color для представления цветов: "Red", "Green", "Blue" или число RGB. Используйте оператор | для объединения этих типов.
type Color = "Red" | "Green" | "Blue"

let background: Color
background = "Red"
background = "Green"
background = "Blue"
// background = "Yellow"

console.log("6")
console.log("*******")


// Mapped Types:
// Создайте тип Nullable<T>, который принимает другой тип T и делает все его поля необязательными.

type Nullable<T> = {
    [Property in keyof T]+?: T[Property]
}

type MaybeUser = {
    id: string
    name: string
    age: number
  }
  
  type User = Nullable<MaybeUser>

  console.log("7")
  console.log("*******")

// Conditional Types:
// Напишите условный тип, который будет возвращать тип string, если передан тип number, и тип number, если передан тип string.
type Condition<T> = T extends string ? number : string

let Test1: Condition<"строка">
let Test2: Condition<22>

console.log("8")
console.log("*******")

// Infer:
// Создайте обобщенную функцию getFirstElement, которая принимает массив и возвращает его первый элемент. Используйте ключевое слово infer для вывода типа элемента.
function getFirstElement<T extends any[]>(array: T): T extends (infer U)[] ? U : never {
    return array[0];
}
// function getFirstElement<T> (array: T[]) {
//     return array[0];
// }

const arr1 = [1, 2, 3, 4, 5];
const firstElement1 = getFirstElement(arr1);

const arr2 = ['a', 'b', 'c', 'd'];
const firstElement2 = getFirstElement(arr2); 


console.log("9")
console.log(firstElement1)
console.log(firstElement2)
console.log("*******")

// Mapped Types с шаблонами:
// Создайте тип ReadOnly<T>, который делает все свойства объекта T доступными только для чтения, используя readonly.

type FooReadonly<T> = {
    readonly [Property in keyof T]: T[Property]
}

type User2 = FooReadonly<MaybeUser>

console.log("10")
console.log("*******")