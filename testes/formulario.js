function ValidaFormulario() {
    const nome = document.getElementById("nome")
    const email = document.querySelector("#email")
    const senha = document.getElementById("senha")

    // Validação dos campos preenchidos
    if(nome === '' || email === '' || senha === ''){
        alert('Por favor, preencha os campos vazios!')
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(!emailRegex.test(email)){
        alert("Por favor, insira em email válido")
    }

    // Validação da senha
    if(senha.length > 8){
        alert("Limite de caracteres excedido!")
    }


}