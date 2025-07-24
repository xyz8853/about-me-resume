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

/**page popup */
    

let admissionPopup = document.querySelector('#admissionPopup');

setTimeout( ()=>{
    admissionPopup.removeAttribute('class');
    admissionPopup.setAttribute('class','admission-popup');
},3000);

let closePopup = document.querySelector('#closePopup');
    closePopup.addEventListener('click', function(event){
        admissionPopup.setAttribute('class','admission');
    });

    let submitBtn = document.querySelector(".submit-btn-popup");
    let callBtn = document.querySelector(".call-btn");
    let whatsappBtn = document.querySelector('.whatsapp-btn');

        submitBtn.addEventListener('mouseover', function(event){
            submitBtn.textContent='Thank You';
        });
         submitBtn.addEventListener('mouseout', function(event){
            submitBtn.textContent='Subscribe';
        });

        callBtn.addEventListener('mouseover', function(){
            // callBtn.textContent=' Call Me';
            callBtn.textContent=' 8853292074';
            let i = document.createElement('i');
            i.setAttribute('class','fa fa-phone');
            callBtn.prepend(i);
        })
        callBtn.addEventListener('mouseout', function(){
           callBtn.textContent=' Call Now';
            let i = document.createElement('i');
            i.setAttribute('class','fa fa-phone');
            callBtn.prepend(i);
        })

        whatsappBtn.addEventListener('mouseover', function(){
            whatsappBtn.textContent=' 8853292074';
            let i = document.createElement('i');
            i.setAttribute('class','fa fa-whatsapp');
            whatsappBtn.prepend(i);
            
        });
        
        whatsappBtn.addEventListener('mouseout', function(){
            whatsappBtn.textContent=' WhatsApp';
            let i = document.createElement('i');
            i.setAttribute('class','fa fa-whatsapp');
            whatsappBtn.prepend(i);
            
        });
/**end page popup */

/**our-work {java-script} */
let allWork = document.querySelectorAll('.cources-item');   
    allWork.forEach( (element,index)=>{
         let id;
         let value1;
         let value2;
         let str;
         let index2;
         element.addEventListener('mouseover', function(event){
             value1 = element.children;
             value2 = value1[1].children;
             str = value2[0].innerHTML;
             value2[0].innerHTML='';
             let addText='';
             index2=0;
             id = setInterval( ()=>{
                if(str.length-1>=index2){
                    addText = addText+str[index2];
                    value2[0].textContent=addText;
                    if(str.length-1 == index2){
                        clearInterval(id);
                        index2=0;
                    }
                    index2++;
                }
             },80);
             
         })
          element.addEventListener('mouseout', function(event){
                value2[0].textContent=str;
                clearInterval(id);
          });
    })
