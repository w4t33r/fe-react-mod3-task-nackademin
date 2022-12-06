const users = [
    {id: '1', firstname: "Maddyson", lastname: "Silverhand", age: 19},
    {id: '2', firstname: "Harry", lastname: "Potter", age: 17}
]

const user = _.find(users, {lastname: "Silverhand"})
console.log('Find by lastname:', user)

const getAge = _.find(users, function (user) {
    return user.age < 18;
});
console.log('Under 18:', getAge)

key = _.keyBy(users, 'id')
const handleId = key['2']
console.log('Get by ID:', handleId)


const not_uniq = [1, 1, 1, 1, 2, 2, 3, 4, 5, 5, 6, 7, 8, 8]
const res = _.sortedUniq(not_uniq)
console.log('Not uniq:', not_uniq)
console.log('Uniq result:', res)

console.log(_.padStart('a', 3, '-'));

const uniq_values = [1, 1, 2, 3, 4, 5, 5, 6, 6]
console.log('Array:', uniq_values)
console.log('Created new array with uniq values:', _.union(uniq_values))


const obj = {
    food_obj: [
        'Pizza',
        'Chicken',
        'Apple',
        {candy: 'Sour Candy'},
    ],
};

const getFood = _.get(obj, 'food_obj[3].candy')
console.log(obj)
console.log('Get nested obj:', getFood)


const words = ["tank", "boy", "tourist", "ten",
    "pen", "car", "marble", "sonnet", "pleasant",
    "ink", "atom"]

console.log("Starting with 't'");
words.forEach( e => {

    if (_.startsWith(e, 't')) {

        console.log(e);
    }
});

console.log("Ending with 'k'");
words.forEach( e => {

    if (_.endsWith(e, 'k')) {

        console.log(e);
    }
});


/*




 */