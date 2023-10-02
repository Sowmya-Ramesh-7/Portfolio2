
let card1=document.querySelector(".card1");
let bottom1=document.querySelector(".card1 .bottom")
card1.addEventListener("mouseenter",()=>{
    let p=document.querySelector(".card1 > p");
    p.innerHTML="Description:<br><br>"+bottom1.innerHTML+"<br><br>I have replicated the Spotify web player homepage.";
});
card1.addEventListener("mouseleave",()=>{
    let p=document.querySelector(".card1 > p");
    p.innerHTML=""
});

let card2=document.querySelector(".card2");
let bottom2=document.querySelector(".card2 .bottom");
card2.addEventListener("mouseenter",()=>{
    let p=document.querySelector(".card2 > p");
    p.innerHTML="Description:<br><br>"+bottom2.innerHTML+"<br><br>Web Pages: Educational Qualification, Projects, Hobbies etc,.";
});
card2.addEventListener("mouseleave",()=>{
    let p=document.querySelector(".card2 > p");
    p.innerHTML=""
});


let card3=document.querySelector(".card3");
let bottom3=document.querySelector(".card3 .bottom");
card3.addEventListener("mouseenter",()=>{
    let p=document.querySelector(".card3 > p");
    p.innerHTML="Description:<br><br>"+bottom3.innerHTML+"<br><br>Modules: Login/Signup, Categories, Cart , Bill ,Admin pages etc,.<br/>";
    
});
card3.addEventListener("mouseleave",()=>{
    let p=document.querySelector(".card3 > p");
    p.innerHTML=""
});


