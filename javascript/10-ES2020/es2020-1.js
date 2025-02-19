// ES2020

// 1. BigInt
/* 
MAX_SAFE_INTEGER is the upperlimit of double precision floating point accuracy
perfowming math on MAX_SAFE_INTEGER may give unpredictable results
*/
const u = Number.MAX_SAFE_INTEGER   // 9007199254740991



9007199254740991 + 102  // 9007199254741092 , which is not accurate

// add an n to int to convert to BigInt
9007199254740991n + 102n  // 9007199254741093n


// 2. 
// Nullish Coalescing Operator ??
// see 3 below

// 3. 
// Optional Chaining Operator ?. 
/*
optional chaining '?.' bypasses the use of multiple if statement to check if objects exists.  for example: 

if (andrei_pokemon && andrei_pokemon.raichu && will_pokemon && will_pokemon.pikachu) {
  console.log('fight!')
  } else {
    console.log('walk away...')
  }
*/

let will_pokemon = {
  pikachu: {
    species: 'Mouse Pokemon',
    height: 0.4,
    weight: 6,
    power: 'lightning',
  }
}

let andrei_pokemon = {
  raichu: {
    species: 'Mouse Pokemon',
    height: 0.8,
    weight: 30,
    power: ''
  }
}

// use this below instead to check if property exists
let weight3 = andrei_pokemon?.raichu?.weight
console.log(weight3)

// from 2. 
// Nullish Coalescing Operator ??

// the || will return 'no power' for any falsy values 
const chaining = () => {
  let power = andrei_pokemon?.raichu?.power || 'no power'
  console.log(power)  // 'no power'
}
chaining()


// ?? Nullish operator allows for reading a zero (0) value which is falsy, but still produce a value instead of undefined
const nullish = () => {
  andrei_pokemon.raichu.power = 0
  power = andrei_pokemon?.raichu?.power ?? 'no power'
  console.log(power)  // '0'
}
nullish()


// Promise.allSettled
// globalThis
