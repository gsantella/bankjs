import User from './models/user.mjs'
import Account from './models/account.mjs'

const user = new User()
const a1 = new Account()
const a2 = new Account()

user.accounts.push(a1, a2)

console.log(user)