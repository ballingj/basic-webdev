# Asynchronous JavaScripts

## GET and POST in forms
Watch the network tab in Chrome Developer Tool to seee the difference between GET and POST methods
 - Headers
 - payload: query string versus body

## JSON
JSON is a syntax for storing and exchanging data

### JSON.stringify() : converts JS object to JSON
```js
const employees = [
  {firstName: "John", lastName: "Doe"},
  {firstName: "Jane", lastName: "Smith"},
  {firstName: "Anna", lastName: "Davis"}
]

let myJSON = JSON.stringify(employees)
console.log(myJSON) 
// '[{"firstName":"John","lastName":"Doe"},{"firstName":"Jane","lastName":"Smith"},{"firstName":"Anna","lastName":"Davis"}]'
```

### JSON.parse() - converts JSON to JS object
```js
let myObject = JSON.parse('{"firstName":"John", "lastName": "Doe"}')
console.log(myObject)  // {firstName: 'John', lastName: 'Doe'}

```

## AJAX

### XHR - old way
```js
const request = new XMLHttpRequest();
request.open('GET', 'my/url', true);

request.onload = function() {
  if request.status >= 200 && request.status <= 400) {
    // Success
    const data = JSON.parse(request.responseText);
    console.log(data);
  } else {
    // we reached the target server, but something is not right abover
  }
};

request.send();
```

### jQuery - old way still
```js
$.getJSON('/my/url', function(data) {
  // do something
});

// example code
$(document).ready(function(){
  // URL of the JSON data
  let url = "https://jsonplaceholder.typicode.com/users";

  // Making the AJAX GET request
  $.getJSON(url, function(data) {
      // This function will be executed when the request is successful
      console.log(data);

      // Example: Display data on the web page
      var output = "<ul>";
      $.each(data, function(key, value) {
          output += "<li>" + key + ": " + value + "</li>";
      });
      output += "</ul>";

      // Append the output to the HTML element with id 'result'
      $("#result").html(output);
  });
});
```


## Promise
a promise is an object that may produce a single value some time in the future

### Fetch - most common promise operation

```js
let url = 'https://jsonplaceholder.typicode.com/users'

const data = fetch(url)
  .then(resp => resp.json())
  .then((users) => {
      return users;
});

// below does not work because it executes before the Promise is resolve
// console.log(data);  // Promise{pending...}

// have to do another then on a data
data.then(val => console.log(val))

// or long way
const printData = () => {
  data.then(val => console.log(val))
}
printData()


// Another simpler example
url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
  .then(resp => resp.json())
  //.then(data => console.log(data))  // or
  .then(console.log)

```

## ASYNC AWAIT
This is built on top of promise; an update from ES8

``` js
url = 'https://jsonplaceholder.typicode.com/users'

async function fetchUsers() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data)
}
fetchUsers();

```

### Arrow function ( () => {} ) in class based methods
It is necessary to use the arrow function to take advantage of keyword 'this'

```js
componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/users'

    const fetchUsers = async () => {
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ robots: data })
    }
    fetchUsers();
  }
```

### Array of urls
``` js
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums',
]

async function getData() {
  const [ users, posts, albums ] = await Promise.all(urls.map(url =>
    fetch(url).then(response => response.json())
  ))
  console.log('users', users)
  console.log('posts', posts)
  console.log('albums', albums)
}

getData();

```

### Catching Errors

``` js
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums',
]

async function getData() {
  try {
    const [ users, posts, albums ] = await Promise.all(urls.map(url =>
      fetch(url).then(response => response.json())
    ))
    console.log('users', users)
    console.log('posts', posts)
    console.log('albums', albums)
  } catch(err) {
    console.log("Error:", err);
  }
}

getData();
```


## Promise.all() versus Promise.allSettled()

``` js
const promiseOne = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000)
})

const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(reject, 3000)
})

// Will fail since one of the promise failed
Promise.all([promiseOne, promiseTwo]).then(data => console.log(data))
  .catch(e => console.log("errors"))

// Will return both wether promise fails or resolves
Promise.allSettled([promiseOne, promiseTwo]).then(data => console.log(data))
  .catch(e => console.log("errors"))

```

## ES2021: any()
There is a new method added to promises in 2021! Unfortunately it isn't a very useful one, but I added here for you as an example that you can play around with using our previous example:

Promise.any() resolves if any of the supplied promises is resolved. Below we have 3 promises, which resolves at random times.

``` js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("A"), Math.floor(Math.random() * 1000));
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("B"), Math.floor(Math.random() * 1000));
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("C"), Math.floor(Math.random() * 1000));
});
// Out of p1, p2 and p3, whichever resolves first is taken by Promise.any().

(async function () {
  const result = await Promise.any([p1, p2, p3]);
  console.log(result); // Prints "A", "B" or "C"
})();

// What if none of the promises resolve? In that case Promise.any() throws an error!
```