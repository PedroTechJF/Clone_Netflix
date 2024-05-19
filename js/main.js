const perguntas = document.querySelector('.perguntas')
const respostas = document.querySelectorAll('.resposta')

function fecharResposta(clickedButton, respostaField) {
    clickedButton.classList.remove('perguntaAtiva')
    clickedButton.classList.add('perguntaDesativada')
    respostaField.style.animation = 'fecharResposta 200ms'
    setTimeout(() => {
        respostaField.removeAttribute('style')
        clickedButton.classList.remove('perguntaDesativada')
    }, 200)
}

perguntas.addEventListener('click', (e) => {
    const clickedButton = e.target
    if(clickedButton.id === 'expand_resposta'){
        const respostaField = clickedButton.parentElement.parentElement.parentElement.children[1]
        if(!clickedButton.classList.contains('perguntaAtiva')) {
            clickedButton.classList.add('perguntaAtiva')
            respostas.forEach((resposta) => {
                if(resposta.attributes.style !== undefined){
                    let clickedButton = resposta.parentElement.children[0].children[0].children[0]
                    let respostaField = resposta
                    fecharResposta(clickedButton, respostaField)
                }
            })
            respostaField.style.display = 'block'
        } else {
            fecharResposta(clickedButton, respostaField)
        }
    }
})