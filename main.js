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
/*
Forms
*/ 

let collabName =document.getElementById('collab-name');
let collabMail =document.getElementById('collab-email');
let collabMessage =document.getElementById('collab-message');
let sucess = document.getElementById('sucess');
let error = document.getElementById('error')
let contactName =document.getElementById('contact-name');
let contactMail =document.getElementById('contact-mail');
let contactMessage =document.getElementById('contact-message');
let sucessContact = document.getElementById('contact-sucess');
let errorContact = document.getElementById('contact-error')
// Open collab form
let openCollab = document.getElementById('open-collab-form');
let collabForm = document.getElementById('collab');

openCollab.addEventListener('click', ()=>{
    collabForm.style.display='block';
})
/// Close collab form on submit
/*
collabForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(collabName.value==='' || collabMail ==='' || collabMessage ===''){
     error.style.display='block';
     collabName.style.border='1px solid red';
     collabMail.style.border='1px solid red';
     collabMessage.style.border='1px solid red';
    }else{
        collabName.style.border='1px solid black';
        collabMail.style.border='1px solid black';
        collabMessage.style.border='1px solid black';
        collabName.value='';
        collabMail.value='';
        collabMessage.value='';
        setTimeout(()=>{
            sucess.style.display='block';
        },1000)
        setTimeout(()=>{
            collabForm.style.display ='none';
        },'5000');
        error.style.display='none'
    } 
})*/
// Open Hire form
let openHire = document.getElementById('open-hire');
let contactForm = document.getElementById('contact');
openHire.addEventListener('click', ()=>{
    contactForm.style.display='block';
})
/// Close contact form on submit
/*
contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(contactName.value==='' || contactMail ==='' || contactMessage ===''){
        errorContact.style.display='block';
        contactName.style.border='1px solid red';
        contactMail.style.border='1px solid red';
        contactMessage.style.border='1px solid red';
       }else{
        contactName.style.border='1px solid black';
        contactMail.style.border='1px solid black';
        contactMessage.style.border='1px solid black';
        contactName.value='';
        contactMail.value='';
        contactMessage.value='';
           setTimeout(()=>{
               sucessContact.style.display='block';
           },1000)
           setTimeout(()=>{
            contactForm.style.display ='none';
           },'5000');
           errorContact.style.display='none'
       } 
})*/
// Display Info on enter
function displayInfoOnEnter(image, info){
    image.style.display='none';
    info.style.display ='flex';
}

// Hide Info On leave
function hideInfoOnLeave(image, info){
    image.style.display='flex';
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
