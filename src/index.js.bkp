const fInitial = document.querySelector("#f-initial");
const fFinal = document.querySelector("#f-final");
const fieldSet = document.querySelectorAll("[name='fh']");
const sendButton = document.querySelector(".calc-btn");
const radioGroup = document.querySelector(".radio-group");
const showR = document.querySelector(".show-results");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const modalClose = document.querySelector("#modal-close");


const modalResults = document.querySelector(".show-results");
const resultsContent = document.querySelector(".results-content");
const modalCloseResults = document.querySelector("#modal-close-results");

const possibleColors = [
  "verde",
  "amarelo",
  "branco",
  "azul",
  "vermelho",
  "violeta",
  "marrom",
  "rosa",
  "preto",
  "cinza",
  "laranja",
  "aqua",
];

function mainCall() {
  getRadioValue();
  calcPrimary();
}
function getRadioValue() {
  let result;
  for (let index = 0; index < fieldSet.length; index++) {
    const element = fieldSet[index];
    if (element.checked) {
      result = element.value;
      return result;
    }
  }
}
const fiberBygroups = {
  12: 12,
  24: 6,
  36: 6,
  48: 12,
  72: 12,
  144: 12,
};

const calcPrimary = () => {
  let fibIn = Number(fInitial.value);
  let fibFin = Number(fFinal.value);
  let calcFusion = Number(fibFin - fibIn + 1);
  let groupsC = fiberPerGroup();
  if (fibFin > 144) {
    modal.style.display = "block";
    modalContent.innerHTML = `<h3>A fibra final excede 144, por favor contate o administrador
      para mais informações</h3>`;
  }
  if (!groupsC) {
    // alert("Por favor selcione um cabo alimentador válido");
    // radioGroup.classList.add("error");
    modal.style.display = "block";
    modalContent.innerHTML = `<h3>Por favor selecione um cabo alimentador válido</h3>`;
    return;
  }
  if (fibFin <= fibIn) {
    modal.style.display = "block";
    modalContent.innerHTML = `<h3>A Fibra Final deve ser maior que a Fibra Inicial</h3>`;
    // alert("A fibra inicial deve ser maior que o valor Final!");
    return;
  }

  if (getRadioValue() < fibFin) {
    // alert("A quantidade de fusões é maior que o cabo informado!");
    modal.style.display = "block";
    modalContent.innerHTML = `<h3>A quantidade de fusões é maior que o cabo informado</h3>`;
    return;
  }

  showResult(calcFusion, totalFusion(calcFusion, groupsC));
  // calcColors(calcFusion, totalFusion(calcFusion, groupsC))

  return calcFusion;
};
const totalFusion = (fusionT, totalGroups) => {
  let groupsTotal = Math.ceil(fusionT / totalGroups);
  console.log(groupsTotal);
  return groupsTotal;
};

function fiberPerGroup() {
  let valueInput = getRadioValue();
  let result;
  for (const prop in fiberBygroups) {
    if (prop == valueInput) {
      result = fiberBygroups[prop];
    }
  }
  return Number(result);
}

const showResult = (fusions, groupsCA) => {
  let spn = document.createElement("span");
  spn.innerHTML = `O total de fusões é : <strong>${fusions}</strong>, <br> <span style="margin-top:10px;">o total de grupos é : <strong>${groupsCA}</strong></span>`;
  resultsContent.appendChild(spn);
  // calcColors(fusions, groupsCA);
  modalResults.style.display = "block";
  const rs = document.querySelector(".reset-btn");
  rs.addEventListener("click", () => {
    // resultsContent.removeChild(spn);
    radioGroup.classList.remove("error");
  });
};
// TODO: Implemantar mapa de cores com base no numero de funções e ordem do grupo

// let arrColors = []
// const calcColors  = (fusions, tGroups)=>{
//   for(let i = 1; i < tGroups ; i++){
//     for(let j = 1; j <= fusions; j++){
//       // arrColors.length = fusions
//       arrColors.push(possibleColors[j-1])

//       console.log(arrColors)
//     }
//   }
// }
sendButton.onclick = mainCall;

modalClose.addEventListener("click", () => {
  modal.style.display = "none";
  fInitial.value = "";
  fFinal.value = "";
});

modalCloseResults.addEventListener("click", () => {
  modalResults.style.display = "none";
})