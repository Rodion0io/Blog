function answerCommentInput(parentBlock) {
    if (!parentBlock) {
        console.error('Parent block is not provided for answerCommentInput');
        return;
    }

    let answerBlock = document.createElement('div');
    answerBlock.className += 'answer-block';

    let answerInput = document.createElement('input');
    answerInput.className += 'input answer-input';
    answerInput.setAttribute('type', 'text');
    answerInput.placeholder = 'Оставьте комментарий!';

    let answerButton = document.createElement('button');
    answerButton.className += 'btn answer-button';
    answerButton.textContent = 'Отправить';

    answerBlock.appendChild(answerInput);
    answerBlock.appendChild(answerButton);

    parentBlock.innerHTML = '';
    parentBlock.appendChild(answerBlock);
}

export default answerCommentInput;