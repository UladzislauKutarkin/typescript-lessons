// const getName = <T>(name: T):T=>{
//     return name
// }

type userData<T> = {
    login: string,
    pass: T,
}

const user1: userData<number> = {login: 'qwerty', pass: 1111}
const user3: userData<string> = {login: 'qwerty', pass: '1111'}

// Обобщённая функция
function printValue<T>(value: T):void {
    console.log(`value: ${value}`)
}
printValue(20)
printValue('qwerty')
