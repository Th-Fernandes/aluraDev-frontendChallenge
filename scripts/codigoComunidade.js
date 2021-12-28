const comunidade = {
  postarCodigo(codigo) {
    const listaCodigos = document.querySelector('#codigosComunidade')

    listaCodigos.innerHTML += `
    <li class="codigo-comunidade">
            <div class="codigo-content" style="border: 2.5rem solid ${codigo.corBorda}">
              <header class="botoes-mac">
                <img src="./images/mac-red.svg" alt="" />
                <img src="./images/mac-yellow.svg" alt="" />
                <img src="./images/mac-green.svg" alt="" />
              </header>

              <pre>
                <code id="areaCodigo"> 
  ${codigo.codigo}
                </code>
              </pre>
            </div>

            <div class="projeto-dados">
              <article>
                <h2 class="projeto-titulo">${codigo.titulo}</h2>

                <p class="projeto-descricao">
                  ${codigo.descricao}
                </p>
              </article>

              <div class="projeto-social">
                <div class="projeto-interacoes">
                  <span class="comentarios">
                    <img
                      src="./images/coments.svg"
                      alt="quantidade de comentários"
                    />
                    <p>9</p>
                  </span>

                  <span class="likes">
                    <img
                      src="./images/likes.svg"
                      alt="quantidade de curtidas"
                    />
                    <p>12</p>
                  </span>
                </div>

                <div class="projeto-autor">
                  <img src="./images/foto-perfil.svg" alt="" />
                  <span class="autor-tag">@Harry</span>
                </div>
              </div>
            </div>
          </li>
    `
    //pra adicionar o hover ao adicionar novos posts
    this.dadosHover()
    this.posts()
  },
  //responsável por alterar a direção da coluna do elemento pai dos posts, a depender da quantidade de filhos
  estiloPosts() {
      const posts = document.querySelector('#codigosComunidade').children 
      
      if(posts.length % 2 == 0 ) {
             console.log('é par')
          }
      
      else {
          console.log('é impar')
      }
  },

  dadosHover() {
    const post = document.querySelectorAll('.projeto-social')

    for(let interacoes of post) {
      interacoes.addEventListener('mouseover', () => {
        interacoes.classList.add('active')
      })
  
      interacoes.addEventListener('mouseout', () => {
        interacoes.classList.remove('active')
      })
    } 
  },

  posts() {
    const posts = document.querySelector('#codigosComunidade')

    return posts.children
  }
}

export {comunidade}