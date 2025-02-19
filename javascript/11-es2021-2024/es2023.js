// Arraya

const ztmMonsters = [
{id: 1, monster: 'Mr. Mouse', level: 1},
{id: 2, monster: 'Mac', level: 30},
{id: 3, monster: 'Denodude', level: 17},
{id: 4, monster: 'Pye', level: 5},
];

// this will get the high level monsters > level 15
const advancedMonsters = ztmMonsters.filter(item => item.level > 15)
// Array [ { id: 2, monster: "Mac", level: 30 }, { id: 3, monster: "Denodude", level: 17 } ]


// if we only want the last object
const lastMonster = ztmMonsters.findLast(item => item.level > 15)
// Object { id: 3, monster: "Denodude", level: 17 }

// if we just want the index
const lastMonsterIndex = ztmMonsters.findLastIndex(item => item.level > 15)
// 2


// toReversed()
const ztmMonstersList = ['Pye', 'Denodude', 'Mac', 'Mr. Mouse']

// this old way of reverse mutates the list
ztmMonstersList.reverse()   // [ "Mr. Mouse", "Mac", "Denodude", "Pye" ]
ztmMonstersList.reverse()   // put back to original: ['Pye', 'Denodude', 'Mac', 'Mr. Mouse']

// this new way does not
reversedZtmMonsterList = ztmMonstersList.toReversed() 
// reversedZtmMonsterList === [ "Mr. Mouse", "Mac", "Denodude", "Pye" ]
// ztmMonstersList === ['Pye', 'Denodude', 'Mac', 'Mr. Mouse']
