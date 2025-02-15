# Missão 1: Restaurando as Regras Escolares 📝 

#     O vírus apagou os critérios de aprovação dos alunos! 
#     Para ajudar o Professor Byte a organizar o sistema, 
#     sua tarefa é criar um programa que verifique se um aluno 
#     foi aprovado (nota maior ou igual à 6) 
#     ou reprovado (nota menor ou igual à 5).

def verificar_aprovacao(nota):
    if nota >= 6:
        return "Aprovado"
    else:
        return "Reprovado"

nota = float(input("Digite a nota do aluno: "))
print(verificar_aprovacao(nota))
