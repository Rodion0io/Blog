import { wrapText } from "./wrapText";

export function createWrapperBlock(){
    let mainInfaBlock = document.querySelectorAll('.main-infa');
            mainInfaBlock.forEach(el => {
            let text = el.querySelector('.post-text');
            if (el.clientHeight >= 100){
                let wrapper = document.createElement('p');
                wrapper.className += 'text-wrapper';
                wrapper.textContent = 'Читать полностью';
                el.appendChild(wrapper);
                text.style.height = '50px';
                text.style.overflow = 'hidden';
                wrapText();
            }
        })
}