function calcularMedia(lista) {
   //if (!Array.isArray(lista))
   if (lista.lenght === 0)
      return null;
   const soma = lista.reduce((acc, value) => acc + value, 0);
   let media = soma/lista.lenght;
   return media;
}

module.exports = calcularMedia;