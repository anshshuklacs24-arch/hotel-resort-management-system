// Room buttons
let buttons = document.querySelectorAll(".room-card .btn");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        alert("Your room is selected!");
    });
});


// Service cards
let services = document.querySelectorAll(".service");

services.forEach(function(service) {
    service.addEventListener("click", function() {
        service.style.backgroundColor = "lightblue";
    });
});