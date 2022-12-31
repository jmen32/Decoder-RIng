// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    const standardAlph = "abcdefghijklmnopqrstuvwxyz";
    if (!alphabet || alphabet.length < 26 || alphabet.length > 26) return false;
    let encryptionKeys = {};
    for (let i = 0; i < 26; i++) {
      if (Object.values(encryptionKeys).includes(alphabet[i])) return false;
      else {
        encryptionKeys[standardAlph[i]] = alphabet[i];
      }
    }
    let result = input
      .toLowerCase()
      .split("")
      .map((letter) => {
        if (letter == " ") {
          return " ";
        }
        for (const element in encryptionKeys) {
          let substitutionLetter = encryptionKeys[element];
          if (encode === true && letter == element) {
            return substitutionLetter;
          }
          if (encode === false && letter == substitutionLetter) {
            return element;
          }
        }
      });
    return result.join("");
  }
  // console.log(substitution("message", "plmoknijbuhvygctfxrdzeswaq"));
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
