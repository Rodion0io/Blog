export function wrapText(){
    // let text = document.querySelectorAll('.post-text');
    let button = document.querySelectorAll('.text-wrapper');
    let isWrap = true;

    // console.log(button);
    // console.log(text);
    
        // if (isWrap){
        //     text.style.maxHeight = '50px';
        //     button.textContent = 'Читать полностью';
        // }
        // else{
        //     text.style.maxHeight = 'auto';
        //     button.textContent = 'Свернуть';
        // }
    
    console.log(button);
    
    button.forEach(el => {
        el.addEventListener('click', (event) => {
            console.log(event.target);
            let parentBlock = event.target.closest('.main-infa');
            console.log(parentBlock);
            let text = parentBlock.querySelector('.post-text');
            if (isWrap){
                text.style.height = '50px';
                event.target.textContent = 'Читать полностью';
            }
            else{
                text.style.height = 'auto';
                event.target.textContent = 'Свернуть';
            }
            isWrap = !isWrap;
        })
    })
    
    
        // button.addEventListener('click', () => {
        //     isWrap = !isWrap;
        //     if (isWrap){
        //         text.style.maxHeight = '50px';
        //         button.textContent = 'Читать полностью';
        //     }
        //     else{
        //         text.style.maxHeight = 'auto';
        //         button.textContent = 'Свернуть';
        //     }
        // });
    
}