function adminCommunityBlock(data){
    let parentBlock = document.querySelector('.list-admin');

    let adminCard = document.createElement('div');
    adminCard.className += 'admin-card';

    let adminPhoto = document.createElement('img');
    adminPhoto.className += 'admin-photo';
    adminPhoto.alt = 'Фото';

    if (data['gender'] === 'Male'){
        adminPhoto.src = '../../../public/maleIcon.png';
    }
    else{
        adminPhoto.src = '../../../public/feemaleIcon.png';
    }

    let adminName = document.createElement('h3');
    adminName.className += 'admin-name';
    adminName.textContent = `${data['fullName']}`;


    adminCard.appendChild(adminPhoto);
    adminCard.appendChild(adminName);
    parentBlock.appendChild(adminCard);

}

export default adminCommunityBlock;