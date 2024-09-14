import Account from "./account"

export default class User {
    // readonly id : string
    // readonly fname : string
    // readonly lname : string
    // readonly accounts: Account[] = []

    private _id : string
    private _fname : string
    private _lname : string
    private _accounts: Account[] = []

    constructor() {
        this._id = ""
        this._fname = ""
        this._lname = ""
        this._accounts = []
    }

    get FirstName() {
        return this._fname;
    }

    set FirstName(fname:string) {
        this._fname = fname;
    }

    get Accounts() {
        return this._accounts;
    }
}