let alunos = [];
let somaNotas = 0;
let qntd = 0;


document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();


    let nome = document.getElementById("nomeAluno").value;

    let idade = document.getElementById("idadeAluno").value;

    let nota = document.getElementById("notaAluno").value;

    let aluno = {
        nome: nome,
        idade: idade,
        nota: nota
    };

    alunos.push(aluno);

    console.log(alunos);

    qntd++;

    somaNotas += parseFloat(nota);

    atualizarTela();

    document.getElementById("form").reset();


})

function removerAlunos(index) {

    let alunoRemovido = alunos.splice(index, 1)[0];

    qntd--;

    somaNotas -= parseFloat(alunoRemovido.nota);

    atualizarTela();

}

function descricao(index) {
    let aluno = alunos[index]; 
    
    let modal = document.getElementById("modalDescricao");
    let conteudo = document.getElementById("conteudoDescricao");
    
    conteudo.innerHTML = `
        <h3>Descrição do Aluno</h3>
        Nome: ${aluno.nome}<br>
        Idade: ${aluno.idade}<br>
        Nota: ${aluno.nota}<br>
        Status: ${aluno.nota >= 6 ? "Aprovado" : "Reprovado"}<br>
    `;
    modal.style.display = "flex";
}

document.getElementById("fechar").onclick = function () {
    document.getElementById("modalDescricao").style.display = "none";
};


    function atualizarTela() {

        let resultado = document.getElementById("resultado");

        resultado.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
        resultado.style.border = "1px solid black";
        resultado.style.padding = "10px";
        resultado.style.borderRadius = "10px";
        resultado.style.boxShadow = "2px 2px 9px rgba(0, 0, 0, 0.344)";

        let texto = "";


        let aprovados = 0;
        let reprovados = 0;

        alunos.forEach(aluno => {

            if (aluno.nota >= 6) {
                aprovados++;
            } else {
                reprovados++;
            }
        });


        texto += "Total de Alunos: " + qntd + "<br>" +
            "Média da Turma: " + (somaNotas / qntd).toFixed(2) + "<br>" +
            "Aprovados: " + aprovados + "<br>" +
            "Reprovados: " + reprovados + "<br><br>";

        texto += alunos.map((item, index) => {
            return `<div>
            Aluno: ${item.nome}<br>
            Idade: ${item.idade}<br>
            Nota: ${item.nota}<br>
            Status: ${item.nota >= 6 ? "Aprovado" : "Reprovado"}<br>

            <div class="buttons">
            <button onclick="removerAlunos(${index})" class="buttonApagar">
                Remover
            </button>
            <br><br>
            <button onclick="descricao(${index})" id="descricao">
                Descrição
            </button>
            </div>

        </div>`;
        }).join("");

        resultado.innerHTML = texto;

    }
