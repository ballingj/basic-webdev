const database = [
  {
    username: "jeff",
    password: "not123"
  },
  {
    username: "ingrid",
    password: "123"
  },
  {
    username: "sussy",
    password: "777"
  },
]

const newsfeed = [
  {
    username: "jeff",
    timeline: "so tired of javascript!"
  },
  {
    username: "jeff",
    timeline: "but I like python!"
  },
  {
    username: "ingrid",
    timeline: "so tired of javascript too!"
  },
  {
    username: "sussy",
    timeline: "javascript is the bomb!"
  },
]


function isUserValid(username, password){
  for (let i=0; i < database.length; i++) {
    if (username === database[i].username && password === database[i].password) {
      return true;
    }
  }
  return false;
}

function signIn(username, password) {
  if (isUserValid(username, password)) {
    console.log(newsfeed)
  } else {
    console.log("Sorry wrong username & password");
  }
}

// function signIn(username, password) {
//   for (let i=0; i < database.length; i++) {
//     if (username === database[i].username && password === database[i].password) {
//       console.log(newsfeed);
//     } else {
//       console.log("Sorry wrong username & password");
//     }
//   }
// }

const userNamePrompt = prompt("What's your username?");
const passwordPrompt = prompt("What's your password?");

signIn(userNamePrompt, passwordPrompt);
