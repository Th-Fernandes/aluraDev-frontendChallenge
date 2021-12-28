const menu = {
  mostrarComunidade() {
    const botoes = [
      document.querySelector('#comunidadeOpcao'),
      document.querySelector('#mobile-comunidadeOpcao')
    ]

    for(let botao of botoes) {
      botao.addEventListener('click', () => {
        const editor = document.querySelector('.criacao-projeto')
        editor.classList.remove('active')
  
        const comunidade = document.querySelector('.projetosComunidade')
        comunidade.classList.add('active')
  
      })
    }
  },

  mostrarEditor() {

    const botoes = [
      document.querySelector('#editorCodigo'),
      document.querySelector('#mobileEditorCodigo')
    ]

    for(let botao of botoes) {
      botao.addEventListener('click', () => {
        const comunidade = document.querySelector('.projetosComunidade')
        comunidade.classList.remove('active')
  
        const editor = document.querySelector('.criacao-projeto')
        editor.classList.add('active')
  
        })
    }
    }
}

const menuMobile = {
  abrir() {
    const menuButton = document.querySelector('#mobilePerfil')

    menuButton.addEventListener('click', () => {
      const mobileMenu = document.querySelector('.mobile-menu')
      mobileMenu.classList.toggle('active')
      //se houver mais de uma classe, troca o botao de abrir menu por um botao de fechar menu
      if(mobileMenu.classList.length > 1) {
        menuButton.innerHTML = `<img src='./images/mobile-fechar-menu.svg'>`
      }
      else {
        menuButton.innerHTML = `<img src='../images/mobile-menu.svg'>`
      }
    })
  }
}

export { menu, menuMobile }