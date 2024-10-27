
const allElements = document.querySelectorAll(".text");
allElements.forEach((element, index) => {
    element.textContent = `Changed text content ${index + 1} using the query select all`;
    element.classList.add('changed')
})