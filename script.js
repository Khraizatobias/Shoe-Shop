let menu = document.querySelector(".menu");
let shoes = document.querySelector(".shoes")
menu.addEventList("click", function () {
	navbar.classlist.toggle("active");
});


window.onscroll =() =>{
	navbar.classlist.remove("active");
};