let button = document.querySelector(".enter");
let input =  document.querySelector(".userInput");
let ul = document.querySelector("ul");
//exercise add ability to del
let del = document.querySelectorAll(".del")



function createListElement() {
  let li = document.createElement("li");
  let btn = document.createElement("button");  
  
  li.appendChild(document.createTextNode(input.value));
  li.classList.add("item")
  li.appendChild(btn);  // new btn
  btn.appendChild(document.createTextNode("Del"))  //new btn
  btn.classList.add("del")
  
  ul.appendChild(li);
  input.value = "";

  // eventListener to toggle done class to new item
  li.addEventListener("click", function() {
    li.classList.toggle("done");
    })
  
  // eventListener to delete new item
  btn.addEventListener("click", function() {
    btn.parentElement.remove();
  })
}


function addListAfterClick() {
  if (input.value.length) {
    createListElement();
    
  }
}

function addListAfterKeyPress(e) {
  if (input.value.length && e.keyCode === 13) { // or e.key === "Enter"
    createListElement();
    
  }
}

button.addEventListener("click", addListAfterClick)
input.addEventListener("keydown", addListAfterKeyPress)

// Event Listeners for existing database items
//eventListener to toggle line-through by adding/removing class "done"
let listItems = document.querySelectorAll(".item");
listItems.forEach(item => item.addEventListener("click", function() {
  item.classList.toggle("done")
}))

// eventListener for del
// del.forEach(itemToDel => itemToDel.addEventListener("click", function() {
//   idToDel = itemToDel.parentElement.getAttribute("id")
//   document.querySelector(`#${idToDel}`).remove();
// }))

//much shorter than above
// eventListener for del
del.forEach(itemToDel => itemToDel.addEventListener("click", function() {
  itemToDel.parentElement.remove();
}))