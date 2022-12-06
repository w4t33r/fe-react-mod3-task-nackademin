const _ = require('lodash');
const fp = require('lodash/fp');
const array = require('lodash/array');
const object = require('lodash/fp/object');

const not_uniq = [1, 1, 1, 1, 2, 2, 3, 4, 5, 5, 6, 7, 8, 8]
const res = _.sortedUniq(not_uniq)
console.log(res)
console.log(_.lastIndexOf(not_uniq, 3))

console.log(_.padStart('a', 3, '-'));


const users = [
    {id: '1', firstname: "Oliver", lastname: "Doe", age: 30},
    {id: '2', firstname: "Justin", lastname: "Window", age: 15},
    {id: '3', firstname: "Jack", lastname: "Jackson", age: 25},
    {id: '4', firstname: "Maddyson", lastname: "Silverhand", age: 19},
    {id: '5', firstname: "Harry", lastname: "Potter", age: 17}
]

const user = _.find(users, {lastname: "Silverhand"})
console.log(user)

const getAge = _.find(users, function (user) {
    return user.age < 18;
});

console.log(getAge)

getId = _.keyBy(users, 'id')
const getid = getId['2']
console.log(getid)

// Username: viwer34745@diratu.com
//
// Password: 62911724