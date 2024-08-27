
// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
  const inputTextArea = document.getElementById('input-text');
  const outputTextArea = document.getElementById('output-text');
  const encryptButton = document.getElementById('encrypt-btn');
  const decryptButton = document.getElementById('decrypt-btn');
  const resultImage = document.getElementById('result-image');

  // Función para encriptar texto
  function encryptText(text) {
    let encryptedText = '';
    for (let char of text) {
      encryptedText += String.fromCharCode(char.charCodeAt(0) + 3); // Ejemplo de encriptación simple
    }
    return encryptedText;
  }

  // Función para desencriptar texto
  function decryptText(text) {
    let decryptedText = '';
    for (let char of text) {
      decryptedText += String.fromCharCode(char.charCodeAt(0) - 3); // Reversión de la encriptación simple
    }
    return decryptedText;
  }

  // Función para mostrar la imagen correspondiente
  function showImage(imageSrc) {
    resultImage.src = imageSrc;
    resultImage.style.display = 'block';
  }

  // Event Listener para encriptar el texto
  encryptButton.addEventListener('click', () => {
    const inputText = inputTextArea.value;
    if (inputText.trim() !== '') {
      const encrypted = encryptText(inputText);
      outputTextArea.value = encrypted;
      showImage('IMG/Encriptado.jpeg'); // Cambia por la ruta de tu imagen de encriptación
    } else {
      alert('Por favor, ingresar algún texto para encriptar.');
    }
  });

  // Event Listener para desencriptar el texto
  decryptButton.addEventListener('click', () => {
    const inputText = inputTextArea.value;
    if (inputText.trim() !== '') {
      const decrypted = decryptText(inputText);
      outputTextArea.value = decrypted;
      showImage('IMG/Desencriptado.jpeg'); // Cambia por la ruta de tu imagen de desencriptación
    } else {
      alert('Por favor, ingresar algún texto para desencriptar.');
    }
  });
});
