document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.querySelectorAll("input")[0].value;
    let email = document.querySelectorAll("input")[1].value;
    let phone = document.querySelectorAll("input")[2].value;
    let password = document.querySelectorAll("input")[3].value;

    if (name == "" || email == "" || phone == "" || password == "") {
        alert("Please fill all the fields!");
    } 
    else {
        alert("Registration Successful!");
    }
});
