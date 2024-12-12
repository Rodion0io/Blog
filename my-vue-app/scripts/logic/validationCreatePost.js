import { URL_MASK } from "../../constans";

export function validationCreatepost(namePost, timeReading, linkPhoto, descriptionPost, errorBlock, tags, tagsBlock){
    let name = namePost.value;
    let time = timeReading.value;
    let photo = linkPhoto.value;
    let description = descriptionPost.value;

    if (name.trim().length < 5 || name.trim().length > 30){
        namePost.style = "border: 1px solid red";
        errorBlock.style = "display: block";
        errorBlock.textContent = "Название должно содержать мин. 5 символов и макс. 30";
        return 1;
    }
    else{
        namePost.style = "border: 1px solid #e1e1e1";
    }
    if (time < 1 || time > 1000){
        timeReading.style = "border: 1px solid red";
        errorBlock.style = "display: block";
        errorBlock.textContent = "Неккоректное кол-во минут";
        return 1;
    }
    else{
        timeReading.style = "border: 1px solid #e1e1e1";
    }
    if (tags.length === 0){
        tagsBlock.style = "border: 1px solid red";
        errorBlock.style = "display: block";
        errorBlock.textContent = "Выберите мин. одну категорию";
        return 1;
    }
    else{
        tagsBlock.style = "border: 1px solid #e1e1e1";
    }
    if (photo !== ''){
        if (!URL_MASK.test(photo)){
            linkPhoto.style = "border: 1px solid red";
            errorBlock.style = "display: block";
            errorBlock.textContent = "Неккоректный URL";
            return 1;
        }
        else{
            linkPhoto.style = "border: 1px solid #e1e1e1";
        }
    }
    if (description.trim().length < 5){
        descriptionPost.style = "border: 1px solid red";
        errorBlock.style = "display: block";
        errorBlock.textContent = "Короткое описание! Мин.5 символов";
        return 1;
    }
    else{
        descriptionPost.style = "border: 1px solid #e1e1e1";
    }

    return {name, time, photo, description};
}

