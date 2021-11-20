let content_menu = document.getElementsByClassName('content-box_component-menu');
let component_sub_1_cat = document.getElementsByClassName('component_sub-1-cat');
let component_sub_1_dog = document.getElementsByClassName('component_sub-1-dog');
let blocks = document.querySelectorAll('.content-box .content-box_component-main .content-box_component_sub-2 .block');
let home_svg = document.getElementById('home-svg');
let block_element = document.querySelectorAll('.content-box .content-box_component-main .content-box_component_sub-2 .block .content-box_component_sub_element');
window.addEventListener("scroll", () => {
    if (window.scrollY >= window.innerHeight / 3) {
        content_menu[0].style.transition = .5 + "s";
        content_menu[0].style.top = 0;
    } else {
        content_menu[0].style.transition = .5 + "s";
        content_menu[0].style.top = -5 + "rem";
    }
    if (window.scrollY >= window.innerHeight / 3 && window.scrollY <= window.innerHeight + 200) {
        component_sub_1_cat[0].style.transition = ".5s ease-in";
        component_sub_1_cat[0].style.left = 0;
        component_sub_1_cat[0].style.opacity = 1;
    } else {
        component_sub_1_cat[0].style.left = 20 + "%";
        component_sub_1_cat[0].style.opacity = .1;
    }
    if (window.scrollY >= window.innerHeight - 200 && window.scrollY <= window.innerHeight * 2 - 200) {
        component_sub_1_dog[0].style.transition = ".5s ease-in";
        component_sub_1_dog[0].style.right = 0;
        component_sub_1_dog[0].style.opacity = 1;
    } else {
        component_sub_1_dog[0].style.right = 20 + "%";
        component_sub_1_dog[0].style.opacity = .1;
    }
    blocks.forEach((value, index) => {
        if(window.scrollY >= value.offsetTop - 15*15 - 500 + window.innerHeight) {
            value.style.opacity = 1;
            value.style.top = "0rem";
        }
        else {
            value.style.opacity = .1;
            value.style.top = "15rem";
        }
    })
});

home_svg.lastElementChild.setAttribute('d', `M 0 60 q ${window.innerWidth/2} -100 ${window.innerWidth} 0`);
window.addEventListener('resize', () => {
    home_svg.lastElementChild.setAttribute('d', `M 0 60 q ${window.innerWidth/2} -100 ${window.innerWidth} 0`);
})
