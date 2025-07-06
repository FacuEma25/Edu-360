var header = document.getElementById ('navbar');

window.addEventListener('scroll', ()=> {
    var scroll = window.scrollY

    if(scroll>20){
        header.style.backgroundColor ='#e4e0db'
        header.style.transition = '0.5s'
    } else {
        header.style.backgroundColor ='transparent'
    }
})