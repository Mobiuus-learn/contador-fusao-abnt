const fInitial = document.querySelector("#f-initial");
const fieldSet = document.querySelectorAll("[name='fh']");

function getRadioValue() {
  for (let index = 0; index < fieldSet.length; index++) {
    const element = fieldSet[index];
    if (element.checked) {
      console.log(element.value);
      return element.value;
    }
  }
}


