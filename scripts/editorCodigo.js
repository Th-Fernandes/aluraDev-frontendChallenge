import { comunidade } from "./codigoComunidade.js"

const editor = {
  alterarCor() {
    const inputCor = document.querySelector('#corProjeto')

   inputCor.addEventListener('input', () => {
    const corEditor = document.querySelector('.codigo-usuario')
    corEditor.style.border = `solid 3.2rem ${inputCor.value}` 
   })
  },

  dados() {
    const guardarDados = document.querySelector('#salvarProjeto')

    guardarDados.addEventListener('click', (event) => {
      event.preventDefault()

      const titulo = document.querySelector('#nomeProjeto').value
      const descricao = document.querySelector('#descricaoProjeto').value 
      const codigo = document.querySelector('#areaCodigo').textContent
      const corBorda = document.querySelector('#corProjeto').value

      const dadosProjeto = {titulo, descricao, codigo, corBorda}

      comunidade.postarCodigo(dadosProjeto)

      comunidade.estiloPosts()
    })
  },

  visualizarHighlight() {
    const botaoHighlight = document.querySelector('#highlight')
    botaoHighlight.addEventListener('click', () => {
      const codigo = document.querySelector('#areaCodigo')
      codigo.classList.remove('nohighlight')
      hljs.highlightAll()
    })
  }
}


export {editor}