//Ensure all the content is below the navbar-nav
function moveContent() {
    var navbarHeight = document.getElementById('my-navbar').clientHeight;
    var content = document.querySelector("#content");
    content.style.marginTop = navbarHeight.toString() + "px";

}
moveContent();
window.onresize = moveContent;
