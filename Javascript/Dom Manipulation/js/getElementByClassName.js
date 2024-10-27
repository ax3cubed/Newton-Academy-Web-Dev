
const elements = document.getElementsByClassName("text");

for(let index = 0; index < elements.length; index++){
    elements[index].textContent = `Changed text ${index + 1} using getElementByClassName`;
    elements[index].classList.add("changed");
}