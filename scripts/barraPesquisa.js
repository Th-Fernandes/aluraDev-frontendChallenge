import { posts } from "./codigoComunidade.js"

const barraPesquisa = {
  procurar() {
    const barra = document.querySelector('#barraPesquisa')
    barra.addEventListener('keydown', () => {
      const valorPesquisado = document.querySelector('#barraPesquisa').value
      
      for(let i = 0; i < posts.length; i++) {
        const pesquisarResultado = posts[i].tituloPost.indexOf(valorPesquisado)

        if (pesquisarResultado > -1 ) {
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