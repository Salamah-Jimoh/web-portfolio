console.log('Bismillah')
// Glowing Header
const text=document.querySelector("#fancy")
const textContent=text.textContent;
const str=textContent.split("");
text.textContent="";
for(let i=0; i < str.length; i++){
    text.innerHTML +="<span>" +str[i]+ "</span>";
}

let char=0;
let timer=setInterval(onTick, 1000);
function onTick(){
    
}

function onTick(){
    const span =text.querySelectorAll('span')[char];
   span.classList.add('style');
   char++
    if(char=== str.length){
     complete();
     return;
    }
}
function complete(){
    clearInterval(timer);
    timer=null;
}
// Menu
// Open menu
document.getElementById('menu-open').addEventListener('click', ()=>{
    document.getElementById('menu-expand').style.display="block";
    document.getElementById('menu-open').style.display ="none"
    document.getElementById('main').style.marginLeft="200px";  
})
//close menu
document.getElementById('menu-close').addEventListener('click', ()=>{
    document.getElementById('menu-expand').style.display="none";
    document.getElementById('menu-open').style.display ="block"
   document.getElementById('main').style.marginLeft="";   
})
// Close Menu Onclick Menu Items
let menuItems =document.getElementsByClassName('menu-item');
for(var i=0; i<menuItems.length; i++){
    let menu = menuItems[i];
    menu.addEventListener('click', ()=>{
        document.getElementById('menu-expand').style.display="none";
    document.getElementById('menu-open').style.display ="block"
   document.getElementById('main').style.marginLeft=""; 
    })
}
// Open collab form
let openCollab = document.getElementById('open-collab-form');
let collabForm = document.getElementById('collab');
openCollab.addEventListener('click', ()=>{
    collabForm.style.display='block';
})
/// Close collab form on submit
collabForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    collabForm.style.display ='none';
})
// Open Hire form
let openHire = document.getElementById('open-hire');
let contactForm = document.getElementById('contact');
openHire.addEventListener('click', ()=>{
    contactForm.style.display='block';
})
/// Close contact form on submit
contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    contactForm.style.display ='none';
})
// Display Info on enter
function displayInfoOnEnter(image, info){
    image.style.display='none';
    info.style.display ='flex';
}

// Hide Info On leave
function hideInfoOnLeave(image, info){
    image.style.display='block';
    info.style.display ='none'
}


//project One
document.getElementById('project1').addEventListener('click', ()=>{
    let info = document.getElementById('info1');
    let image = document.getElementById('img1') ;
displayInfoOnEnter(image, info)
})
document.getElementById('project1').addEventListener('dblclick', ()=>{
    let info = document.getElementById('info1');
    let image = document.getElementById('img1')  ;
    hideInfoOnLeave(image, info);
})

// Project2

document.getElementById('project2').addEventListener('click', ()=>{
    let info = document.getElementById('info2');
    let image = document.getElementById('img2')  ;
    displayInfoOnEnter(image, info);
})
document.getElementById('project2').addEventListener('dblclick', ()=>{
    let info = document.getElementById('info2');
    let image = document.getElementById('img2')  ;
    hideInfoOnLeave(image, info);
})
// Project 3

document.getElementById('project3').addEventListener('click', ()=>{
    let info = document.getElementById('info3');
    let image = document.getElementById('img3')  ;
    displayInfoOnEnter(image, info);
})
document.getElementById('project3').addEventListener('dblclick', ()=>{
    let info = document.getElementById('info3');
    let image = document.getElementById('img3')  ;
    hideInfoOnLeave(image, info);
})
// Project 4
document.getElementById('project4').addEventListener('click', ()=>{
    let info = document.getElementById('info4');
    let image = document.getElementById('img4')  ;
    displayInfoOnEnter(image, info);
})
document.getElementById('project4').addEventListener('dblclick', ()=>{
    let info = document.getElementById('info4');
    let image = document.getElementById('img4')  ;
    hideInfoOnLeave(image, info);
})
// Project 5

document.getElementById('project5').addEventListener('click', ()=>{
    let info = document.getElementById('info5');
    let image = document.getElementById('img5')  ;
    displayInfoOnEnter(image, info);
})
document.getElementById('project5').addEventListener('dblclick', ()=>{
    let info = document.getElementById('info5');
    let image = document.getElementById('img5')  ;
    hideInfoOnLeave(image, info);
})
// Project 6

document.getElementById('project6').addEventListener('click', ()=>{
    let info = document.getElementById('info6');
    let image = document.getElementById('img6')  ;
    displayInfoOnEnter(image, info);
})
document.getElementById('project6').addEventListener('dblclick', ()=>{
    let info = document.getElementById('info6');
    let image = document.getElementById('img6')  ;
    hideInfoOnLeave(image, info);
})
