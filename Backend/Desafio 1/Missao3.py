# Missão 3: Recuperando o Sistema de Notas 📊
# As classificações das provas desapareceram! 
# Agora os alunos não sabem se tiraram um A, B, C, D ou F. Antes que o pânico se espalhe, 
# sua tarefa é criar um programa que peça a nota do aluno e imprima sua 
# classificação conforme a escala:

# - A (90-100) – "Parabéns, você tirou A!"
# - B (80-89) – "Muito bem, você tirou B."
# - C (70-79) – "Bom trabalho, você tirou C."
# - D (60-69) – "Fique atento, você tirou D."
# - F (menos de 60) – "Estude um pouco mais, você tirou F."

def Nota_Aluno(nota):
    if nota >= 90 and nota <= 100:
        return "Parabéns, você tirou A!"
    elif nota >= 80 and nota <= 89:
        return "Muito bem, você tirou B."
    elif nota >= 70 and nota <= 79:
        return "Bom trabalho, você tirou C."
    elif nota >= 60 and nota <= 69:
        return "Fique atento, você tirou D."
    else:
        return "Estude um pouco mais, você tirou F."

input_nome = input("Digite seu nome: ")
input_nota = float(input("Digite a nota do aluno: "))
print(f"{input_nome}, {Nota_Aluno(input_nota)}")