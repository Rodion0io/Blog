function listAccount(email){

    let block = document.querySelector('.hero-content__right');

    if (localStorage.getItem('token')){
        let dropDown = document.createElement('div');
        dropDown.className += 'dropdown';

        let hover = document.createElement('div');
        hover.className += '-hover';

        let currentAccount = document.createElement('span');
        currentAccount.className += 'current-account';
        currentAccount.textContent = email;

        let listActions = document.createElement('div');
        listActions.className += '-list';

        let onProfile = document.createElement('a');
        onProfile.className += 'on-fporile';
        onProfile.textContent = 'Профиль'
        onProfile.setAttribute('href', '/profile')

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

        block.innerHTML = '';

        block.appendChild(dropDown);
    }
    else{
        

        block.innerHTML = '';
        let item = document.createElement('a');
        item.className += 'href enter';
        item.setAttribute('href', '/login');
        item.textContent = 'Вход';
        block.appendChild(item);
    }
    
}

export default listAccount;