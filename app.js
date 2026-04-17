const botao = document.getElementById("botao")

const usuario = document.getElementById("usuario")


botao.addEventListener('click', function(){
    const senha = document.getElementById("senha").value
    console.log("bbbb", senha)
    if (!senha){
       alert("Campo senha não pode ser vazio") 
    
    }else{
        alert("Usuario cadastrado")
    }
})
