# Missão 10: Contando Letras 🔄
# O sistema precisa contar quantas letras há em um nome.

#     ➡️ Crie uma função que receba um nome e diga quantas letras esse nome tem.
#     ➡️ Exemplo: contar_letras("Ana")
#     ➡️ Saída:" O nome Ana tem 3 letras"

def contar(nome):
    return len(nome)

Nome_cliente = input("digite um nome:")
print(f"o nome {Nome_cliente} tem {contar(Nome_cliente)} letras")