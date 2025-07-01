let windowCount=0;
let windows_btn = document.querySelector('#windows');
let toggler_btn = document.querySelector('.navbar-toggler');
let windows_icon = document.querySelector('.navbar-toggler-icon');
    toggler_btn.addEventListener('click', function(){
        windowCount++;
        if(windowCount%2==1){
            windows_btn.setAttribute('class', 'fa fa-times');
            windows_icon.style.border="2px solid red";
        }else{
            windows_btn.setAttribute('class', 'fa fa-bars');
            windows_icon.style.border="2px solid white";
        }
    })

// qualification hand fontawesome icon design
let iHand = document.querySelectorAll('.fa-hand-o-right');
let iNo=1;
let sId = setInterval( ()=>{
     iHand.forEach((element)=>{
        if(iNo%2==0){
            element.style.color='yellow';
        }   
        else{
            element.style.color='red';
        }
     }) 
    iNo++;
},1000);