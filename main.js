const billDiv = document.getElementById('billTotalInput');
const tipDiv = document.getElementById('tipInput');
const people = document.getElementById('numberOfPeople');
const totalPerson = document.getElementById('perPersonTotal');

let number = Number(people.innerText);

const calculateBill = () => {
    let bill = Number(billDiv.value);
    let tipPercent = Number(tipDiv.value) / 100;
    let tipAmount = bill * tipPercent;
    let totalTip = bill + tipAmount;
    let perPersonDiv = totalTip / number;
    totalPerson.innerText=`$${perPersonDiv.toFixed(2)}`
}
const increasePeople = () => {
    number += 1;
    people.innerText = number;
    calculateBill()
}
const decreasePeople = () => {
      if (number <= 1) {
    throw 'Hey! You cannot have less than 1 person!'
    return
    }
    number -= 1;
    people.innerText = number;
    calculateBill();
 }