
 let PegarUsuarios=async()=>{
    try{
    const resposta = await fetch('https://jsonplaceholder.typicode.com/users'); //Pega Resposta da API
    const dados = await resposta.json(); //Transforma A resposta em Array
     //Filtra os Usuarios e Busca mais de um Com virgula.
    const FiltrarUsuarios=document.getElementById("input").value.toLowerCase().split(',').map(usuario => usuario.trim());
        //Pega os Usuarios Filtrados e Valida
    const UsuariosFiltrados=dados.filter(usuario =>{
       return FiltrarUsuarios.some(termo =>{
        if(termo === "") return true;
        return usuario.name.toLowerCase().includes(termo);
       })
    })
    //
        //Cria os Cards Organizados lado a lado
    const nomes=UsuariosFiltrados.map(usuario=>`
        <div class="card">
        <img src="https://robohash.org/${usuario.name}" alt="Foto de ${usuario.name}">
            <h3>${usuario.name}</h3>
            <p>${usuario.email}</p>
        </div>
    `);
     //Mostra o Resultado na tela!
    let MostrarDados=document.getElementById('resultado');
    MostrarDados.innerHTML=nomes.join('');
    // Se der erro de codigo ou Sistema fora do Ar Retorna ERRO!
}catch(Erro){
    console.log("Deu Erro");
    document.getElementById("resultado").innerHTML="Ops..Esta fora do Ar";
    alert("Esta fora do Ar!");
}}

 //