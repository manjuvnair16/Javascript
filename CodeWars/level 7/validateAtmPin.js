//Validate ATM pin: it can be either 4 or 6 digits

function validatePIN (pin) {
  return((/(^\d{4}$)|(^\d{6}$)/).test(pin));
}

validatePIN("-1.234");

/*console log
false
*/

//-----------------------------------
/* Alternate solutions

function validatePIN (pin) {
  return /^\d{4}(\d{2})?$/.test(pin);
}
