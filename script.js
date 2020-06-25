document.querySelector('.hamburger-menu').addEventListener('click', () => {
    document.querySelector(".container-fluid").classList.toggle("change");
});

document.querySelector(".scroll-btn").addEventListener
    ("click", () => {
        document.querySelector("html").style.scrollBehavior = "smooth";
        setTimeout(() => {
            document.querySelector("html").style.scrollBehavior
            = "unset";
        }, 1000);
    });


var script_url = "https://script.google.com/macros/s/AKfycbxFa8S2xRTby_DWZz7GylQsuJnRJTvbHtVhYhU-V-6PMvMYygo/exec";
function insert_value() {
    var fullname = $('fullname').val();
    var email = $('email').val();
    var message = $('message').val();
    var url = script_url + "?callback-ctrlq&fullname=" + fullname + "&email" + email + "&message" + message + "&action-insert";
    var request = jQuery.ajax({
        crossDomain: true,
        url: url,
        method: "GET",
        dataType: "jsonp"
    });
    $("#resetForm").reset();
}
function ctrlq(e) {
    alert('Congrats! Registered Successfully')
}
