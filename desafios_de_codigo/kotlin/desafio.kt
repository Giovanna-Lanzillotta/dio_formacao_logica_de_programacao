object ReceitaFederal {
    fun calcularImpostos(salario: Double):Double {
        val aliquota = when {
            (salario >= 0 && salario <= 1000) -> 0.05
            (salario >= 1100.01 && salario <= 2500.00) -> 0.10
            else -> 0.15
        }
        return aliquota * salario
    }

    fun main(){
        val valorSalario = readLine()!!.toDouble();
        val valorBeneficio = readLine()!!.toDouble();

        val valorImposto = ReceitaFederal.calcularImpostos(valorSalario);
        val saida = valorSalario - valorImposto + valorBeneficio;

        println(String.format("%2.f",saida))
    }
}