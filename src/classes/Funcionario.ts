/*
Crie uma classe de Funcionários com os atributos nome, salario hora, dias
trabalhados, total de faltas no ano. Crie os getters e setters.
*/

interface IFuncionario {
  nome: string;
  salarioHora: number;
  diasTrabalhados: number;
  totalFaltas: number;
}

export default class Funcionario {
  private _nome: string = "";
  private _salarioHora: number = 0;
  private _diasTrabalhados: number = 0;
  private _totalFaltas: number = 0;

  constructor({
    nome,
    salarioHora,
    diasTrabalhados,
    totalFaltas,
  }: IFuncionario) {
    this.nome = nome;
    this.salarioHora = salarioHora;
    this.diasTrabalhados = diasTrabalhados;
    this.totalFaltas = totalFaltas;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(value: string) {
    if (!value) {
      throw new Error("Nome não pode ser vazio");
    }

    this._nome = value;
  }

  get salarioHora(): number {
    return this._salarioHora;
  }

  set salarioHora(value: number) {
    if (value <= 0) {
      throw new Error("Salário inválido");
    }

    this._salarioHora = value;
  }

  get diasTrabalhados(): number {
    return this._diasTrabalhados;
  }

  set diasTrabalhados(value: number) {
    if (value < 0) {
      throw new Error("Dias trabalhados inválidos");
    }
    this._diasTrabalhados = value;
  }

  get totalFaltas(): number {
    return this._totalFaltas;
  }

  set totalFaltas(value: number) {
    if (value < 0) {
      throw new Error("Total de faltas inválido");
    }
    this._totalFaltas = value;
  }

  get salarioBruto(): number {
    return this.salarioHora * this.diasTrabalhados * 8;
  }

  /*
  Crie um método para calcular a PLR. Se o numero de faltas for igual a zero a PLR
  será igual ao salário bruto. Se o número de faltas for igual a 1 a PLR será 94% do
  salário bruto. Se o número de faltas for igual a 2 a PLR será 92% do salário bruto.
  Se o número de faltas for igual a 3 a PLR será 90% do salário bruto. se o número de
  faltas for igual a 4 a PLR será 88% do salário bruto. Se o número de faltas for maior
  ou igual a 5 a PLR será zero.
  */

  get plr(): number {
    if (this.totalFaltas === 0) {
      return this.salarioBruto;
    } else if (this.totalFaltas === 1) {
      return this.salarioBruto * 0.94;
    } else if (this.totalFaltas === 2) {
      return this.salarioBruto * 0.92;
    } else if (this.totalFaltas === 3) {
      return this.salarioBruto * 0.9;
    } else if (this.totalFaltas === 4) {
      return this.salarioBruto * 0.88;
    } else if (this.totalFaltas >= 5) {
      return 0;
    }

    return 0;
  }

  // Crie um método para calcular o desconto que será 5% do salário bruto.

  get desconto(): number {
    return this.salarioBruto * 0.05;
  }

  // Crie um método para calcular o salário liquido. Salario bruto - desconto + PLR.
  get salarioLiquido(): number {
    return this.salarioBruto - this.desconto + this.plr;
  }
}
