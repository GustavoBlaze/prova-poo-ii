interface IProdutoConstructor {
  nome: string;
  preco: number;
  quantidade: number;
}

export default class Produto {
  private _nome: string = "";
  private _preco: number = 0;
  private _quantidade: number = 0;

  constructor({ nome, preco, quantidade }: IProdutoConstructor) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }

  public get nome(): string {
    return this._nome;
  }

  public set nome(value: string) {
    if (!value) {
      throw new Error("O nome não pode ser vazio");
    }

    this._nome = value;
  }

  public get preco(): number {
    return this._preco;
  }

  public set preco(value: number) {
    if (value <= 0) {
      throw new Error("O preço não pode ser menor ou igual a zero");
    }

    this._preco = value;
  }

  public get quantidade(): number {
    return this._quantidade;
  }

  public set quantidade(value: number) {
    if (value <= 0) {
      throw new Error("A quantidade não pode ser menor ou igual a zero");
    }

    this._quantidade = value;
  }

  /*
    Até 10 unidades: não tem desconto
    de 11 a 20 unidades: 10% de desconto
    de 21 a 50 unidades: 20% de desconto
    acima de 50 unidades: 25% de desconto
  */

  public get desconto(): number {
    if (this.quantidade <= 10) {
      return 0;
    } else if (this.quantidade <= 20) {
      return this.preco * this.quantidade * 0.1;
    } else if (this.quantidade <= 50) {
      return this.preco * this.quantidade * 0.2;
    } else {
      return this.preco * this.quantidade * 0.25;
    }
  }

  public get valorTotal(): number {
    return this.preco * this.quantidade;
  }

  public get valorTotalComDesconto(): number {
    return this.valorTotal - this.desconto;
  }
}
