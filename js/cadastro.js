const botao=document.getElementById('btnCadastrar');

botao.addEventListener('click',function(){

    const usuario= {
        login: document.getElementById('login').value,
        senha: document.getElementById('senha').value
    }
    let usuarios = [];
    usuarios.push(usuario);
    console.log(usuarios); 
    let listaUsuarios= JSON.stringify(usuarios);
    localStorage.setItem("usuarios",listaUsuarios);
});