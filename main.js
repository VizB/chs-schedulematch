window.onload = function(){
    let loginForm = document.getElementsByClassName("loginForm");

    loginForm[0].addEventListener("submit", (e) => {
        e.preventDefault();

        // there is always 7 periods max
        for(let i = 1; i <= 7; i++) {
            console.log(document.getElementById("period" + i).value);
            // Comment

        }
    });
}

function parseName(string) {
    for (let i = 0; i < string.length; i++) {
        if(isNaN(string[i]) === false) {
            return "Invalid Name"
        }
    }
}
