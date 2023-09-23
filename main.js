window.onload = function(){
    let loginForm = document.getElementsByClassName("loginForm");
    loginForm[0].addEventListener("submit", (e) => {
        e.preventDefault();

        let name = document.getElementById("name");
        let year = document.getElementById("year");

        console.log(name.value);
        console.log(year.value);
        if(name.value === "" || year.value === "") {
            throw Error
        } else {
            // Do stuff
        }
    });
}

function parseName(name) {
    for (let i = 0; i < name.length; i++) {
        if(isNaN(name[i]) === false) {
            return "Invalid Name"
        }
    }
}
