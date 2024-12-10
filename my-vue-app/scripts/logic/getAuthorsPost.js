import { getPosts } from "./getPosts";

export function getAuthorsPost(){
    let link = document.querySelectorAll('.author-name');

    

    link.forEach(button => {
        button.addEventListener('click', (event) => {
            let authorName = event.target.textContent;
            window.history.pushState({}, 'some title', `/${authorName}`);
            console.log(authorName);
        })
    })
}