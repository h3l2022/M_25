"use strict";

function funcaoMuitoPessada() {
  var execucoes = 0;
  for (var i = 0; i < 1000000000; i++) {
    execucoes++;
  }
  return execucoes;
}
var funcaoMuitoPesadaPromise = new Promise(function (resolve, reject) {
  try {
    var execucoes = 0;
    for (var i = 0; i < 1000000000; i++) {
      execucoes++;
    }
    resolve(execucoes);
  } catch (e) {
    reject('Deu erro na interção dos numeros');
  }
});
console.log("inicio");
funcaoMuitoPesadaPromise.then(function (resultado) {
  return console.log(resultado);
});
// console.log(funcaoMuitoPessada());
console.log("fim");