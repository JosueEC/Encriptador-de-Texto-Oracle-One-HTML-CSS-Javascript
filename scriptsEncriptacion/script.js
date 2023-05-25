/*
- Llaves de Encriptacion:
    La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "a" es convertida para "ai"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat"
*/

function getValor (letra) {
  const llavesEncriptacion = {
    a: 'ai',
    e: 'enter',
    i: 'imes',
    o: 'ober',
    u: 'ufat'
  };

  return llavesEncriptacion[letra] || letra;
}
  
function getLlave (letra) {
  const llavesDesencriptacion = {
    ai: 'a',
    enter: 'e',
    imes: 'i',
    ober: 'o',
    ufat: 'u'
  };

  return llavesDesencriptacion[letra] || letra;
}

function encriptarTexto (texto) {
  let textoEncriptado = '';
  for (let i = 0; i < texto.length; i++) {
    textoEncriptado += getValor(texto[i])
  }

  return textoEncriptado;
}

function desencriptarTexto (texto) {
  let textoDesencriptado = texto.replace('ai', 'a').replace('enter', 'e').replace('imes', 'i').replace('ober', 'o').replace('ufat', 'u');
  
  return textoDesencriptado;
}

const botonEncriptar = document.getElementById('encriptar');
const textAreaEncriptar = document.getElementById('textoEncriptar')

const botonDesencriptar = document.getElementById('desencriptar')
const textAreaDesencriptar = document.getElementById('textoDesencriptar')

botonEncriptar.addEventListener('click', (event) => {
  const textoEncriptar = textAreaEncriptar.value;
  alert(encriptarTexto(textoEncriptar));
})

botonDesencriptar.addEventListener('click', (event) => {
  const textoDesencriptar = textAreaDesencriptar.value;
  alert(desencriptarTexto(textoDesencriptar));
})
