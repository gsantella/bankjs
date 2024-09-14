import Account from "./account"

export default class User {
    readonly id : string
    readonly fname : string
    readonly lname : string
    readonly accounts: Account[] = []

    constructor() {
        this.id = ""
        this.fname = ""
        this.lname = ""
        this.accounts = []
    }
}