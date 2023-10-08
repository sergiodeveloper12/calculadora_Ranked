// Função para calcular o nível com base nas vitórias e derrotas
function calcularNivel(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel;
  
    if (vitorias < 10) {
      nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
      nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
      nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
      nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
      nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
      nivel = "Lendário";
    } else {
      nivel = "Imortal";
    }
  
    console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}`);
  }
  
  // Função para coletar a quantidade de vitórias e derrotas do usuário
  function coletarDados() {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });
  
    readline.question('Digite a quantidade de vitórias: ', (vitorias) => {
      readline.question('Digite a quantidade de derrotas: ', (derrotas) => {
        calcularNivel(parseInt(vitorias), parseInt(derrotas));
        readline.close();
      });
    });
  }
  
  // Iniciar a coleta de dados do usuário
  coletarDados();
  