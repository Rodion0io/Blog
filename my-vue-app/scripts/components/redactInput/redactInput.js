function redactInput(){
    let parentBlock = document.querySelector('.content-block');
    let currentText = document.querySelector('.comment-text').value;

    let redactBlock = document.createElement('div');
    redactBlock.className += 'redact-block';

    let redactInput = document.createElement('input');
    redactInput.className += 'input redact-input';
    redactInput.setAttribute('type', 'text');
    redactInput.value = currentText;

    let redactButton = document.createElement('button');
    redactButton.className += 'btn redact-button';
    redactButton.textContent = 'Редактировать';

    redactBlock.appendChild(redactInput);
    redactBlock.appendChild(redactButton);

    parentBlock.innerHTML = '';
    parentBlock.appendChild(redactBlock);
    
}

export default redactInput;