// Group By

const pokemons = [
  { name: "bulbasaur", type: "grass"},
  { name: "blastoise", type: "water"},
  { name: "charmander",  type: "fire"},
  { name: "ivysaur", type: "grass"},
  { name: "charmeleon",  type: "fire"},
  { name: "charizard",  type: "fire"},
  { name: "squirtle", type: "water"},
  { name: "venusaur", type: "grass"},
  { name: "wartortle", type: "water"},
  { name: "pikachu", type: "electric"}
]


Object.groupBy(pokemons, (pokemon) => {
    return pokemon.type;
})

/*
Object { grass: (3) […], water: (3) […], fire: (3) […], electric: (1) […] }
electric: Array [ {…} ]
0: Object { name: "pikachu", type: "electric" }
length: 1
<prototype>: Array []
​
fire: Array(3) [ {…}, {…}, {…} ]
0: Object { name: "charmander", type: "fire" }
1: Object { name: "charmeleon", type: "fire" }
2: Object { name: "charizard", type: "fire" }
length: 3​
<prototype>: Array []
​
grass: Array(3) [ {…}, {…}, {…} ]
0: Object { name: "bulbasaur", type: "grass" }
1: Object { name: "ivysaur", type: "grass" }
2: Object { name: "venusaur", type: "grass" }
length: 3
<prototype>: Array []
​
water: Array(3) [ {…}, {…}, {…} ]
​​0: Object { name: "blastoise", type: "water" }
​​1: Object { name: "squirtle", type: "water" }
​​2: Object { name: "wartortle", type: "water" }
​​length: 3
<prototype>: Array []


*/