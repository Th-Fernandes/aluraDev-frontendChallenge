const menu = {
  mostrarComunidade() {
    const botaoComunidade = document.querySelector('#comunidadeOpcao')

    botaoComunidade.addEventListener('click', () => {
      const editor = document.querySelector('.criacao-projeto')
      editor.classList.remove('active')

      const comunidade = document.querySelector('.projetosComunidade')
      comunidade.classList.add('active')

    })
  },

  mostrarEditor() {
    const botaoComunidade = document.querySelector('#editorCodigo')

    botaoComunidade.addEventListener('click', () => {
      const comunidade = document.querySelector('.projetosComunidade')
      comunidade.classList.remove('active')

      const editor = document.querySelector('.criacao-projeto')
      editor.classList.add('active')

      })
    }
}

export {menu}