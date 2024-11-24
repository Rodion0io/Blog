export function createInputBlock(inputBlockClass, forName, labelValue, inputType,
    placeholder = null, inputId, isRequired){

    
    let inputBlock = document.createElement('div');
    inputBlock.className = inputBlockClass;

    let lableInput = document.createElement('label');
    lableInput.className = 'lable';
    lableInput.setAttribute('for', forName);
    lableInput.textContent = labelValue;

    let input = document.createElement('input');
    input.className = 'input';
    input.setAttribute('type', inputType);
    input.setAttribute('name', forName);
    if (placeholder !== null){
        input.setAttribute('placeholder', placeholder);
    }

    input.required = isRequired;
    input.id = inputId;


    inputBlock.appendChild(lableInput);
    inputBlock.appendChild(input);

    return inputBlock;
}