type IHumanObj = {
    name: string,
    age: number,
    title: string,
    isEmployed: boolean
}

const humanObject1:Omit<IHumanObj, 'isEmployed'>= {
    name: 'Oleg',
    age: 34,
    title: 'Frontend developer'
}

const humanObject2:Omit<IHumanObj, 'title'> = {
    name: 'Oleg',
    age: 34,
    isEmployed: true
}

const humanObject3: IHumanObj = {
    name: 'Oleg',
    age: 34,
    isEmployed: true,
    title: 'Frontend developer'
}


interface CatInfo {
    age: number;
    breed: string;
}

 type Cats = {
    miffy: string,
    boris: string,
    mordred: string,
}

type CatName = keyof Cats;

const cats: Record<CatName, CatInfo> = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" },
};

type IReadOnly = {
    street: string,
    flat: number,
    house: number,
    city: string,
}

const myAddress : Readonly<IReadOnly> = {
    street: 'Marshal Gelovani Ave',
    house: 1,
    flat: 95,
    city: "Tbilisi"
}

type Req = {
    street: string,
    house?: number,
    flat?: number
}

const getFullInfo = (address: Required<Req>) : string =>{
    return `${address.street} ${address.house} ${address.flat}`
}

getFullInfo({
    street: 'Ave',
    house: 2,
    flat: 10
})

type Todo  = {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
    title: "Clean room",
    completed: false,
};
