// find element
let cashOutButton = document.querySelector('.cashOut_Button');
let popup=document.querySelector('.cashOutDiv');
popup.style.display ='none'




// coushOUT POPUP CREATE

let h2 = document.createElement('h2');
h2.innerHTML='Cash Out'
let cashOutNumberInput = document.createElement('INPUT');
cashOutNumberInput.setAttribute('type','number')
cashOutNumberInput.setAttribute('placeholder','Enter Your Amount')
let cashOutPasswordInput = document.createElement("INPUT");
cashOutPasswordInput.setAttribute('type','password')
cashOutPasswordInput.setAttribute('placeholder','enter your password');

let h3 = document.createElement('h3')


let button = document.createElement("BUTTON");
button.innerHTML='CashSubmit'
// CashOut Popup createElement appenchaild
popup.appendChild(h2)
popup.appendChild(cashOutNumberInput);
popup.appendChild(cashOutPasswordInput);
popup.appendChild(h3)
popup.appendChild(button);
popup.classList.add('popUp')

// cashOut click button

cashOutButton.addEventListener('click',function(){
    successful.style.display='none'
    popup.style.display='block'
    popupdiv.style.display = 'none'
    flexilode.style.display ='none' 
    flexilode0.style.display ='none'
    susseges2.style.display='none'
})

// CashSubmit button click
let pin =777;
let susseges1=document.querySelector('.susseges1');
susseges1.style.display='none'
let newCashOut=document.querySelector('.newCashOut')
let outCash =document.getElementById('outCash')
button.addEventListener('click',function(){
    let CashOutValue=parseFloat(cashOutNumberInput.value);
    let valueCount = parseFloat(countBalacne.innerHTML); 
    if(cashOutNumberInput.value==''){
        alert("Enter Your Amount And Password")
    }
    else if(cashOutPasswordInput.value==''){
        h3.innerHTML='enter your password'  
    }
    else if(cashOutPasswordInput.value!=pin){
        h3.innerHTML='worng password'  
    }
    else if(cashOutPasswordInput.value==pin){
        tottalCash=parseFloat(CashOutValue+outCash)
        outCash.innerHTML=tottalCash
        newCashOut.appendChild(outCash)
        console.log(valueCount,tottalCash)
        countBalacne.innerHTML=valueCount-CashOutValue
        cashOutNumberInput.value=''
        cashOutPasswordInput.value=''
        popup.style.display ='none'
        susseges1.style.display='block'
    }
})
