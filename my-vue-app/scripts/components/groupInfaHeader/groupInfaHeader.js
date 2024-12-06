function groupInfaHeader(data){
    let parentBlock = document.querySelector('.group');

    // console.log(parentBlock);

    let sectionHeader = document.createElement('div');
    sectionHeader.className += 'section-header';

    let headerBlock = document.createElement('div');
    headerBlock.className += 'header-grop';

    let blockContainer = document.createElement('div');
    blockContainer.className += 'form-container';




    let headerCommutnityInfa = document.createElement('div');
    headerCommutnityInfa.className += 'header-community-infa';

    let communityName = document.createElement('h1');
    communityName.className += 'community-name';
    communityName.textContent = `Группа "${data['name']}"`;




    let actionsBlock = document.createElement('div');
    actionsBlock.className += 'actions-block';

    let createPostButton = document.createElement('button');
    createPostButton.className += 'btn new-post';
    createPostButton.textContent = 'Написать пост';

    // let unsubscribeButton = 
    // let subscribe




    let infaBlock = document.createElement('div');
    infaBlock.className += 'infa-community-block';

    let countSubscribersBlock = document.createElement('div');
    countSubscribersBlock.className += 'count-subscribers';

    let iconSubscriber = document.createElement('img');
    iconSubscriber.className += 'icon-subscribers';
    iconSubscriber.src = '../../../public/users.svg'
    iconSubscriber.alt = 'иконка';

    let countSubscribersText = document.createElement('p');
    countSubscribersText.className += 'count-sub-text';
    countSubscribersText.textContent = `${data['subscribersCount']} подписчиков`;

    let typeCommunity = document.createElement('p');
    typeCommunity.className += 'type-community';
    typeCommunity.textContent = `Тип сообщества: ${data['isClosed'] ? 'открытый' : 'закрытый'}`;




    let adminsBlock = document.createElement('div');
    adminsBlock.className += 'admins-block';

    let adminsBlockTitle = document.createElement('h2');
    adminsBlockTitle.className += 'admins-block-title';
    adminsBlockTitle.textContent = 'Администраторы';

    let listAdmins = document.createElement('div');
    listAdmins.className += 'list-admin';

    actionsBlock.appendChild(createPostButton);


    countSubscribersBlock.appendChild(iconSubscriber);
    countSubscribersBlock.appendChild(countSubscribersText)


    headerCommutnityInfa.appendChild(communityName);
    headerCommutnityInfa.appendChild(actionsBlock);


    infaBlock.appendChild(countSubscribersBlock);
    infaBlock.appendChild(typeCommunity);


    adminsBlock.appendChild(adminsBlockTitle);
    adminsBlock.appendChild(listAdmins);


    blockContainer.appendChild(headerCommutnityInfa);
    blockContainer.appendChild(infaBlock);
    blockContainer.appendChild(adminsBlock);
    headerBlock.appendChild(blockContainer);
    sectionHeader.appendChild(headerBlock);
    parentBlock.appendChild(sectionHeader);
}

export default groupInfaHeader;