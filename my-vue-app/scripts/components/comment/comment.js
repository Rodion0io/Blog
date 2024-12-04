import { CHANGED_COMMENT_MESSAGE } from "../../../constans";
import { ANSWER_TEXT } from "../../../constans";
import { OPEN_ANSWERS } from "../../../constans";
import { DELETE_COMMENT_MESSAGE } from "../../../constans";
import { checkAuthorId } from "../../logic/checkAuthorId";

function comment(data){
    let parentBlock = document.querySelector('.comment-container');

    let commentBlock = document.createElement('div');
    commentBlock.className += 'comment';

    let headerComment = document.createElement('div');
    headerComment.className += 'header-comment';

    let redactIcon = document.createElement('img');
    redactIcon.className += 'redact-icon';
    redactIcon.src = '../../../public/pen.svg';
    redactIcon.alt = 'Редактировать';

    let deleteIcon = document.createElement('img');
    deleteIcon.className += 'delete-icon';
    deleteIcon.src = '../../../public/trash.svg';
    deleteIcon.alt = 'Удалить';


    let commentAuthor = document.createElement('h3');
    commentAuthor.className += 'comment-author';
    commentAuthor.textContent = data['author'];

    //
    let contentBlock = document.createElement('div');
    contentBlock.className += 'content-block';

    let commentText = document.createElement('p');
    commentText.className += 'comment-text';
    

    let changedMessage = document.createElement('span');
    changedMessage.className += 'changed-message';
    changedMessage.textContent = CHANGED_COMMENT_MESSAGE;

    let otherInfa = document.createElement('div');
    otherInfa.className += 'other-infa-block';

    let dateText = document.createElement('p');
    dateText.className += 'date-text'
    // dateText.textContent = '19.12.2022 17:02'
    dateText.textContent = data['createTime'];

    otherInfa.appendChild(dateText);

    headerComment.appendChild(commentAuthor);

    if (data['deleteDate'] == null){
        let answerComment = document.createElement('button');
        answerComment.className += 'answer-comment';
        answerComment.textContent = ANSWER_TEXT;
        otherInfa.appendChild(answerComment);
        console.log(data['authorId'])
        if (checkAuthorId(data['authorId']) === null){
            headerComment.appendChild(redactIcon);
            headerComment.appendChild(deleteIcon);
        }
        if (data["modifiedDate"] !== null){
            commentText.textContent = data['content']
            contentBlock.appendChild(changedMessage);
        }
        else{
            commentText.textContent = data['content']
        }
    }
    else{
        commentText.textContent = DELETE_COMMENT_MESSAGE;
        commentAuthor.textContent = DELETE_COMMENT_MESSAGE;
    }

    
    let openAnswers = document.createElement('button');
    openAnswers.className += 'open-answer';
    openAnswers.textContent = OPEN_ANSWERS;



    contentBlock.appendChild(commentText);
    
    
    // commentBlock.appendChild(commentAuthor);
    commentBlock.appendChild(headerComment)
    commentBlock.appendChild(contentBlock);
    commentBlock.appendChild(otherInfa);
    
    if (data["subComments"] !== 0){
        commentBlock.appendChild(openAnswers);
    }

    parentBlock.appendChild(commentBlock);
}

export default comment;