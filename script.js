// When user submits login form
document.getElementById("loginForm").onsubmit = function(event) {
    event.preventDefault();
    var username = document.querySelector('input[type="text"]').value;

    if (username === "") {
        alert("Please enter your username");
        return;
    }

    var oneDay = 24 * 60 * 60 * 1000;
    var now = new Date();
    now.setTime(now.getTime() + oneDay);

    document.cookie = "username=" + username + 
                      "; expires=" + now.toUTCString() + 
                      "; path=/";

    alert("Login successful!");
    window.location.href = "index_nurse.html";
};
