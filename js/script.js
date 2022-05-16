//Sticky NavBar
window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

//Show Password
function visibilePassword() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

//ClearAll 
function clearInput() {
    document.getElementById('myId').value = '';
    document.getElementById('myInput').value = '';
}

function clickLink1() {
    document.getElementById('igSella');
    location.href = "https://www.instagram.com/marsellacia/";
}

function clickLink2() {
    document.getElementById('igAtin');
    location.href = "https://www.instagram.com/atine7/";
}

function clickLink3() {
    document.getElementById('igJeanet');
    location.href = "https://www.instagram.com/jeanetkastilong/";
}