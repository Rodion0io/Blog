function commentBlock(data){

    let parentBlock = document.querySelector('.section-post .container');

    let comments = document.createElement('div');
    comments.className = 'comments';
    
    let container = document.createElement('div');
    container.className += 'form-container';

    let commentsBlock = document.createElement('div');
    commentsBlock.className += 'comments-block';

    let blockTitle = document.createElement('h2');
    blockTitle.className += 'block-title';
    blockTitle.textContent = 'Комментарии';

    let commentContainer = document.createElement('div');
    commentContainer.className += 'comment-container';
    
    container.appendChild(blockTitle);
    container.appendChild(commentContainer);
    commentsBlock.appendChild(container)
    comments.appendChild(commentsBlock);
    parentBlock.appendChild(comments);
}

export default commentBlock;