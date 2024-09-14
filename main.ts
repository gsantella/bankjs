// Converted to TypeScript
// via: https://www.sharpcoderblog.com/blog/how-to-convert-a-javascript-project-to-typescript#:~:text=How%20to%20Convert%20a%20JavaScript%20Project%20to%20TypeScript,...%207%20Step%207%3A%20Test%20the%20Application%20

import User from './models/user.js'
import Account from './models/account.js'

const user = new User()

// interestingly these work in JS, but not in TS
//const a1 = new Account()
//const a2 = new Account()

// properly send values to constructor
//but 500.25 could be "500.25" and could be "wiggles"
const a3 = new Account(500.25, 'savings')


//a3.deposit(44)
//a3.withdrawal(44)

//user.accounts.push(a1, a2, a3)
user.accounts.push(a3)

console.log(user)

console.log(a3.balance)