//Lê os valores de entrada
const ValorSalario = parseFloat(gets());
const ValorBeneficios = parseFloat(gets());

//Calcula o imposto através da função 'calcularImposto'
const valorImposto = calcularImposto(ValorSalario);
//Calcula e imprime a Saída (com 2 casas decimais)
const saida = ValorSalario - valorImposto + ValorBeneficios;
print(saida.toFixed(2));

//Função útil para o calculo de imposto(baseado nas aliquotas)
function calcularImposto(salario){
    let aliquota;
    if (salario >= 0 && salario <= 1000){
        aliquota = 0.05;
    }else if (salario >= 1100.01 && salario <= 2500.00){
        aliquota = 0.10 * salario;
    }else{
        aliquota = 0.15* salario;
    }
    return aliquota * salario
}