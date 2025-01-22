let button = document.querySelector(".enter");
let input =  document.querySelector(".userInput");
let ul = document.querySelector("ul");
//exercise add ability to del
let del = document.querySelectorAll(".del")



function createListElement() {
  let li = document.createElement("li");
  let btn = document.createElement("button");  
  
  li.appendChild(document.createTextNode(input.value + " "));
  btn.appendChild(document.createTextNode("Del"))  //new btn
  btn.classList.add("del")
  li.appendChild(btn);  // new btn
  li.classList.add("item")
    
  ul.appendChild(li);
  toggleDoneEventListener()
  deleteItemEventListener()
  
  input.value = "";
}

function addDelBtn() {
  
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


//add ability to toggle line-through by adding/removing class "done"


function toggleDoneEventListener() {
  let listItems = document.querySelectorAll(".item");
  listItems.forEach(item => item.addEventListener("click", function() {
    item.classList.toggle("done")
  }))
}

// add ability to del
function deleteItemEventListener() {
  del.forEach(itemToDel => itemToDel.addEventListener("click", function() {
    idToDel = itemToDel.parentElement.getAttribute("id")
    document.querySelector(`#${idToDel}`).remove();
   }))
}


toggleDoneEventListener()
deleteItemEventListener()
