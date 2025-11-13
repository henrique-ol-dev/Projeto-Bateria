document.body.addEventListener('keyup', (event)=>{
    playSound(event.code.toLowerCase());
});

function playSound(sound){
    let audioELement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    if(audioELement){
        audioELement.play();
    }

    if(keyElement){
        keyElement.classList.add('active');
    

    setTimeout(()=>{
        keyElement.classList.remove('active');
    }, 300);
}
}