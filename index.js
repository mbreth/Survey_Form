function updateCharacterCount(str) {
  let lengthOfTextArea = str.length;
  document.getElementById("charactersLeft").innerHTML =
    lengthOfTextArea + " out of 50 characters";
}
