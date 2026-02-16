document.getElementById('submit').addEventListener('click', function() {
  const name = nameInput.value;
  const age = parseInt(ageInput.value);
  const message = checkAge(name, age);
  alert(message);
});

const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age'); 

function checkAge (name, age) {
    if (age < 0 || !age || isNaN(age)) {
    return `Hello ${name}, please enter a valid age.`;
  }
    else if (age >= 18) {
    return `Hello ${name}, you are an adult.`;
  } 
  else {
    return `Hello ${name}, you are a minor.`;
  }
}