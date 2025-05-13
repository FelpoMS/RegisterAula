const botao=document.getElementById('btnCadastrar');
let usuarios = [];

// adiciona um evento ao botão , com o click ele vai executar uma função.
botao.addEventListener('click',function(){ 

    const usuario= {
        login: document.getElementById('login').value,
        senha: document.getElementById('senha').value
    }
    usuarios.push(usuario);
    console.log(usuarios); 
    let listaUsuarios= JSON.stringify(usuarios);
    localStorage.setItem("usuarios",listaUsuarios);
});

function listar(){
    const listaUsuarioCad = JSON.parse(localStorage.getItem("usuarios")) || [];
    console.log(listaUsuarioCad);
    const tabelaListaUsuarios = document.getElementById('listaUsuarios');
    tabelaListaUsuarios.innerHTML='';


    listaUsuarioCad.forEach(usuario,index =>{
        const linha = document.createElement('tr');
        linha.innerHTML = 
        `
        <td>${usuarion.login}</td>
        <td>${usuarion.senha}</td>
        <td>
            <button onclick="excluirUsuario(${index})>Remover</button>
        </td>
        `;
        tabelaListaUsuarios.appendChild(linha);
    });
}

listar();