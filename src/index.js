const fInitial = document.querySelector("#f-initial");
const fFinal = document.querySelector("#f-final");
const fieldSet = document.querySelectorAll("[name='fh']");
const sendButton = document.querySelector(".calc-btn");

const messages = {
  quantityFiberError:
    "A quantidade de fibra inicial não pode ser superior a final.",
  radioButtonUnchecked: "Selecione o cabo alimentador correspondente. ",

  capacityCableOverrated:
    "A quantidade de fusões nao pode exceder a capacidade do cabo alimentador",
};


const possibleColors = ['verde', 'amarelo', 'branco', 'azul', 'vermelho',
    'violeta','marrom', 'rosa', 'preto', 'cinza', 'laranja', 'aqua']


//Captura o valor do radio (quantidade de fibras no cabo alimentador)
function getRadioValue(){
  for (let index = 0; index < fieldSet.length; index++) {
    const element = fieldSet[index];
    if (element.checked) {
      // console.log(element.value);
      return Number(element.value);
    }
    }
  }

const checkInputField = ()=>{
  if(fInitial || fFinal === '' ){
    console.log('Error, informe as fibras iniciais e finais;')
    return false
  }
  return true
}
const calcFusionTotal = async (f1, f2) => {
  let result =  await f2 - f1 + 1;
  return result
};

const calcFusion = async () => {
  let f1 = Number(fInitial.value);
  let f2 = Number(fFinal.value);

  let fhResult = getRadioValue();
  let fTotal = await calcFusionTotal(f1, f2);
  let groups = calcGroups(fhResult)

  if(!checkInputField){
    console.log(error)
  }
  if (fhResult === undefined) {
    alert(messages.radioButtonUnchecked);

    return true;
  }
  if (fhResult < calcFusionTotal) {
    alert(messages.capacityCableOverrated);
    return true;
  }

  if (f2 < f1) {
    alert(messages.quantityFiberError);
    return true;
  }

  console.log(fTotal, groups); 
  return fTotal

};
 function calcGroups(fMain){
  let groupM = Number(fMain);
  let fiberPerGroup;
  let groups;

  switch (groupM) {
    case 12: {
      fiberPerGroup = 12;
      groups = Math.ceil(groupM / fiberPerGroup);
      break;
    }
    case 24: {
      fiberPerGroup = 6;
      groups = Math.ceil(groupM / fiberPerGroup);
      break;
    }

    case 36: {
      fiberPerGroup = 6;
      groups = Math.ceil(groupM / fiberPerGroup);
      break;
    }
    case 48: {
      fiberPerGroup = 12;
      groups = Math.ceil(groupM / fiberPerGroup);
      break;
    }
    case 72: {
      fiberPerGroup = 12;
      groups = Math.ceil(groupM / fiberPerGroup);
      break;
    }
    case 144: {
      fiberPerGroup = 12;
      groups = Math.ceil(groupM / fiberPerGroup);
      break;
    }
  }
  return groups;
};
const calcColorFusions = ()=>{
 let totalDeFusoes = calcFusionTotal()
  for(i = 0; i <= totalDeFusoes; i++){
    console.log(possibleColors[i])
  }
  console.log(totalDeFusoes)
}
// sendButton.onclick = getRadioValue
// sendButton.onclick = calcFusion;
sendButton.onclick =calcFusion, calcColorFusions;
