function listAccount(email){

    let dropDown = document.createElement('div');
    dropDown.className += 'dropdown';

    let hover = document.createElement('div');
    hover.className += '-hover';

    let currentAccount = document.createElement('span');
    currentAccount.className += 'current-account';
    currentAccount.textContent = email;

    let listActions = document.createElement('div');
    listActions.className += '-list';

    let onProfile = document.createElement('p');
    onProfile.className += 'on-fporile';
    onProfile.textContent = 'Профиль'

    let exit = document.createElement('p');
    exit.className += 'exit';
    exit.textContent += 'Выйти'

    listActions.appendChild(onProfile);
    listActions.appendChild(exit);

    hover.appendChild(currentAccount);

    dropDown.appendChild(hover);
    dropDown.appendChild(listActions);

    // let currentAccount = document.createElement('p');
    // currentAccount.className += 'current-account';
    // currentAccount.textContent = email;
    // currentAccount.setAttribute('white-space', 'nowrap');
    // currentAccount.setAttribute('overflow', 'hidden');
    // currentAccount.setAttribute('text-overflow', 'ellipsis');


    let block = document.querySelector('.hero-content__right');

    block.innerHTML = '';

    block.appendChild(dropDown);
}

export default listAccount;