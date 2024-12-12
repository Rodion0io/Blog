export function openCreaterPost(){
    let button = document.querySelector('.new-post');

    if (button !== null){
        button.addEventListener('click', () => {
            window.location.pathname = '/post/create';
        });
    }
    
}