# Missão 4: Restaurando a Identificação de Números ⚖️
# Os robôs da escola precisam identificar padrões numéricos para resolver cálculos e 
# otimizar os sistemas. No entanto, o vírus bagunçou os algoritmos e agora eles não conseguem 
# mais somar corretamente!

#     Crie um programa que peça dois números ao usuário e exiba a soma deles.

def Soma(n1 , n2):
    return n1 + n2

input_n1 = float(input("Digite o primeiro número: "))
input_n2 = float(input("Digite o segundo número: "))

print(f"A soma dos números é: {Soma(input_n1, input_n2)}")