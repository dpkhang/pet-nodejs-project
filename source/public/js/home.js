let next = document.getElementsByClassName('next_icon');
let body = document.getElementsByTagName('body');
let header = document.getElementsByClassName('header');
let moon = document.getElementById('first-background-moon');
let cat = document.getElementById('first-background-cat');
let first_canvas = document.getElementById('first-background-canvas');
let ctx = first_canvas.getContext('2d');

//Canvas Meteor(Sao băng)
first_canvas.width = window.innerWidth*3/2;
first_canvas.height = window.innerHeight/6*5;

function Meteor(){
    this.x = Math.random() * first_canvas.width;
    this.y = Math.random() * first_canvas.height;
    this.r = Math.random() + .5;
    this.x2 = this.x;
    this.y2 = this.y;
    this.update = function (){
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc( this.x2, this.y2, this.r, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.closePath();
        this.x2 += 1; 
        this.y2 += 2;
        if(this.y2 > first_canvas.height){
            this.x2 = this.x;
            this.y2 = 0;
        }
    }
}

let meteors = [];

function drawMeteor(){
    ctx.clearRect(0, 0, first_canvas.width, first_canvas.height);
    meteors.forEach(meteor =>{
        meteor.update();
    })
}

window.onload = function() {
    for(let i = 0 ; i < 400; i++){
        meteors.push(new Meteor());
    }
    setInterval(drawMeteor, 50);
}

//Move to (Chuyển trang)
next[0].addEventListener('click', ()=>{
    window.scrollTo(0, window.innerHeight + 15);
    setTimeout(()=>{
        body[0].style.overflow = 'visible';
    }, 500);    top+= 25;
    moon.style.top =  top  + 'px';
})

function scrollbar(){
    if(window.scrollY == 0){
        next[0].style.opacity = 1;
    }else{
        next[0].style.opacity = 0;
    }
}

setInterval(scrollbar, 100);

//Moon and Cat Effect (Hiệu ứng)
window.addEventListener("scroll", ()=>{
    if(window.scrollY > window.innerHeight/2){
        moon.style.transition = '.5s linear';
        moon.style.opacity = 0;
    }else {
        moon.style.left =  375 - window.scrollY +'px';
        moon.style.top = 30 + window.scrollY  + 'px';
        moon.style.opacity = 1;
        cat.style.transition = '.75s linear'
        cat.style.right = 60 - window.scrollY*3 + 'px';
    }
});

