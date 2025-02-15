# Missão 2: O Sistema Eleitoral Secreto 📝 

#     O grêmio estudantil da escola realiza votações para decidir melhorias e inovações, 
#     mas o vírus desativou a verificação de elegibilidade para votar! Sua tarefa é criar 
#     um programa que pergunte a idade do usuário e informe se ele pode votar (mínimo: 16 anos).

def verificar_votacao(idade):
    if idade >= 16:
        return "Pode votar"
    else:
        return "Não pode votar"

idade = int(input("Digite a sua idade: "))
print(verificar_votacao(idade))