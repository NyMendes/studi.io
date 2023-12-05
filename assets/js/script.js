var $menu = document.querySelector('.box-perg '),
  $menuContent = document.querySelector('.box-perg .conteudo-perg')

$menu.addEventListener(
  'click',
  function (event) {
    if (event.target == $menuContent) return // Para evitar fechar o menu quando clicar no 'conteúdo'.

    $menuContent.classList.toggle('active')
  },
  false
)
if ($menuContent.classList.contains('active')) {
  // Está aberto.
} else {
  // Está fechado.
}
