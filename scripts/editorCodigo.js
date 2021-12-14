const editor = {
  alterarCor() {
    const inputCor = document.querySelector('#corProjeto')

   inputCor.addEventListener('change', () => {
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
      const linguagemProjeto = document.querySelector('#linguagemProjeto').value 

      return {titulo, descricao, linguagemProjeto}
    })
  }
}


export {editor}