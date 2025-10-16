const parent = document.querySelector(".parent");

// console.log(parent)
// console.log(parent.children)
// console.log(parent.children[0].innerHTML)
for(let i=0;i<parent.children.length;i++){
    console.log(parent.children[i].innerText);
}

parent.children[0].style.color = "orange"
// console.log(parent.firstElementChild)

const dayOne = document.querySelector(".day");
// console.log(dayOne.parentElement)
console.log(dayOne.nextElementSibling)
console.log(parent.childNodes)