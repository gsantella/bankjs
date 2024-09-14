import User from './models/user.mjs'
import Account from './models/account.mjs'

const user = new User()

// interestingly these work
const a1 = new Account()
const a2 = new Account()

// properly send values to constructor
//but 500.25 could be "500.25" and could be "wiggles"
const a3 = new Account(500.25, 'savings')


//a3.deposit(44)
//a3.withdrawal(44)

user.accounts.push(a1, a2, a3)

console.log(user)

console.log(a3.balance)