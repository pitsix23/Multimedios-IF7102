let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus";

function contarLetras(parrafo) {
  const letras = {};
  const texto = parrafo.replace(/\s/g, '').toLowerCase();
  for (let letra of texto) {
    if (letras[letra]) {
      letras[letra]++;
    } else {
      letras[letra] = 1;
    }
  }
  return letras;
}
const resultado = contarLetras(par);
console.log(resultado);