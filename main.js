import { barraPesquisa } from './scripts/barraPesquisa.js'
import { comunidade } from './scripts/codigoComunidade.js'
import { editor } from './scripts/editorCodigo.js'
import { menu, menuMobile } from './scripts/menuOptions.js'

menu.mostrarComunidade()
menu.mostrarEditor()
menuMobile.abrir()

editor.alterarCor()
editor.dados()
editor.visualizarHighlight()

comunidade.dadosHover()

barraPesquisa.procurar()