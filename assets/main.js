//Select Menu Icon
const menu = document.querySelector(".menu__icon");
const headerHeight = document.querySelector(".header__menu")

//Add event listner to menu icon
menu.addEventListener("click", function(){
    // if(headerHeight.classList.contains("hide__menu")){
    //     headerHeight.classList.remove("hide__menu");
    // }
    // else{
    //     headerHeight.classList.add("hide__menu");
    // }

    headerHeight.classList.toggle("hide__menu");
})