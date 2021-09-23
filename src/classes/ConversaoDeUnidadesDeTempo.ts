export default class ConversaoDeUnidadesDeTempo {
  static minutosParaSegundos(minuto: number): number {
    return minuto * 60;
  }

  static horasParaMinutos(hora: number): number {
    return hora * 60;
  }

  static diasParaHoras(dia: number): number {
    return dia * 24;
  }

  static semanasParaDias(semana: number): number {
    return semana * 7;
  }

  static mesesParaDias(mes: number): number {
    return mes * 30;
  }

  static anosParaDias(ano: number): number {
    return ano * 365.25;
  }
}