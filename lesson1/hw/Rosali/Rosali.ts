type IObj = {
    name: string,
    age: null | number,
    address: {
        city: string,
        street: string,
        house: number | string,
        flat: number,
    },

    orders: [number, number][]
}

const obj={
    name: 'Anna',
    age:37,
    address: {
        city: 'Moscow',
        street: 'Arbat',
        house: 1,
        flat: 33,
    },
    orders: [
        [100123,1],
        [1000321, 5]
    ],
    getAddress(){
        return `${this.address.city}, ${this.address.street}, ${this.address.house}`
    }
}
