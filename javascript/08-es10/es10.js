// #1
// flat()  -- flatten nested arrays

// nested array - 1 deep
let array = [1, 2, 3, [4, 5], 6]
array.flat()  // Array(6) [ 1, 2, 3, 4, 5, 6 ]

// nested array - two deep
let array2 = [1, 2, 3, [4, [5,6], 7]]
array2.flat()   // Array(6) [ 1, 2, 3, 4, [5, 6], 7 ]

// pass the 2 parameter to go two deep
array2.flat(2)   // Array(7) [ 1, 2, 3, 4, 5, 6, 7 ]

// flat() also cleans out empty list items
let entries = ['bob', 'john',,,,,,,,'cindy']
entries.flat()    // Array(3) [ "bob", "john", "cindy" ]

// #2
// flatMap()  -- flattens then iterate like map
const jurassicPark = [['🦂', '🦟'], '🦎',[[['🦖']]], ['🦕','🐢'], '🐍', '🐉', '🐙']

const jurrasicParkChaos = jurassicPark.flatMap(creature => creature + '🦖')
// Array(7) [ "🦂,🦟🦖", "🦎🦖", "🦖🦖", "🦕,🐢🦖", "🐍🦖", "🐉🦖", "🐙🦖" ]


// #3
// trimStart and trimEnd

const userEmail = '            eddyvanhalen@gmail.com'
const userEmail2 = 'slash@google.com                 '

userEmail.trimStart()
userEmail2.trimEnd()


// #4
// fromEntries()  - converts an array that looks like key: value lists into an object

const userProfile = [['commander', 'John Pickard'], ['Deputy', 'Will Riker'], ['Science Officer', 'Data']]
Object.fromEntries(userProfile)  // Object { commander: "John Pickard", Deputy: "Will Riker", "Science Officer": "Data" }


// #5  try & catch block no longer required to pass a parameter (error)
// old
try {
  namae + 'hello'
} catch (error) {
  console.log('you messed up ' + error)
}

// new
try {
  namae + 'hello'
} catch {
  console.log('you messed up!')
}

