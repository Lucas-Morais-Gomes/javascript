function generatePassword() {
  const length = document.getElementById("length").value;
  const includeLowerCase = document.getElementById("lowercase").checked;
  const includeUpperCase = document.getElementById("uppercase").checked;
  const includeNumbers = document.getElementById("numbers").checked;
  const includeSymbols = document.getElementById("symbols").checked;

  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%&*()_-=";

  let allowedChars = "";
  let password = "";

  if (includeLowerCase) allowedChars += lowercaseChars;
  if (includeUpperCase) allowedChars += uppercaseChars;
  if (includeNumbers) allowedChars += numberChars;
  if (includeSymbols) allowedChars += symbolChars;

  if (length <= 0) {
    document.getElementById("passwordOutput").textContent =
      "A senha precisa ter pelo menos 1 caractere.";
    return;
  }
  if (allowedChars.length === 0) {
    document.getElementById("passwordOutput").textContent =
      "Pelo menos um tipo de caractere precisa ser selecionado.";
    return;
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  document.getElementById(
    "passwordOutput"
  ).textContent = `Senha gerada: ${password}`;
}
