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
const modalContainer = document.querySelector(".modal-container");

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

const fiberBygroups = {
  12: 12,
  24: 6,
  36: 6,
  48: 12,
  72: 12,
  144: 12,
};

function mainCall() {
  const selectedFieldValue = getRadioValue();

  if (!selectedFieldValue) {
    displayModal("Por favor selecione um cabo alimentador válido");
    return;
  }

  const fibIn = Number(fInitial.value);
  const fibFin = Number(fFinal.value);

  if (fibFin > 144) {
    displayModal(
      "A fibra final excede 144, por favor contate o administrador para mais informações"
    );
    return;
  }

  if (fibFin <= fibIn) {
    displayModal("A Fibra Final deve ser maior que a Fibra Inicial");
    return;
  }

  if (selectedFieldValue < fibFin) {
    displayModal("A quantidade de fusões é maior que o cabo informado");
    return;
  }

  const calcFusion = fibFin - fibIn + 1;
  const groupsC = fiberPerGroup(selectedFieldValue);

  const totalGroups = totalFusion(calcFusion, groupsC);

  showResult(calcFusion, totalGroups);
  calcColors(calcFusion, totalGroups);
}

function getRadioValue() {
  const checkedElement = Array.from(fieldSet).find(
    (element) => element.checked
  );
  return checkedElement ? checkedElement.value : null;
}

function totalFusion(fusionT, totalGroups) {
  return Math.ceil(fusionT / totalGroups);
}

function fiberPerGroup(valueInput) {
  return fiberBygroups[valueInput] || 0;
}

function displayModal(message) {
  modal.style.display = "block";
  modalContent.innerHTML = `<h3>${message}</h3>`;
}

function showResult(fusions, groupsCA) {
  const spn = document.createElement("span");
  spn.classList.add("text-results");
  spn.innerHTML = `O total de fusões é : <strong><u>${fusions}</u></strong>, <br> 
  <span style="margin-top:10px;">O  total de grupos é : <strong>${groupsCA}</strong></span>`;

  resultsContent.appendChild(spn);
  modalContainer.style.display = "block";
  modalResults.style.display = "block";

  const rs = document.querySelector(".reset-btn");
  rs.addEventListener("click", () => {
    radioGroup.classList.remove("error");
  });
}
function calcColors(fusions, totalGroups) {
  const arrColors = [];
  const fibersInGroup = fiberPerGroup(getRadioValue());

  for (let i = 0; i < totalGroups; i++) {
    const colorsInGroup = getColorsForGroup(fibersInGroup);
    const maxFusionsInGroup = Math.min(fusions, fibersInGroup); // Limita o número de fusões ao total de fibras no grupo

    for (let j = 0; j < maxFusionsInGroup; j++) {
      const colorIndex = j % colorsInGroup.length;
      arrColors.push(colorsInGroup[colorIndex]);
    }

    fusions -= fibersInGroup; // Reduz o número de fusões pelo total de fibras no grupo
  }

  console.log(arrColors);
  // Você pode usar arrColors para processamento ou exibição posterior
}

function getColorsForGroup(fibersInGroup) {
  const availableColors =
    fibersInGroup <= 6
      ? possibleColors.slice(0, fibersInGroup)
      : possibleColors.slice(0, 12);
  return Array.from(
    { length: fibersInGroup },
    (_, index) => availableColors[index % availableColors.length]
  );
}

sendButton.onclick = mainCall;

modalClose.addEventListener("click", () => {
  closeModal(modal);
});

modalCloseResults.addEventListener("click", () => {
  closeModal(modalResults);
});

function closeModal(element) {
  element.style.display = "none";
  fInitial.value = "";
  fFinal.value = "";
}
