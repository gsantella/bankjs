import { v4 as uuidv4 } from 'uuid';

export default class Account {
    
    // private instance fields
    #id;
    #balance;
    #type;

    // no overloaded constructor allowed in JavaScript
    // constructor() {
    //     this.id = ""
    //     this.balance = 0
    //     this.type = ""
    // }

    constructor(initialBalance: number, type: string) {
        this.#id = uuidv4()
        this.#balance = initialBalance
        this.#type = type
    }

    get balance() {
        //return this.balance throws a stack overflow!
        return this.#balance
    }

    // doesn't say what it returns because it is a prototype based language
    deposit(amount: number) {
        throw 'Not Implemented'
        //throw new NotImplementedException()
    }

    withdrawal(amount: number) {
        throw 'Not Implemented'
    }
}