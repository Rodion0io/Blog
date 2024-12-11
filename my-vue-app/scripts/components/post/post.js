function post(data){
    let parentBlock = document.querySelector('.section-posts');

    // console.log(parentBlock);

    let postComponent = document.createElement('article');
    postComponent.className += 'post-component';
    postComponent.id = data['id'];

    let container = document.createElement('div');
    container.className += 'form-container';

    let footerContainer = document.createElement('div');
    footerContainer.className += 'form-container footer-container';

    let headerPost = document.createElement('div');
    headerPost.className += 'header-post';

    let postInfa = document.createElement('div');
    postInfa.className += 'post-infa';
    postInfa.textContent = `${data['author']} - ${data['createTime']} в сообществе ${data['communityName']}`;

    let postNameBlock = document.createElement('div');
    postNameBlock.className += 'post-name-block';

    let postName = document.createElement('h2');
    postName.className += 'post-name';
    postName.textContent = `${data['title']}`;


    let mainInfa = document.createElement('div');
    mainInfa.className += 'main-infa';


    if (data['image'] !== null){
        let photoBlock = document.createElement('div')
        photoBlock.className += 'photo-block';

        let postPhoto = document.createElement('img');
        postPhoto.className += 'post-photo';
        postPhoto.src = `${data['image']}`
        // postPhoto.src = '../public/petrovich.jpeg'
        postPhoto.alt = 'Фото поста';

        photoBlock.appendChild(postPhoto);

        mainInfa.appendChild(photoBlock);
    }
    
    let postText = document.createElement('p');
    postText.className += 'post-text';
    postText.textContent = `${data['description']}`;

    


    let otherInfa = document.createElement('div');
    otherInfa.className += 'other-infa';


    // Здесь уточнить, возможно нужнл использовать ul
    let tags = document.createElement('div');
    tags.className += 'tags';

    data['tags'].forEach(element => {
        let tag = document.createElement('span');
        tag.className += 'tag';

        tag.id = element['id'];
        tag.textContent = `#${element['name']}`;


        tags.appendChild(tag);
    });


    let readingTime = document.createElement('p');
    readingTime.className += 'reading-time';
    readingTime.textContent = `Время чтения ${data['readingTime']} мин.`;


    let postFooter = document.createElement('footer');
    postFooter.className += 'post-footer';

    let commentsInfaBlock = document.createElement('div');
    commentsInfaBlock.className += 'comments-infa-block';

    let countComments = document.createElement('span');
    countComments.className = 'count-comments';
    countComments.textContent = `${data['commentsCount']}`

    let commentIcon = document.createElement('img');
    commentIcon.className += 'comment-icon';
    commentIcon.src = '../public/comment.svg'
    commentIcon.alt = 'Комментарий';
    commentIcon.id = data['id'];


    let likeInfaBlock = document.createElement('div');
    likeInfaBlock.className += 'like-infa-block';

    let countLikes = document.createElement('span');
    countLikes.className = 'count-likes';
    countLikes.textContent = `${data['likes']}`

    let likeIcon = document.createElement('img');
    likeIcon.className += 'like-icon';
    likeIcon.src = `${data['hasLike'] ? '../public/slectedHeart.svg'
     : '../public/heart.svg'}`
    likeIcon.alt = 'лайк';
    likeIcon.id = data['id'];
    // console.log(data['hasLike']);

    likeInfaBlock.appendChild(countLikes);
    likeInfaBlock.appendChild(likeIcon);

    commentsInfaBlock.appendChild(countComments);
    commentsInfaBlock.appendChild(commentIcon);


    footerContainer.appendChild(commentsInfaBlock);
    footerContainer.appendChild(likeInfaBlock);


    postNameBlock.appendChild(postName);

    
    mainInfa.appendChild(postText);


    

    otherInfa.appendChild(tags);
    otherInfa.appendChild(readingTime);

    container.appendChild(postInfa);
    container.appendChild(postNameBlock);
    container.appendChild(mainInfa);
    container.appendChild(otherInfa);
    // container.appendChild(postFooter);

    postFooter.appendChild(footerContainer);
    postComponent.appendChild(container);
    postComponent.appendChild(postFooter);
    // postComponent.appendChild(postFooter);
    parentBlock.appendChild(postComponent);
}

export default post;