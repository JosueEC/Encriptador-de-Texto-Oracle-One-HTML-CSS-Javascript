function encriptarTexto (texto) {
  let textoEncriptado = '';
  for (let i = 0; i < texto.length; i++) {
    textoEncriptado += getValor(texto[i])
  }

  return textoEncriptado;
}
  
function desencriptarTexto (texto) {
  let textoDesencriptado = '';
  for (let i = 0; i< texto.length; i++) {
    textoDesencriptado += getLlave(texto[i]);
  }

  return textoDesencriptado;
}

export {
  encriptarTexto,
  desencriptarTexto
}