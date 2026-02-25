//when user click logout go back to login page
document.getElementById("logout").onclick = function() {
    // Remove the cookie
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";

    alert("Logged out successfully!");
    window.location.href = "index.html";
 };