import AuthorizeForm from "./components/authorize/authorizeForm";
import registrationForm from "./components/registration/registration";

function router() {
    let pathLink = window.location.pathname;
    let parentBlock = document.getElementById('app');
    // console.log(main);
    // console.log(pathLink);

    // Очищаем содержимое parentBlock
    parentBlock.innerHTML = '';

    switch (pathLink) {
        case '/':
            // console.log('ok');
            parentBlock.innerHTML = '<h1>bim bim bam bam</h1>';
            break;
        case '/login':
            // console.log('ok');
            parentBlock.appendChild(AuthorizeForm());
            break;
        case '/registration':
            parentBlock.appendChild(registrationForm());
    }

    // Добавляем обработчик события клика на все ссылки
    document.querySelectorAll('.href').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            let path = event.target.href;

            window.history.pushState({ route: path }, "some title", path);
            router(); // Перезапускаем роутер для обновления контента
        });
    });

    // Обработка изменения истории навигации
    window.addEventListener('popstate', router);
}

// Вызываем роутер при загрузке страницы
window.addEventListener('load', router);

export default router;