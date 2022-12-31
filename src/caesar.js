// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  let alphabet = "abcdefghijklmnopqrstuvwxyz";

  function caesar(input, shift, encode = true) {
    if (!input) return false;
    if (shift === 0 || shift === undefined || shift > 25 || shift < -25)
      return false;
    let message = "";
    if (encode === false) {
      shift = shift * -1; // -3
    }
    for (let i = 0; i < input.length; i++) {
      let letter = input[i].toLowerCase();
      if (alphabet.includes(letter)) {
        let letterIndex = alphabet.indexOf(letter);
        let shiftedIndex = letterIndex + shift;
        if (shiftedIndex > 25) {
          shiftedIndex += -26;
        }
        if (shiftedIndex < 0 && shiftedIndex > -25) {
          shiftedIndex += 26;
        }
        const shiftedLetter = alphabet[shiftedIndex];
        message += shiftedLetter;
      } else {
        message += letter;
      }
    }
    return message;
  }
  // console.log(caesar("Zebra Magazine", 3));
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
