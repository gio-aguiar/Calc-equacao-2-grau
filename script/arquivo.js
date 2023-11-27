function calcular() {
  var a = parseFloat(document.getElementById("a").value);
  var b = parseFloat(document.getElementById("b").value);
  var c = parseFloat(document.getElementById("c").value);

  // Validação para saber se o valor inserido é um número
  if (isNaN(a) || isNaN(b) || isNaN(c) || a == null || b == null || c == null) {
    alert("Por favor, preencha os campos com números.");
  } else {
    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);

    var delta = b * b - 4 * a * c;
    var x1 = (-b + Math.sqrt(delta)) / (2 * a);
    var x2 = (-b - Math.sqrt(delta)) / (2 * a);

    if (delta > 0) {
      // duas raizes reais distintas, ou seja, existe o valor de x1 e o valor de x2
      document.getElementById("resultado").innerText =
        "O valor de X1 é " +
        x1.toFixed(2) +
        ".\n E o valor de X2 é " +
        x2.toFixed(2);
    } else if (delta == 0) {
      //  exibir raiz dupla, ou seja, existe x1 e x2, mas eles são o mesmo número
      document.getElementById("resultado").innerText =
        "A equação possui raiz dupla. Ou seja, ambos X possuem o mesmo valor. Sendo assim, o valor de X é: " +
        x1.toFixed(2);
    } else {
      // delta negativo
      document.getElementById("resultado").innerText =
        "A equação nao possui raiz real.";
    }
  }
}
