import Produto from "./classes/Produto";
import ConversaoDeTempo from "./classes/ConversaoDeUnidadesDeTempo";
import Funcionario from "./classes/Funcionario";

console.log();

try {
  // Questão 1
  const produto = new Produto({
    nome: "Caneta",
    preco: 10,
    quantidade: 100,
  });

  console.log(
    "Questão 1:",
    `O produto ${produto.nome} de preço ${produto.preco}, quantidade comprada de ${produto.quantidade} e teve desconto de ${produto.desconto} e o valor pago foi de ${produto.valorTotalComDesconto}`
  );

  // Questão 2
  console.log("Questão 2:", {
    "1 minuto": ConversaoDeTempo.minutosParaSegundos(1) + " segundos",
    "1 hora": ConversaoDeTempo.horasParaMinutos(1) + " minutos",
    "1 dia": ConversaoDeTempo.diasParaHoras(1) + " horas",
    "1 semana": ConversaoDeTempo.semanasParaDias(1) + " dias",
    "1 mês": ConversaoDeTempo.mesesParaDias(1) + " dias",
    "1 ano": ConversaoDeTempo.anosParaDias(1) + " dias",
  });

  // Questão 3
  const funcionario = new Funcionario({
    nome: "João",
    salarioHora: 40,
    diasTrabalhados: 20,
    totalFaltas: 2,
  });

  console.log('Questão 3:')

  console.log(
    `O funcionário de nome ${funcionario.nome} tem o salário bruto de ${funcionario.salarioBruto} teve ${funcionario.totalFaltas} falta(s) e sua PLR foi de ${funcionario.plr}.`
  );

  console.log(
    `O funcionário de nome ${funcionario.nome} tem o salário bruto de ${funcionario.salarioBruto}, o desconto de ${funcionario.desconto}, a PLR de ${funcionario.plr} e o salário líquido de ${funcionario.salarioLiquido}.`
  );

} catch (error) {
  const message = (error as Error).message;
  console.log(message);
}
