export function openCreaterPost(){
    let button = document.querySelector('.new-post');

    button.addEventListener('click', () => {
        window.location.pathname = '/post/create';
    });
}