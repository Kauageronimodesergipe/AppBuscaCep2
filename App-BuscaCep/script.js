
async function Pesquisar(){
    const cep = document.getElementById("input-cep").value ;
    const dados = await fetch(`https://viacep.com.br/ws/${cep}/json/`).then(Response => Response.json()) ;
    document.getElementById("Logradouro").value = dados.logradouro;
    document.getElementById("Bairro").value = dados.bairro;
    document.getElementById("Localidade").value = dados.localidade;
    document.getElementById("UF").value = dados.uf;
    document.getElementById("DDD").value = dados.ddd;
}

function Resetar(){
    document.getElementById("Logradouro").value = "";
    document.getElementById("Bairro").value = "";
    document.getElementById("Localidade").value = "";
    document.getElementById("UF").value = "";
    document.getElementById("DDD").value = "";
}
