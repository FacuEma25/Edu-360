const header = document.querySelector ('.menu');

window.addEventListener('scroll', ()=> {
    const scroll = window.scrollY

    if(scroll>20){
        header.style.backgroundColor ='#171211'
        header.style.transition = '0.5s'
    } else {
        header.style.backgroundColor ='transparent'
    }
})