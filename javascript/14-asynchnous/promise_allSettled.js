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

  