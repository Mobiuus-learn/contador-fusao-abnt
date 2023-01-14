const fInitial = document.querySelector("#f-initial");
const fFinal = document.querySelector("#f-final");
const fieldSet = document.querySelectorAll("[name='fh']");
const sendButton = document.querySelector(".calc-btn");

const possibleColors = ['verde', 'amarelo', 'branco', 'azul', 'vermelho',
    'violeta','marrom', 'rosa', 'preto', 'cinza', 'laranja', 'aqua']

function mainCall(){
  getRadioValue()
  calcPrimary()

}
function getRadioValue(){
  let result 
  for (let index = 0; index < fieldSet.length; index++) {
    const element = fieldSet[index];
    if (element.checked) {
      result = element.value
      return result;
    }
    }
  }



const groups = {
  '12':1,
  '24':4,
  '36':6,
  '48':4,
  '72':6,
  '144':12
}

const calcPrimary = async () =>{
  let fibIn = Number(fInitial.value)
  let fibFin = Number(fFinal.value)
  let calcFusion = fibFin - fibIn + 1 
  let groupsC = groupsPerCable()
  
  let groupsPerFusion = Math.ceil(calcFusion / groupsC)
  console.log(`o total de fusões é: ${calcFusion}; O total de grupos é ${groupsPerFusion}`)
}


function groupsPerCable() {
  
  let valueInput = getRadioValue();
  let result;
  for(const prop in groups){
     if(prop == valueInput){
      result = groups[prop]
    }
  }
   
  return Number(result);
}
  


sendButton.onclick = mainCall