let cep = document.getElementById("cep");
let rua = document.getElementById("rua");
let bairro = document.getElementById("bairro");
let cidade = document.getElementById("cidade");
let estado = document.getElementById("estado");

cep.addEventListener('blur', function(e){
     let cep = e.target.value;
     let script = document.createElement('script');
     script.src = `https://viacep.com.br/ws/${cep}/json/?callback=addFields`;
     document.body.appendChild(script);
});

function addFields(response){

     if("erro" in response){
          alert("CEP não encontrado!");
          return;
     }

     console.log(response);
     rua.value = response.logradouro;
     bairro.value = response.bairro;
     complemento.value = response.complemento;
     ddd.value = response.ddd;
     cidade.value = response.localidade;
     estado.value = response.uf;
}
