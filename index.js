// javascript for navigation menu and buttons 

document.querySelector("#nav_app_btn").onclick = function() {
    document.querySelector(".show_menu_js").style.position = "fixed";
    document.querySelector(".show_menu_js").style.bottom = "0px";
}
document.querySelector(".show_menu_js").onclick = function() {
    document.querySelector(".show_menu_js").style.position = "fixed";
    document.querySelector(".show_menu_js").style.bottom = "-100%"
}


// javascript for toggle the skills divs

document.querySelector("#toggle_arrow1").onclick = function() {
    let skillsBoxes1 = document.querySelector("#bar_container_js1");
    if (skillsBoxes1.style.display != "none") {
        document.querySelector("#toggle_arrow1").style.transform = "rotate(-180deg)";
        document.querySelector("#bar_container_js1").style.display = "none";

    } else {
        document.querySelector("#toggle_arrow1").style.transform = "rotate(0deg)";
        document.querySelector("#bar_container_js1").style.display = "block";
    }
}

document.querySelector("#toggle_arrow2").onclick = function() {
    let skillsBoxes2 = document.querySelector("#bar_container_js2");
    if (skillsBoxes2.style.display != "block") {
        document.querySelector("#toggle_arrow2").style.transform = "rotate(-180deg)";
        document.querySelector("#bar_container_js2").style.display = "block";

    } else {
        document.querySelector("#toggle_arrow2").style.transform = "rotate(0deg)";
        document.querySelector("#bar_container_js2").style.display = "none";
    }
}


document.querySelector("#toggle_arrow3").onclick = function() {
    let skillsBoxes3 = document.querySelector("#bar_container_js3");
    if (skillsBoxes3.style.display != "none") {
        document.querySelector("#toggle_arrow3").style.transform = "rotate(-180deg)";
        document.querySelector("#bar_container_js3").style.display = "none";

    } else {
        document.querySelector("#toggle_arrow3").style.transform = "rotate(0deg)";
        document.querySelector("#bar_container_js3").style.display = "block";
    }
}

// for qualification sections

document.getElementById("click_education").onclick = function() {
    document.querySelector("#main_education_content_container").style.display = "block";
    document.querySelector("#main_work_content_container").style.display = "none";
}

document.getElementById("click_work").onclick = function() {
    document.querySelector("#main_education_content_container").style.display = "none";
    document.querySelector("#main_work_content_container").style.display = "block";
}

// javascript for services section

document.getElementById("services_click_view_more1").onclick = function() {
    document.getElementById("services_discription_block1").style.display = "block";
}
document.getElementById("cancel_view_more1").onclick = function() {
    document.getElementById("services_discription_block1").style.display = "none";
}

document.getElementById("services_click_view_more2").onclick = function() {
    document.getElementById("services_discription_block2").style.display = "block";
}
document.getElementById("cancel_view_more2").onclick = function() {
    document.getElementById("services_discription_block2").style.display = "none";
}


document.getElementById("services_click_view_more3").onclick = function() {
    document.getElementById("services_discription_block3").style.display = "block";
}
document.getElementById("cancel_view_more3").onclick = function() {
    document.getElementById("services_discription_block3").style.display = "none";
}

document.getElementById("services_click_view_more4").onclick = function() {
    document.getElementById("services_discription_block4").style.display = "block";
}
document.getElementById("cancel_view_more4").onclick = function() {
    document.getElementById("services_discription_block4").style.display = "none";
}


// portfolio swiper javascript=====all code is copied carefully form the w3school for making a slider 

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


// testimonials swiper javascript=====all code is copied carefully form the w3school for making a slider 

let sliderIndex = 1;
showSlider(sliderIndex);

// Next/previous controls
function plusSlide(n) {
    showSlider(sliderIndex += n);
}

// Thumbnail image controls
function currentSlider(n) {
    showSlider(sliderIndex = n);
}

function showSlider(n) {
    let i;
    let slides = document.getElementsByClassName("Slides");
    let dots = document.getElementsByClassName("doted");
    if (n > slides.length) { sliderIndex = 1 }
    if (n < 1) { sliderIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[sliderIndex - 1].style.display = "block";
    dots[sliderIndex - 1].className += " active";
}

// javascript for light and dark theme 


document.getElementById("change_light_theme").onclick = function() {
    let element = document.body;
    element.classList.toggle("dark_theme");


    let header_Col = document.getElementById("header_js");
    if (header_Col.style.background != "white") {
        document.getElementById("header_js").style.background = "white";
    } else {
        document.getElementById("header_js").style.background = "hsl(var(--hue-color), 28%, 12%)";
    }
    let nav_col = document.querySelector(".show_menu_js");
    if (nav_col.style.background != "white") {
        document.querySelector(".show_menu_js").style.background = "white";
    } else {
        document.querySelector(".show_menu_js").style.background = " hsl(var(--hue-color), 28%, 12%)";
    }
}

// document.getElementById("change_light_theme").onclick = function() {

//     }
// background-color: hsl(var(--hue-color), 28%, 12%);