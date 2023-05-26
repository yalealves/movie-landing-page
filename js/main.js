const playButtonElement = document.querySelector('button.play')
const trailerButtonElement = document.querySelector('button.trailer')

playButtonElement.addEventListener('click', function(){
    window.open('https://github.com/yalealves/movie-landing-page', '_blank');
})

trailerButtonElement.addEventListener('click', function(){
    window.open('https://www.youtube.com/watch?v=VBdmGK4wxzQ', '_blank');
})