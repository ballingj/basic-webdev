```JSON is a syntax for storing and exchanging data```

```JSON.stringify() : converts JS object to JSON```
const employees = [
  {firstName: "John", lastName: "Doe"},
  {firstName: "Jane", lastName: "Smith"},
  {firstName: "Anna", lastName: "Davis"}
]

let myJSON = JSON.stringify(employees)
console.log(myJSON) 
// '[{"firstName":"John","lastName":"Doe"},{"firstName":"Jane","lastName":"Smith"},{"firstName":"Anna","lastName":"Davis"}]'

```JSON.parse() - converts JSON to JS object```
let myObject = JSON.parse('{"firstName":"John", "lastName": "Doe"}')
console.log(myObject)  // {firstName: 'John', lastName: 'Doe'}

