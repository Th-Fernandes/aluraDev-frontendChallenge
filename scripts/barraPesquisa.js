import { posts } from "./codigoComunidade.js"

const barraPesquisa = {
  procurar() {
    const barra = document.querySelector('#barraPesquisa')
    //executa um evento ao digitar na barra de pesquisa
    barra.addEventListener('keydown', () => {
      const valorPesquisado = document.querySelector('#barraPesquisa').value
      
      for(let i = 0; i < posts.length; i++) {
        //procura a palavra chave em todos os posts
        const compararTitulo = posts[i].tituloPost.indexOf(valorPesquisado)
        const compararDescricao = posts[i].descricaoPost.indexOf(valorPesquisado)

        //se a palavra pesquisada for compatível com o valor pesquisado, executa o código seguinte
        if (compararTitulo > -1 || compararDescricao > -1 ) {
          //fecha o menu principal e abre o menu de posts da comunidade
          const abrirPosts = () => {
            const editor = document.querySelector('.criacao-projeto')
            editor.classList.remove('active')
    
            const comunidade = document.querySelector('.projetosComunidade')
            comunidade.classList.add('active')
          }

          abrirPosts()

        }
      }
    })
  },  
}

export { barraPesquisa }