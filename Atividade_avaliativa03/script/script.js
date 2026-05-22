let btnAdicionar = document.querySelectorAll(".btnAdicionar");
let btnComprar = document.querySelectorAll(".btnComprar");
let ProdutosCarrinho = document.querySelector(".ProdutosCarrinho");

const formFiltro = document.getElementById("formFiltro");
const categoria = document.querySelector(".categoria");
const produtos = document.querySelectorAll(".produto");

if (formFiltro) {

    formFiltro.addEventListener("submit", (event) => {

    event.preventDefault();

    produtos.forEach(produto => {

        const valor = Number(produto.dataset.valor);

        if (categoria.value === "todos") {
            produto.style.display = "flex";
        }
        else if (categoria.value === "acima50") {
            produto.style.display = valor > 50 ? "flex" : "none";
        }
        else if (categoria.value === "abaixo50") {
            produto.style.display = valor <= 50 ? "flex" : "none";
        }
    });
});
}


const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

btnAdicionar.forEach(botao => {

    botao.addEventListener("click", () => {

        const produto = botao.closest(".produto");

        const nome = produto.querySelector("h1").innerText;
        const imagem = produto.querySelector("img").getAttribute("src");
        const preco = Number(produto.dataset.valor);

        const produtoExistente = carrinho.find(item => item.nome === nome);

        if (produtoExistente) {

            produtoExistente.quantidade++;

        } else {

            const produtoCarrinho = {
                imagem: imagem,
                nome: nome,
                quantidade: 1,
                preco: preco
            };

            carrinho.push(produtoCarrinho);
        }

        localStorage.setItem("carrinho", JSON.stringify(carrinho));

        mostrarCarrinho();

    });

});

function mostrarCarrinho() {

    if (carrinho.length === 0) {
        ProdutosCarrinho.innerHTML = `
            <div id="SemProduto">
                <h1>Sem produtos no carrinho</h1>
                <p>Adicione produtos ao seu carrinho.</p>
                <a href="index.html"><input type="submit" value="Adicionar Produtos" class="btnVoltar" id="btnVoltar"></a>
            </div>
        `;
    }

    else {

        ProdutosCarrinho.innerHTML = `
    <div class="carrinhoTotal">

        <h1 class="textTitulo">Carrinho de Compras</h1>

        <div class="listaProduto-Total">

            <div class="listaProdutos"></div>

            <div class="total">

                <h2>Resumo do pedido</h2>

                <div class="linha">
                    <p id="subTotal">Subtotal</p>

                    <p>
                        ${(carrinho.reduce((soma, produto) => {
                            return soma + (produto.preco * produto.quantidade);
                        }, 0).toFixed(2))}
                    </p>
                </div>

                <div class="linha">
                    <p id="frete">Frete</p>
                    <p id="gratuito">Grátis</p>
                </div>

                <hr>

                <div class="linha">
                    <p id="total">Total</p>

                    <p>
                        ${(carrinho.reduce((soma, produto) => {
                            return soma + (produto.preco * produto.quantidade);
                        }, 0).toFixed(2))}
                    </p>
                </div>

                <div class="botoes" id="botoesCarrinho">
                    <a href="finalizarCompra.html">
                        <input type="button" value="Finalizar Compra" class="finalizarCompra">
                    </a>

                    <a href="index.html">
                        <input type="button" value="Continuar Comprando" class="continuarCompra">
                    </a>
                </div>

            </div>

        </div>

    </div>
`;
    }


    const listaProdutos = document.querySelector(".listaProdutos");

    carrinho.forEach((produto, index) => {

        listaProdutos.innerHTML += `

            <div class="produtoCarrinho">

                <img src="${produto.imagem}" class="imgProdutoCarrinho">

                <div class="txtProdutoCarrinho">

                    <div class="infoEsquerda">

                        <h2>${produto.nome}</h2>

                        <div class="quantidade">

                            <button class="menos" data-index="${index}">-</button>

                            <span class="numero">${produto.quantidade}</span>

                            <button class="mais" data-index="${index}">+</button>

                        </div>

                    </div>

                    <div class="infoDireita">

                        <div class="Excluir">
                            <button class="excluirButton" data-index = "${index}">
                                <i class="bi bi-trash"></i>
                            </button>
                        </div>

                        <div class="preco">
                            <p>R$ ${(produto.quantidade * produto.preco).toFixed(2)}</p>
                        </div>

                    </div>

                </div>

            </div>


        `;
    });

    const btnMais = document.querySelectorAll(".mais");
    const btnMenos = document.querySelectorAll(".menos");

    btnMais.forEach(botao => {

        botao.addEventListener("click", () => {

            const index = botao.dataset.index;

            carrinho[index].quantidade++;

            localStorage.setItem("carrinho", JSON.stringify(carrinho));

            mostrarCarrinho();

        });

    });

    btnMenos.forEach(botao => {

        botao.addEventListener("click", () => {

            const index = botao.dataset.index;

            if (carrinho[index].quantidade > 1) {

                carrinho[index].quantidade--;

            } else {

                carrinho.splice(index, 1);

            }

            localStorage.setItem("carrinho", JSON.stringify(carrinho));

            mostrarCarrinho();

        });

    });

    let btnExcluir = document.querySelectorAll(".excluirButton");

    btnExcluir.forEach(botao => {
        botao.addEventListener("click", () => {

            const index = botao.dataset.index;

            carrinho.splice(index, 1);

            localStorage.setItem("carrinho", JSON.stringify(carrinho));

            mostrarCarrinho();
        });
    });

    const novaCompra = document.getElementById("btnVoltar");

    if (novaCompra) {
        novaCompra.addEventListener("click", (event) => {

            event.preventDefault();

            carrinho.length = 0;

            localStorage.setItem("carrinho", JSON.stringify([]));

            window.location.href = "index.html";

        });
    }

}

mostrarCarrinho();