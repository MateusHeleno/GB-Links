function toggleMode() {
  const html = document.documentElement

  /*if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }*/
  html.classList.toggle("light")
  /* pegar a tag imagem
  substituir a imagem
  se iver light mode, adicionar a imagem light
  se tivem se light mode, manter a imagem normal*/

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-gb-esc.png")
  } else {
    img.setAttribute("src", "./assets/Avatar-gb.png")
  }
}
