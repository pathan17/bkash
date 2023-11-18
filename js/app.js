// find elememt;

let tottalBalance = document.getElementsByClassName("balanceLabel")[0];
let countBalacne = document.getElementsByClassName("count")[0];
let cashInButton = document.getElementsByClassName("cashIn_Button")[0]


// popup create Element
let h1 = document.createElement('h1')
h1.innerHTML='Cash In'

let inputNumber=document.createElement('INPUT');
inputNumber.setAttribute('type','number');
inputNumber.setAttribute('placeholder','Enter Your Amount');
let div=document.createElement('div')

let inputPassword=document.createElement('INPUT');
inputPassword.setAttribute('type','password')
inputPassword.setAttribute('placeholder','Enter Your Password')
let P=document.createElement('P')

let submitButton = document.createElement('BUTTON');
submitButton.innerHTML='submit'

// create ELement appendchile
let popupdiv=document.getElementsByClassName('popUp')[0];
popupdiv.appendChild(h1);
popupdiv.appendChild(inputNumber);
popupdiv.appendChild(div)
popupdiv.appendChild(inputPassword);
popupdiv.appendChild(P)
popupdiv.appendChild(submitButton);
popupdiv.classList.add('popUp');

// popup dive display none
popupdiv.style.display = 'none'

// cashinButton click
cashInButton.addEventListener("click",function(){
  popupdiv.style.display = 'block'
  popup.style.display='none'
  flexilode0.style.display ='none'
  susseges2.style.display='none'
  flexilode.style.display ='none' 
 
})

// submit button click
let password=666; 
let cashIn = document.getElementsByClassName("newCashIn")[0];
let newCashIn = document.getElementById("newchashin");
cashIn.appendChild(newCashIn);
let remark=document.getElementsByClassName("newRemark")[0];
let notification=document.getElementById("notification");
remark.appendChild(notification);
let successful = document.getElementsByClassName("susseges")[0];
successful.style.display='none'
submitButton.addEventListener('click',function(){
  let numberValue = parseFloat(inputNumber.value);
  let valueCount = parseFloat(countBalacne.innerHTML);
  
  if(inputNumber.value==""){
    alert("Enter Your Number and  Password")
  }
  else if(inputPassword.value==""){
    P.innerHTML ='Enter Your Password'
    
  }
  else if(inputPassword.value != password){
    P.innerHTML= 'wrong password'
    
  }
  else if(inputPassword.value==password) {
    countBalacne.innerHTML = numberValue+valueCount;
    inputNumber.value=''
    inputPassword.value=''
    P.innerHTML= ''
    newCashIn.innerHTML= numberValue+valueCount
    notification.innerHTML= `<p>cash In Tk ${numberValue+valueCount} from successful</p>`
    popupdiv.style.display = 'none'
    successful.style.display='block'

  }
 
})


