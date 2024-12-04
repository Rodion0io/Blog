function commentForm(){
    let parentBlock = document.querySelector('.section-post .container');

    let form = document.createElement('div');
    form.className += 'form-blockk';

    let container = document.createElement('div');
    container.className += 'form-container';

    let commentForm = document.createElement('div');
    commentForm.className += 'comment-form';

    let blockName = document.createElement('h2');
    blockName.className += 'block-name';
    blockName.textContent = 'Оставить коментарий';

    let inputBlock = document.createElement('textarea');
    inputBlock.className += 'input-block';

    let buttonBlock = document.createElement('div');
    buttonBlock.className += 'button-block';

    let buttonBlockContainer = document.createElement('div');
    buttonBlockContainer.className += 'button-block_container'

    let sendButton = document.createElement('button');
    sendButton.className += 'btn send-comment';
    sendButton.textContent = 'Отправить'

    buttonBlockContainer.appendChild(sendButton);
    buttonBlock.appendChild(buttonBlockContainer);
    container.appendChild(blockName);
    container.appendChild(inputBlock);
    container.appendChild(buttonBlock);
    commentForm.appendChild(container);
    form.appendChild(commentForm);
    parentBlock.appendChild(form);
}

export default commentForm;