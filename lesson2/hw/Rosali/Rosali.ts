// Задание №1 (Generics) - Создайте обобщенную функцию reverseArray, которая принимает
//массив любого типа и возвращает массив в обратном порядке.

function revArray<T>(arr: T[]): T[] {
    return arr.reverse();
}

// Задание №2 (Instance of) - Напишите условие с использованием instanceof, чтобы проверить,
//является ли переменная myObject экземпляром класса Person.

class Person {}

const myObject = new Person();
console.log('is myObject instanceof Person?', myObject instanceof Person)

// if (myObject instanceof Person) {
//     console.log('myObject is instance of Person');
// } else {
//     console.log('myObject is not instance of Person');
// }


// Задание №3 (Keys of) - Создайте интерфейс Car с полями brand, model и year. 
//Затем используйте keyof для получения массива строк, содержащего все ключи интерфейса Car. 

interface Car {
    brand: string;
    model: string;
    year: number;
}

type KeysCar = keyof Car;

// Задание №4 (Partial) - Используя Partial, создайте новый тип данных PartialPerson, 
//который описывает тип данных Person, но с возможностью указать только некоторые поля.

type Person2 = {
    name: string;
    age: number;
    email: string;
}

type PartialPerson = Partial<Person2>;

// Задание №5 (Types Of) - Создайте несколько переменных разных типов (число, строка, массив и объект)
//и используйте оператор typeof, чтобы вывести тип каждой переменной.

let number: number = 10;
let string: string = 'Hello';
let array: number[] = [1, 2, 3, 4, 5];
let object: {key: string} = {key: 'string'};

console.log(typeof number); //number
console.log(typeof string); //string
console.log(typeof array); //object
console.log(typeof object); //object

// Задание №6 (Генерация комбинированных типов) - Создайте объединенный тип данных Color для представления цветов:
//"Red", "Green", "Blue" или число RGB. Используйте оператор | для объединения этих типов.

type Color = "Red" | "Green" | "Blue" | number;

// Задание №7 (Mapped Types) - Создайте тип Nullable, который принимает другой тип T и делает все его поля необязательными.

type Nullable<T> = {
    [K in keyof T]?: T[K];
};

// Задание №8 (Conditional Types) -Напишите условный тип, который будет возвращать тип string, 
//если передан тип number, и тип number, если передан тип string.

type ConditionalType<T> = T extends number ? string : number;

let result1: ConditionalType<number> = '123';
let result2: ConditionalType<string> = 456;

// Задание №9 (Infer) - Создайте обобщенную функцию getFirstElement, которая принимает массив и
//возвращает его первый элемент. Используйте ключевое слово infer для вывода типа элемента.

type ElementType<T> = T extends (infer U)[] ? U : T;

function getFirstElement<T>(arr: T[]):ElementType<T> {
    return arr[0] as ElementType<T>;
}

// Задание №10 (ReadOnly) - Создайте тип ReadOnly, который делает все свойства объекта T
//доступными только для чтения, используя readonly.

// type ReadOnly = Readonly<T>;