function calcularNotas() {
    const nota1 = parseFloat(document.getElementById("nota1").value) || 0;
    const nota2 = parseFloat(document.getElementById("nota2").value) || 0;
  
    const media = (nota1 + nota2) / 2;
    const resultadoDiv = document.getElementById("resultado");
  
    let mensagem = `Média: ${media.toFixed(2)}<br>`;
  
    if (media >= 7) {
      mensagem += "<strong>APROVADO</strong>";
    } else if (media < 4) {
      mensagem += "<strong>REPROVADO</strong>";
    } else {
      const necessario = (10 - media).toFixed(2);
      mensagem += `<strong>PRECISA DE ${necessario} NA PROVA FINAL</strong>`;
    }
  
    resultadoDiv.innerHTML = mensagem;
  }
  
  document.getElementById("calcularBtn").addEventListener("click", calcularNotas);
  