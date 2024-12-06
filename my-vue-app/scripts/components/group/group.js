function group(dataGroup){
    let parentBlock = document.querySelector('.list-group');

    let groupBlock = document.createElement('li');
    groupBlock.className += 'group-block';
    groupBlock.id = dataGroup['id'];

    let groupBlockContainer = document.createElement('div');
    groupBlockContainer.className += 'group-block-container';

    let contentGroup = document.createElement('div');
    contentGroup.className += 'content-group-block';

    let groupTitle = document.createElement('h2');
    groupTitle.className += 'group-title';
    groupTitle.textContent = dataGroup['name'];
    groupTitle.id = dataGroup['id'];

    contentGroup.appendChild(groupTitle);

    let buttonBlock = document.createElement('div');
    buttonBlock.className += 'butt-block';

    let subscribeButton = document.createElement('button');
    subscribeButton.className += 'btn subscribe';
    subscribeButton.textContent = 'Подписаться';
    buttonBlock.appendChild(subscribeButton);

    contentGroup.appendChild(buttonBlock);

    // console.log(dataGroup);
    // console.log(userInfaGroup);

    // if (userInfaGroup !== null){
    //     let value = userInfaGroup["role"];
    //     console.log(value);
    //     if (value === 'Subscriber'){
    //         let unsubscribeButton = document.createElement('button');
    //         unsubscribeButton.className += 'btn unsubscribe';
    //         unsubscribeButton.textContent = 'Отписаться';
    //         contentGroup.appendChild(unsubscribeButton);
    //     }
    //     else if (value === 'Administrator'){
    //         return;
    //     }
    //     else {
    //         let subscribeButton = document.createElement('button');
    //         subscribeButton.className += 'btn subscribe';
    //         subscribeButton.textContent = 'Подписаться';
    //         contentGroup.appendChild(subscribeButton);
    //     }
    // }
    
    

    groupBlockContainer.appendChild(contentGroup);
    groupBlock.appendChild(groupBlockContainer);
    parentBlock.appendChild(groupBlock);
}

export default group;