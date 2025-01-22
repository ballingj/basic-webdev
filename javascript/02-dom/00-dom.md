## With the object model, JavaScript gets all the power it needs to create dynamic HTML:

- JavaScript can change all the HTML elements in the page
- JavaScript can change all the HTML attributes in the page
- JavaScript can change all the CSS styles in the page
- JavaScript can remove existing HTML elements and attributes
- JavaScript can add new HTML elements and attributes
- JavaScript can react to all existing HTML events in the page
- JavaScript can create new HTML events in the page

## DOM Selectors:

### getElementsByTagName
```
document.getElementsByTagName("h1")
```
### getElementsByClassName
```
document.getElementsByClassName("second")
```
### getElementById
```
document.getElementById("bread")
```
### querySelector
```
document.querySelector("li")   // returns the first li found
```
### querySelectorAll
```
document.querySelectorAll("li")   // returns a list of li items

document.querySelectorAll(".item").forEach (
  item => console.log(item)
  )
```
### getAttribute
```
document.querySelector("#bread").getAttribute("random")
```
### setAttribute
```
document.querySelector("#bread").setAttribute("random", "100")
```
## Changing Styles:
### style.{property} //ok
```
document.querySelector("#bread").style.background = "yellow" 

```
### className //best
```
let h1 = document.querySelector("h1")
h1.className = "coolTitle"
```
### classList //best
```
document.querySelector("#bread").classList

```
#### classList.add
```
document.querySelector("#bread").classList.add("done") 
```
#### classList.remove
```
document.querySelector("#bread").classList.remove("done") 
```
#### classList.toggle  //adds or removes the class "done"
```
document.querySelector("#bread").classList.toggle("done") 
```

## Bonus:
innerHTML //DANGEROUS
``` 
let h1 = document.querySelector("h1")
h1.innerHTML = "Go Shopping Now!!!" 
```
### parentElement
```
h1.parentElement
```

### children
```
document.querySelector("#bread").parentElement.children

```

! It is important to CACHE selectors in variables