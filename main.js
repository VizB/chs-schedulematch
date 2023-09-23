let counter = 0;

function printHelloWorld() {
    console.log("Hello World " + counter);
    counter++;
}

// Stuff for the form
let loginForm = document.getElementsByClassName("loginForm");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let name = document.getElementById("name");
    let year = document.getElementById("year");

    if(name.value == "" || year.value == "") {
        throw Error
    } else {
        // Do stuff
    }
});
