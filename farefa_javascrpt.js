function mostrar(texto) {
  const r = document.getElementById("resultado");
  r.style.display = "block";
  r.innerHTML = texto + "<br><button onclick='limpar()'>🔙 Voltar</button>";
  r.scrollIntoView({ behavior: "smooth" });
}

function limpar() {
  document.getElementById("resultado").style.display = "none";
}

function ex1() {
  let n1 = parseFloat(prompt("Digite o primeiro número:"));
  let n2 = parseFloat(prompt("Digite o segundo número:"));
  let res = n2 > n1 ? n1 + n2 : n1 - n2;
  mostrar(`<h3>Resultado:</h3>${res}`);
}

function ex2() {
  let salario = parseFloat(prompt("Digite o salário:"));
  let idade = parseInt(prompt("Digite a idade:"));
  let liquido = idade % 2 === 0 ? salario * 1.1 : salario * 0.9;
  mostrar(`<h3>Salário e Idade</h3>
  Idade: ${idade}<br>
  Salário Bruto: R$ ${salario.toFixed(2)}<br>
  Salário Líquido: R$ ${liquido.toFixed(2)}`);
}

function ex3() {
  let n1 = parseFloat(prompt("Primeiro número:"));
  let n2 = parseFloat(prompt("Segundo número:"));
  let op = prompt("Operador (+, -, * ou /):");
  let r;
  switch (op) {
    case "+":
      r = n1 + n2;
      break;
    case "-":
      r = n1 - n2;
      break;
    case "*":
      r = n1 * n2;
      break;
    case "/":
      r = n1 / n2;
      break;
    default:
      r = "❌ Operador inválido.";
  }
  mostrar(`<h3>Resultado:</h3>${r}`);
}

function ex4() {
  let n = parseInt(prompt("Digite um número:"));
  let texto = `<h3>Tabuada do ${n}</h3>`;
  for (let i = 1; i <= 10; i++) {
    let r = n * i;
    let cor = r % 2 === 0 ? "blue" : "red";
    texto += `<span style='color:${cor}; font-weight:bold;'>${n} x ${i} = ${r}</span><br>`;
  }
  mostrar(texto);
}

function ex5() {
  let n1 = parseInt(prompt("Primeiro número:"));
  let n2 = parseInt(prompt("Segundo número:"));
  let texto = `<h3>Números pares entre ${n1} e ${n2}:</h3>`;
  for (let i = n1; i <= n2; i++) {
    if (i % 2 === 0) texto += i + "<br>";
  }
  mostrar(texto);
}

function ex6() {
  let n1 = parseInt(prompt("Primeiro número:"));
  let n2 = parseInt(prompt("Segundo número:"));
  let soma = 0,
    mult = 1;
  for (let i = n1; i <= n2; i++) {
    if (i % 2 === 0) soma += i;
    else mult *= i;
  }
  mostrar(`<h3>Resultados:</h3>
  Soma dos pares: ${soma}<br>
  Multiplicação dos ímpares: ${mult}`);
}
