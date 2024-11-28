function post(data){
    let parentBlock = document.querySelector('.section-posts');

    let postComponent = document.createElement('div');
    postComponent.className += 'post-component';

    let post = document.createElement('div');
    post.className += 'post';

    let container = document.createElement('div');
    container.className += 'form-container';

    let headerPost = document.createElement('div');
    headerPost.className += 'header-post';

    let postInfa = document.createElement('div');
    postInfa.className += 'post-infa';
    postInfa.textContent = `${data['name']} - ${data['createTime']} в сообществе ${data['communityName']}`;

    let postName = document.createElement('h2');
    postName.className += 'post-name';
    postName.textContent = `${data['postName']}`

    container.appendChild(postInfa);
    container.appendChild(postName)

    
    post.appendChild(container);
    postComponent.appendChild(post);
    parentBlock.appendChild(postComponent);
}

export default post;