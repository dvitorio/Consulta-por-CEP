let cep = document.getElementById("cep");
let rua = document.getElementById("rua");
let bairro = document.getElementById("bairro");
let cidade = document.getElementById("cidade");
let estado = document.getElementById("estado");
const btnClose = document.getElementById("btnClose");

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

/** CLEAN UP FORM FIELDS (LIMPA OS CAMPOS DO FORMULÁRIO)*/
const btnCleanFields = document.getElementById("btnCleanFields");
btnCleanFields.onclick = ()=>{
     cep.value = "";
     rua.value = "";
     bairro.value = "";
     complemento.value = "";
     ddd.value = "";
     cidade.value = "";
     estado.value = "";
}


/**CLOSE APPLICATION (FECHA A APLICAÇÃO) */
document.getElementById("btnClose").onclick = ()=>{
     window.close('https://danielbuscacep.netlify.app');
};

