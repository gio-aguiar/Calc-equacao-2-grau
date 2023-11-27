function calcular() {
  var a = parseFloat(document.getElementById("a").value);
  var b = parseFloat(document.getElementById("b").value);
  var c = parseFloat(document.getElementById("c").value);

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert("Por favor, preencha os campos com números.");
  } 

  else if (a == 0 || b == 0 || c == 0) {alert ("Todos os números precisam ser maiores do que zero, caso contrário, a equação se torna de 1º grau.")}

  else {

    var delta = b * b - 4 * a * c;
    var x1 = (-b + Math.sqrt(delta)) / (2 * a);
    var x2 = (-b - Math.sqrt(delta)) / (2 * a);

    if (delta > 0) {
      // duas raizes reais distintas, ou seja, existe o valor de x1 e o valor de x2
      document.getElementById("resultado").innerText = "Δ = b²-4.a.c \n  Δ = " + delta.toFixed() + "\n \n Cálculo do X1: " + b.toFixed() + " + " + "√" + delta.toFixed() + " / 2." + a.toFixed() + "\n X1 = " + x1.toFixed(2) +  "\n \n Cálculo do X2: " + b.toFixed() + " - " + "√" + delta.toFixed() + " / 2." + a.toFixed() + ".\n X2 = " + x2.toFixed(2);
    } else if (delta == 0) {
      //  exibir raiz dupla, ou seja, existe x1 e x2, mas eles são o mesmo número
      document.getElementById("resultado").innerText = " Δ = " + delta.toFixed() +
        "A equação possui raiz dupla. Ou seja, ambos X possuem o mesmo valor. Sendo assim, o valor de X1 e X2 é: " +
        x1.toFixed(2);

    } else {
      // delta negativo
      document.getElementById("resultado").innerText = " Δ = " + delta.toFixed() +
        "\n A equação não possui raiz real.";
    }
    
  }
}
