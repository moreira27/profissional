function toggleMode(){
    const html = document.documentElement

   /* if(html.classList.contains('light')){
    html.classList.remove('light')
}else{
    html.classList.add('light')
}*/
html.classList.toggle('light')

//pegar a teg img
const img = document.querySelector("#profile img")

//subistituir imagem
if (html.classList.contains("light")){
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./AXETS/avatar.png")
}else{
    //se tiver sem light mude, manter a imagem normal
    img.setAttribute("src", "./AXETS/avatar-light.png")
}
}