// flexilode popup create div

let h4 = document.createElement('h4')
h4.innerHTML='Flexilode'
let h5 = document.createElement('h5')
h5.innerHTML = "GP"
h5.classList.add("Rebutton")
let h6 = document.createElement('h6')
h6.innerHTML = "BL"
h6.classList.add("Rebutton")
let p=document.createElement("p")
p.innerHTML= "AR"
p.classList.add("Rebutton")
let span =document.createElement('span')
span.innerHTML= 'RB'
span.classList.add("Rebutton")
 

// CREATE ELEMENT FLEXILODE APPENCHILD
let flexilode0 = document.querySelector('.flexilode0');
flexilode0.style.display ='none'
flexilode0.appendChild(h4)
let flexilode1 = document.querySelector('.flexilode1');
flexilode1.appendChild(h5)
flexilode1.appendChild(h6)
flexilode1.appendChild(p)
flexilode1.appendChild(span)
flexilode0.classList.add('popUp')
flexilode0.appendChild(flexilode1)

let mobileRecharge_Button = document.querySelector('.mobileRecharge_Button');
 mobileRecharge_Button.addEventListener('click',function(){
    successful.style.display='none'
    flexilode0.style.display ='block'
    popup.style.display='none'
    popupdiv.style.display = 'none'
    susseges1.style.display='none'
    susseges2.style.display='none'
    flexilode.style.display ='none' 
    
})

// flexilode recharege input filde, number, ammount, pin popup create

let mr  = document.createElement('mr')
mr.innerHTML ='Mobile Recharge'
let flexilodeInputNumber = document.createElement('INPUT');
flexilodeInputNumber.setAttribute('type','number')
flexilodeInputNumber.setAttribute('placeholder','Enter Your Number')
let worng = document.createElement("worng")
let flexilodeInput = document.createElement('INPUT');
flexilodeInput.setAttribute('type','number')
flexilodeInput.setAttribute('placeholder','Enter Your Amount')
let flexilodePasswordInput = document.createElement('INPUT');
flexilodePasswordInput.setAttribute('type','password');
flexilodePasswordInput.setAttribute('placeholder','Enter Your Pin')
let flexilodeButton = document.createElement('BUTTON');
flexilodeButton.innerHTML='Submit' 

// CREATE ELEMENT FLEXILODE APPENCHILD
let flexilode = document.querySelector('.flexilode');
flexilode.style.display ='none' 
flexilode.appendChild(mr)
flexilode.appendChild(flexilodeInputNumber)
flexilode.appendChild(worng)
flexilode.appendChild(flexilodeInput)
flexilode.appendChild(flexilodePasswordInput)
flexilode.appendChild(flexilodeButton)
flexilode.classList.add('popUp')

// MOBILE RECHARGE BUTTON FIND GP BL AL RB CREATE CLICK BUTTON



h5.addEventListener("click", function(){
    flexilode.style.display ='block'
    flexilode0.style.display ='none' 
    
   
    
})

h6.addEventListener("click", function(){
    flexilode.style.display ='block'
    flexilode0.style.display ='none' 
    
})

p.addEventListener("click", function(){
    flexilode.style.display ='block'
    flexilode0.style.display ='none' 
   
})

span.addEventListener("click", function(){
    flexilode.style.display ='block'
    flexilode0.style.display ='none' 
   
})
// flexilodeButton gp
let susseges2=document.querySelector(".susseges2");
susseges2.style.display='none'
 
// gp flexilode 
let gp ='017xxxxxxxx'
let bl='019xxxxxxxx'
let ar='016xxxxxxxx'
let rb='018xxxxxxxx'
flexilodeButton.addEventListener('click',function(){
    let newMobileRecharge = document.querySelector('.newMobileRecharge')
    let Recharge = document.getElementById('Recharge')
    let valueCount = parseFloat(countBalacne.innerHTML);
    if(flexilodeInputNumber.value== '' ){
        alert('Ente your Number')
    }
    else if(flexilodeInputNumber.value.includes('017')!=gp.includes('017')){
        worng.innerHTML='enter your worng number';
        
    }
    // else if(flexilodeInputNumber.value.includes('019')!=bl.includes('019')){
    //     worng.innerHTML='enter your worng number';
    // }
    // else if(flexilodeInputNumber.value.includes('016')!=ar.includes('016')){
    //     worng.innerHTML='enter your worng number';
    // }
    // else if(flexilodeInputNumber.value.includes('018')!=rb.includes('018')){
    //     worng.innerHTML='enter your worng number';
    // }
    // else if(flexilodeInputNumber.value.length != 11){
    //     worng.innerHTML='enter your full number';   
    // }
    else{
       
        flexiValue = parseFloat(flexilodeInput.value)
        countBalacne.innerHTML=valueCount-flexiValue
        flexilodeInputNumber.value= '' 
        flexilodeInput.value=''
        flexilodePasswordInput.value=''
        Recharge.innerHTML=flexiValue
        newMobileRecharge.appendChild(Recharge)
        flexilode.style.display ='none' 
        susseges2.style.display='block'
        notification.innerHTML= `<p>flexilode${valueCount-flexiValue} from successful</p>`
    }

})





