interface ICalcularIdade {
  nome: string;
  anoNascimento: number;
  profissao?: string;
}
function calcularIdade({
  nome,
  anoNascimento,
  profissao,
}: ICalcularIdade): string {
  const idade: number = 2023 - anoNascimento;
  if (profissao) {
    return `seu nome e ${nome}, voce tem ${idade} anos e sua profissao e ${profissao}`;
  }
  return `seu nome e ${nome}, voce tem ${idade}`;
}

const nome = "Caio";
const anoNascimento = 1995;
const profissao = "stag";

console.log(calcularIdade({ nome, anoNascimento }));
console.log(calcularIdade({ nome, anoNascimento, profissao }));
