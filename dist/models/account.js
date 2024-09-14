"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Account_id, _Account_balance, _Account_type;
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Account {
    // no overloaded constructor allowed in JavaScript
    // constructor() {
    //     this.id = ""
    //     this.balance = 0
    //     this.type = ""
    // }
    constructor(initialBalance, type) {
        // private instance fields
        _Account_id.set(this, void 0);
        _Account_balance.set(this, void 0);
        _Account_type.set(this, void 0);
        __classPrivateFieldSet(this, _Account_id, (0, uuid_1.v4)(), "f");
        __classPrivateFieldSet(this, _Account_balance, initialBalance, "f");
        __classPrivateFieldSet(this, _Account_type, type, "f");
    }
    get balance() {
        //return this.balance throws a stack overflow!
        return __classPrivateFieldGet(this, _Account_balance, "f");
    }
    // doesn't say what it returns because it is a prototype based language
    deposit(amount) {
        throw 'Not Implemented';
        //throw new NotImplementedException()
    }
    withdrawal(amount) {
        throw 'Not Implemented';
    }
}
_Account_id = new WeakMap(), _Account_balance = new WeakMap(), _Account_type = new WeakMap();
exports.default = Account;
