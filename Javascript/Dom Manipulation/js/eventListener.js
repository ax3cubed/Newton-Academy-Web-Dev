

let button = document.getElementById('myButton');
button.addEventListener("click", function(){
    button.classList.add('changed');
    button.textContent = "Button Clicked!";

    // Use setTimeout to delay the alert, allowing the text to change first
    setTimeout(() => {
        alert("Button Clicked");
    }, 0);
});

// click, mouse over event, key up, submit event