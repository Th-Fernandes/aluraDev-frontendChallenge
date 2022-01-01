const comunidade = {
  postarCodigo(codigo) {
    const listaCodigos = document.querySelector('#codigosComunidade')

    const itemLista = document.createElement('li')
    itemLista.classList.add('codigo-comunidade')

    itemLista.innerHTML = `
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
    `

    listaCodigos.prepend(itemLista)
    //pra adicionar o hover ao adicionar novos posts
    this.dadosHover()
    this.posts()
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

class Post {
  constructor({tituloPost, descricaoPost}) {
    this.tituloPost = tituloPost
    this.descricaoPost = descricaoPost
  }
}

const posts = []


export {comunidade, Post, posts}