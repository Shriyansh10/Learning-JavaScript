const title = document.getElementById("title");

// console.log(title.innerHTML) // => DOM learning on Chai aur Code <span style="display: none;">test text</span> 
// console.log(title.innerText)  // => DOM learning on Chai aur Code
// console.log(title.textContent) // => DOM learning on Chai aur Code test text

const query = document.querySelector("h2");
// console.log(query)
const query2 = document.querySelectorAll("h2");
// console.log(query2)
const id1 = document.querySelectorAll("#title");
// console.log(id1)
const class1 = document.querySelectorAll(".heading");
// console.log(class1)
const input2 = document.querySelector("input[type='password']");
const input3 = document.querySelector('input[type="password"]');
// console.log(input2) 
// console.log(input3) 

const li = document.querySelector("li:nth-child(4)")

// console.log(document.querySelector("li:nth-child(4)"))
// console.log(document.querySelector("li:last-child"))

const myul = document.querySelectorAll("li"); // => gives nodeList

myul.forEach((li) => {
    li.style.backgroundColor = 'red';
    if(li.innerHTML === "3"){
        li.style.display = "none";
    }
})

const myli = Array.from(document.getElementsByClassName("item-list")); // => gives HTMLCollection
const my = myli.map((li)=> {
    li.classList.add("add")
    return li})
    .filter((li) => li.innerHTML === "2")
    .map((li) => {li.style.backgroundColor = 'grey'
    return li})
console.log(my)