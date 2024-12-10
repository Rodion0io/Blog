import { modifyDate } from "../../logic/modifyDate";

function authorsCard(data){
    let modifyCreateTime = modifyDate(data['created']);
    let modifyBrthday = data['birthDate'] !== null ? modifyDate(data['birthDate']) : null;
    let parentBlock = document.querySelector('.authors-list-block');
    
    let block = document.createElement('div');
    block.className += 'card-block';

    let containerCard = document.createElement('div');
    containerCard.className += 'card-container';

    let infaContainer = document.createElement('div');
    infaContainer.className += 'infa-container';

    let authorInfaBlock = document.createElement('div');
    authorInfaBlock.className += 'author-infa';

    let authorPhoto = document.createElement('img');
    authorPhoto.className += 'author-photo';

    
    if (data['gender'] === 'Male'){
        if (data['first'] === true){
            const goldColor = getComputedStyle(document.documentElement).getPropertyValue('--gold-color');
            authorPhoto.style.border = `5px solid ${goldColor}`;
        }
        else if (data['second'] === true){
            const silverColor = getComputedStyle(document.documentElement).getPropertyValue('--silver-color');
            authorPhoto.style.border = `5px solid ${silverColor}`;
        }
        else if (data['third'] === true){
            const bronzeColor = getComputedStyle(document.documentElement).getPropertyValue('--bronze-color');
            authorPhoto.style.border = `5px solid ${bronzeColor}`;
        }
        authorPhoto.src = '../../../public/maleIcon.png';
    }
    else{
        if (data['first'] === true){
            const goldColor = getComputedStyle(document.documentElement).getPropertyValue('--gold-color');
            authorPhoto.style.border = `5px solid ${goldColor}`;
        }
        else if (data['second'] === true){
            const silverColor = getComputedStyle(document.documentElement).getPropertyValue('--silver-color');
            authorPhoto.style.border = `5px solid ${silverColor}`;
        }
        else if (data['third'] === true){
            const bronzeColor = getComputedStyle(document.documentElement).getPropertyValue('--bronze-color');
            authorPhoto.style.border = `5px solid ${bronzeColor}`;
        }
        authorPhoto.src = '../../../public/feemaleIcon.png';
    }
    
    authorPhoto.alt = 'Фото';

    let authorTextInfa = document.createElement('div');
    authorTextInfa.className += 'text-infa-author';

    let authorTextInfaUp = document.createElement('div');
    authorTextInfaUp.className += 'text-infa-up';

    let authorName = document.createElement('strong');
    authorName.className += 'author-name';
    authorName.textContent = data['fullName'];

    let authorCreateTime = document.createElement('p');
    authorCreateTime.className += 'author-create';
    authorCreateTime.textContent = `Создан: ${modifyCreateTime}`;

    authorTextInfaUp.appendChild(authorName);
    authorTextInfaUp.appendChild(authorCreateTime);

    authorTextInfa.appendChild(authorTextInfaUp);

    if (modifyBrthday !== null){
        let authorBirthday = document.createElement('div');
        authorBirthday.className += 'author-birthday';
        let authorBirthdayText = document.createElement('p');
        authorBirthdayText.className += 'bithday-author-text';
        authorBirthdayText.textContent = `Дата рождения:`;
        let authorDataText = document.createElement('p');
        authorDataText.className += 'author-data-text';
        authorDataText.textContent = `${modifyBrthday}`;
        authorBirthday.appendChild(authorBirthdayText);
        authorBirthday.appendChild(authorDataText);
        // authorBirthday.textContent = `Дата рождения: ${modifyBrthday}`;
        authorTextInfa.appendChild(authorBirthday);
    }

    let statisticBlock = document.createElement('div');
    statisticBlock.className += 'statistic-block';

    let countPostsBlcok = document.createElement('p');
    countPostsBlcok.className += 'statistic post-counts';
    countPostsBlcok.textContent = `Постов: ${data['posts']}`;

    let countLikesBlock = document.createElement('p');
    countLikesBlock.className += 'statistic count-likes';
    countLikesBlock.textContent = `Лайков: ${data['likes']}`;

    statisticBlock.appendChild(countPostsBlcok);
    statisticBlock.appendChild(countLikesBlock);
    
    authorInfaBlock.appendChild(authorPhoto);
    authorInfaBlock.appendChild(authorTextInfa);


    infaContainer.appendChild(authorInfaBlock);
    infaContainer.appendChild(statisticBlock);
    containerCard.appendChild(infaContainer);
    block.appendChild(containerCard);
    parentBlock.appendChild(block)
}

export default authorsCard;